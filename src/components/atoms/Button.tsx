import { cva } from "class-variance-authority";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
  type?: "submit" | "button";
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  intent?: /*"primary" | "secondary" |*/
  "danger" | "light" | "white" | "dark" | "underline" | "disabled" | "icon";
  size?: "sm" | "md" | "lg" | "thin";
  align?: "center" | "left" | "right";
}

const Button = (props: Props) => {
  const buttonClasses = cva(
    [
      "rounded-md",
      "py-2",
      "flex",
      "items-center",
      "font-medium",
      "gap-2",
      "shadow-sm",
    ],
    {
      variants: {
        intent: {
          /*primary: "",
        secondary: "",*/
          light: "text-slate-800 bg-slate-100 hover:bg-slate-200",
          dark: "text-white bg-black dark:bg-gray-800 dark:hover:opacity-75",
          white:
            "text-slate-800 bg-white hover:bg-slate-200 border-1 border-slate-400",
          danger:
            "text-white bg-red-400 hover:bg-danger dark:text-white dark dark:bg-danger dark:hover:bg-red-800",
          underline: "text-black hover:underline dark:text-white",
          disabled:
            "text-slate-400 bg-slate-200 dark:text-slate-700 dark:bg-black dark:border-1 dark:border-slate-700",
          icon: "border-1 text-black border-slate-300 bg-white hover:bg-slate-200 dark:border-slate-700 dark:text-white dark:bg-black dark:hover:bg-gray-800",
        },
        size: {
          sm: "px-3 text-sm",
          md: "px-3",
          lg: "px-5",
          thin: "text-sm px-7",
        },
        align: {
          center: "justify-center",
          left: "justify-start",
          right: "justify-end",
        },
      },
      defaultVariants: {
        intent: "light",
        size: "md",
        align: "center",
      },
    }
  );

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={!!props.disabled}
      className={buttonClasses({
        intent: props.disabled ? "disabled" : props.intent,
        size: props.size,
        align: props.align,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
