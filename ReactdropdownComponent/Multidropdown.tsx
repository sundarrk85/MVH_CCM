import * as React from "react";
import { Button, Input } from "@fluentui/react-components";

export interface IOption {
  key: string;
  name: string;
  subOptions?: IOption[];
}

export interface IMultidropdownProps {
  name?: string;
  context: any; // The PCF context object
  records: IOption[];
  SelectedValue: (newValue: string, id: string) => void;
  notifyOutputChanged: () => void;
}

export class Multidropdown extends React.Component<
  IMultidropdownProps,
  {
    selectedCommodityText: string;
    filteredRecords: IOption[];
    isOpen: { [key: string]: boolean };
    isTreeVisible: boolean;
    selectedCommodityGuid: string | null;
    validationError: string | null; // Hold the validation error
  }
> {
  state = {
    selectedCommodityText:
      this.props.context.parameters.MVHCommodityText.raw || "",
    filteredRecords: this.props.records,
    isOpen: {} as { [key: string]: boolean },
    isTreeVisible: false,
    selectedCommodityGuid:
      this.props.context.parameters.MVHCommodityGUID?.raw || null,
    validationError: null,
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCommodityText = e.target.value;
    this.setState(
      {
        selectedCommodityText,
        selectedCommodityGuid: null,
        validationError: null,
        isTreeVisible: true,
      },
      () => {
        this.filterRecords(selectedCommodityText);
      }
    );
  };

  filterRecords = (selectedCommodityText: string) => {
    const { records } = this.props;

    if (selectedCommodityText.trim() === "") {
      this.setState({ filteredRecords: records });
      return;
    }

    const filterRecords = (options: IOption[]): IOption[] => {
      return options
        .map((option) => {
          const subOptions = option.subOptions
            ? filterRecords(option.subOptions)
            : null;
          if (
            option.name
              .toLowerCase()
              .includes(selectedCommodityText.toLowerCase()) ||
            (subOptions && subOptions.length > 0)
          ) {
            return {
              ...option,
              subOptions,
            };
          }
          return null;
        })
        .filter(Boolean) as IOption[];
    };

    this.setState({
      filteredRecords: filterRecords(records),
    });
  };

  handleOptionClick = (option: IOption) => {
    this.props.SelectedValue(option.name, option.key);
    this.props.notifyOutputChanged();

    this.setState({
      selectedCommodityText: option.name,
      selectedCommodityGuid: option.key,
      validationError: null,
      isTreeVisible: false,
    });
  };

  validateSelection = () => {
    if (!this.state.selectedCommodityGuid) {
      const error = "Please select a commodity.";
      this.setState({ validationError: error }, () => {
        this.props.notifyOutputChanged(); // Notify the model-driven app
      });
      return false;
    }
    this.setState({ validationError: null }, () => {
      this.props.notifyOutputChanged(); // Clear error if validation passes
    });
    return true;
  };

  renderOptions = (options: IOption[], level = 0): React.ReactNode => {
    return (
      <div
        className="multidropdown__nested-options"
        style={{ paddingLeft: level * 20, paddingTop: "5px" }}
      >
        {options.map((option) => (
          <div key={option.key} className="multidropdown__option-container">
            <a
              href="#"
              className={`multidropdown__link ${
                option.subOptions ? "multidropdown__has-submenu" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (option.subOptions) {
                  const key = `${option.key}_open`;

                  this.setState((prevState) => ({
                    isOpen: {
                      ...prevState.isOpen,
                      [key]: !prevState.isOpen[key],
                    },
                  }));
                } else {
                  this.handleOptionClick(option);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "14px",
                padding: "5px 10px",
                margin: "3px 0",
                textDecoration: "none",
                color: "#0078d4",
              }}
            >
              <span>{option.name}</span>
              {option.subOptions && (
                <span
                  className="multidropdown__submenu-indicator"
                  style={{
                    fontSize: "18px",
                    paddingLeft: "8px",
                    transform: this.state.isOpen[`${option.key}_open`]
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  ▶
                </span>
              )}
            </a>

            {option.subOptions && this.state.isOpen[`${option.key}_open`] && (
              <div className="multidropdown__submenu">
                {this.renderOptions(option.subOptions, level + 1)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  render() {
    const {
      filteredRecords,
      selectedCommodityText,
      isTreeVisible,
      validationError,
    } = this.state;

    return (
      <div className="multidropdown__container" style={{ width: "250px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            value={selectedCommodityText}
            onChange={this.handleSearchChange}
            placeholder="Search by commodity name"
            style={{
              flex: 1,
              padding: "5px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />

          <Button
            onClick={() => {
              this.setState(
                (prevState) => ({ isTreeVisible: !prevState.isTreeVisible }),
                () => {
                  this.filterRecords(this.state.selectedCommodityText);
                }
              );
            }}
            style={{
              marginLeft: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              minWidth: "32px",
            }}
          >
            ▼
          </Button>
        </div>

        {isTreeVisible && (
          <div
            className="multidropdown__dropdown"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: "10px",
              padding: "10px",
              position: "absolute",
              zIndex: 1000,
            }}
          >
            {this.renderOptions(filteredRecords)}
          </div>
        )}

        {validationError && (
          <div style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
            {validationError}
          </div>
        )}
      </div>
    );
  }
}
