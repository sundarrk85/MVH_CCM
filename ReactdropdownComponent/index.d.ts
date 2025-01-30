/// <reference types="powerapps-component-framework" />
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
export declare class ReactdropdownComponent implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged;
    private hierarchyState;
    constructor();
    /**
     * Convert raw records into a hierarchical structure
     * @param data - Array of records
     */
    private convertToHierarchyMVH;
    private convertToHierarchyVCA;
    context: any;
    private MVHCommodityText;
    private MVHCommodityGUID;
    private BusinessUnit;
    OnSelectedValue(value: string, id: string): void;
    init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void): Promise<void>;
    updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement;
    getOutputs(): IOutputs;
    destroy(): void;
}
