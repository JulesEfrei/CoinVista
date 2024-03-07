import { MouseEventHandler, ReactNode } from "react";

interface Props {
  type: "submit" | "button";
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  color?: { bg: string; text: "light" | "dark" };
}

const Button = (props: Props) => {
  const computeColors: () => string = () => {
    if (props.color) {
      return ` bg-${props.color.bg}-400 text-slate-${
        props.color.text === "light" ? "50" : "950"
      } hover:bg-${props.color.bg}-300`;
    } else {
      return " bg-slate-400 text-slate-50 hover:bg-slate-300";
    }
  };

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={!!props.disabled}
      className={"px-3 py-2 rounded-md" + computeColors()}
    >
      {props.children}
    </button>
  );
};

export default Button;
