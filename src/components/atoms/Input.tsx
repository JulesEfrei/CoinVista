import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface Props {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  id?: string;
  name?: string;
}

const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
      className="border-2 rounded-md border-slate-950 px-2"
      id={props.id ?? ""}
      name={props.name ?? ""}
    />
  );
};

export default Input;
