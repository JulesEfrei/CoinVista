import { HTMLInputTypeAttribute } from "react";

export interface formField {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
}
