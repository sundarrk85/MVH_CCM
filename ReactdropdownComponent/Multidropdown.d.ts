import * as React from "react";
export interface IOption {
    key: string;
    name: string;
    subOptions?: IOption[];
}
export interface IMultidropdownProps {
    name?: string;
    context: any;
    records: IOption[];
    SelectedValue: (newValue: string, id: string) => void;
    notifyOutputChanged: () => void;
}
export declare class Multidropdown extends React.Component<IMultidropdownProps, {
    selectedCommodityText: string;
    filteredRecords: IOption[];
    isOpen: {
        [key: string]: boolean;
    };
    isTreeVisible: boolean;
    selectedCommodityGuid: string | null;
    validationError: string | null;
}> {
    state: {
        selectedCommodityText: any;
        filteredRecords: IOption[];
        isOpen: {
            [key: string]: boolean;
        };
        isTreeVisible: boolean;
        selectedCommodityGuid: any;
        validationError: null;
    };
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterRecords: (selectedCommodityText: string) => void;
    handleOptionClick: (option: IOption) => void;
    validateSelection: () => boolean;
    renderOptions: (options: IOption[], level?: number) => React.ReactNode;
    render(): React.JSX.Element;
}
