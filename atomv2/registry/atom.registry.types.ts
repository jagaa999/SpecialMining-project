import { ComponentType } from "react";

// export type AtomCategory =
//   | "Basic"
//   | "Media"
//   | "Action"
//   | "Input"
//   | "Layout"
//   | "Form"
//   | "Utility";

export type AtomRegistryItem = {
  type: string;
  component: ComponentType<any>;
  displayName: string;
  icon?: string;
  // category: AtomCategory;
  category:
    | "Basic"
    | "Media"
    | "Action"
    | "Input"
    | "Layout"
    | "Form"
    | "Utility";
  description?: string;
};
