import { cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import CLink from "./CLink";

interface Props extends LinkProps {
  intent?: /*"primary" | "secondary" |*/
  "danger" | "light" | "white" | "dark" | "underline" | "disabled";
  size?: "sm" | "md" | "lg" | "thin";
  align?: "center" | "left" | "right";
  children: ReactNode;
}

const StyledLink = (props: Props) => {
  const linkClasses = cva(
    ["rounded-md", "py-2", "flex", "items-center", "font-medium", "gap-2"],
    {
      variants: {
        intent: {
          light: "text-slate-800 bg-slate-100 hover:bg-slate-200",
          dark: "text-white bg-black dark:bg-gray-800 dark:hover:opacity-75",
          white:
            "text-slate-800 bg-white hover:bg-slate-200 border-1 border-slate-400",
          danger:
            "text-white bg-red-400 hover:bg-danger dark:text-white dark dark:bg-danger dark:hover:bg-red-800",
          underline: "text-black hover:underline dark:text-white",
          disabled: "text-slate-400 bg-slate-200 cursor-default",
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
    <CLink
      {...props}
      className={linkClasses({
        intent: props.intent,
        size: props.size,
        align: props.align,
      })}
    >
      {props.children}
    </CLink>
  );
};

export default StyledLink;
