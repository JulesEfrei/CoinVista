import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  helperMsg?: string;
  id?: string;
  name?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
}
