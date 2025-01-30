//index.ts

import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { Multidropdown } from "./Multidropdown"; // Ensure the path is correct
import * as React from "react";

export class ReactdropdownComponent
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  //private records: any[] = [];
  //private hierarchy: any[] = []; // Hierarchical structure for the dropdown
  private hierarchyState: any[] = [];
  constructor() {
    this.OnSelectedValue = this.OnSelectedValue.bind(this);
  }

  /**
   * Convert raw records into a hierarchical structure
   * @param data - Array of records
   */
  private convertToHierarchyMVH = (data: any[]): any[] => {
    const hierarchy: any[] = [];

    data.forEach((item) => {
      // Find or create Level 1
      let level1 = hierarchy.find(
        (l1) => l1.name === item.mvh_l1commoditycalculated
      );
      if (!level1) {
        level1 = {
          name: item.mvh_l1commoditycalculated,
          key: item.mvh_l3commoditiesid,
          subOptions: [],
        };
        hierarchy.push(level1);
      }

      // If Level 2 exists, find or create it
      if (item.mvh_l2commoditycalculated) {
        let level2 = level1.subOptions.find(
          (l2: { name: any }) => l2.name === item.mvh_l2commoditycalculated
        );
        if (!level2) {
          level2 = {
            name: item.mvh_l2commoditycalculated,
            //key: item.mvh_L2Commodity.mvh_l2commodityid,
            key: item.mvh_l3commoditiesid,
            subOptions: [],
          };
          level1.subOptions.push(level2);
        }

        // If Level 3 exists, add it to Level 2
        if (item.mvh_l3commodityname) {
          level2.subOptions.push({
            name: item.mvh_l3commodityname,
            key: item.mvh_l3commoditiesid,
          });
        } else {
          level2.subOptions = null;
        }
      }
    });

    return hierarchy;
  };

  private convertToHierarchyVCA = (data: any[]): any[] => {
    const hierarchy: any[] = [];

    data.forEach((item) => {
      // Find or create Level 1
      let level1 = hierarchy.find(
        (l1) => l1.name === item.mvh_l1commoditycalculated
      );
      if (!level1) {
        level1 = {
          name: item.mvh_l1commoditycalculated,
          key: item.mvh_vcal2commodityid,
          subOptions: [],
        };
        hierarchy.push(level1);
      }

      // If Level 2 exists, add it to Level 1
      if (item.mvh_l2commodityname) {
        level1.subOptions.push({
          name: item.mvh_l2commodityname,
          key: item.mvh_vcal2commodityid,
        });
      } else {
        level1.subOptions = null;
      }
    });

    return hierarchy;
  };

  context: any;
  private MVHCommodityText: string = "";
  private MVHCommodityGUID: string = "";
  private BusinessUnit: string = "";

  //this.OnSelectedL1Value.bind(this);
  public OnSelectedValue(value: string, id: string) {
    this.MVHCommodityText = value;
    this.MVHCommodityGUID = id;

    console.log("value, id", value, id);
  }

  public async init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void
  ): Promise<void> {
    this.notifyOutputChanged = notifyOutputChanged;
    this.context = context;
    console.log("Component initialized with context:", context);
    return Promise.resolve();
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    // Pass the context as a prop to Multidropdown
    const fetchData = async () => {
      try {
        this.BusinessUnit = this.context.parameters.BusinessUnit.raw;
        if (
          this.BusinessUnit &&
          this.BusinessUnit.toLowerCase().includes("vca")
        ) {
          console.log("Fetching VCA data");
          const result = await context.webAPI.retrieveMultipleRecords(
            "mvh_vcal2commodity",
            "?$select=mvh_l1commoditycalculated,mvh_l2commodityname,mvh_vcal2commodityid&$expand=mvh_L1Commodity($select=mvh_vcal1commodityid)"
          );
          const records = result.entities;
          this.hierarchyState = this.convertToHierarchyVCA(records); // Update the class-level state
          console.log("Updated Hierarchy:", this.hierarchyState);
        } else {
          console.log("Fetching MVH data");
          const result = await context.webAPI.retrieveMultipleRecords(
            "mvh_l3commodities",
            "?$select=mvh_l1commoditycalculated,mvh_l2commoditycalculated,mvh_l3commodityname,mvh_l3commoditiesid&$expand=mvh_L2Commodity($select=mvh_l2commodityid)"
          );
          const records = result.entities;
          this.hierarchyState = this.convertToHierarchyMVH(records); // Update the class-level state
          console.log("Updated Hierarchy:", this.hierarchyState);
        }

        // Call the notifyOutputChanged to notify PowerApps framework of the change
        this.notifyOutputChanged();
      } catch (error) {
        /*try {
        console.log("Fetching MVH data");
        const result = await context.webAPI.retrieveMultipleRecords(
          "mvh_l3commodities",
          "?$select=mvh_l1commoditycalculated,mvh_l2commoditycalculated,mvh_l3commodityname,mvh_l3commoditiesid&$expand=mvh_L2Commodity($select=mvh_l2commodityid)"
        );
        const records = result.entities;
        this.hierarchyState = this.convertToHierarchyMVH(records); // Update the class-level state
        console.log("Updated Hierarchy:", this.hierarchyState);
        // Call the notifyOutputChanged to notify PowerApps framework of the change
        this.notifyOutputChanged();
      }*/ console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData method to get the data
    fetchData();
    const props = {
      name: "Power Apps", // Optional name prop
      context: context, // Pass the PCF context
      records: this.hierarchyState,
      SelectedValue: this.OnSelectedValue,
      notifyOutputChanged: this.notifyOutputChanged,
    };
    //this.MVHCommodityText = context.parameters.MVHCommodityText.raw || "";
    //this.MVHCommodityGUID = context.parameters.MVHCommodityGUID.raw || "";

    return React.createElement(Multidropdown, props);
  }

  public getOutputs(): IOutputs {
    return {
      MVHCommodityText: this.MVHCommodityText,
      MVHCommodityGUID: this.MVHCommodityGUID,
      RecordCount: this.hierarchyState.length.toString(),
      BusinessUnit: this.BusinessUnit,
    };
  }

  public destroy(): void {
    // Cleanup logic if needed
  }
}
