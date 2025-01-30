/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    MVHCommodityGUID: ComponentFramework.PropertyTypes.StringProperty;
    MVHCommodityText: ComponentFramework.PropertyTypes.StringProperty;
    RecordCount: ComponentFramework.PropertyTypes.StringProperty;
    BusinessUnit: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    MVHCommodityGUID?: string;
    MVHCommodityText?: string;
    RecordCount?: string;
    BusinessUnit?: string;
}
