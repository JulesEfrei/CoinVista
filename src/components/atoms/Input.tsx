import { cva } from "class-variance-authority";
import { InputProps } from "@type/propsType";

const Input = (props: InputProps) => {
  const classes = cva(
    [
      "border",
      "rounded-md",
      "border-slate-500",
      "bg-white",
      "text-black",
      "placeholder:text-slate-500",
      "focus:border-slate-700",
      "focus:border-2",
      "invalid:border-danger",
    ],
    {
      variants: {
        disabled: {
          true: "text-slate-300 border-slate-300 placeholder:text-slate-300",
        },
        size: {
          sm: "px-1 text-sm h-5",
          md: "px-2 text-p h-7",
        },
        fullWidth: {
          true: "w-full",
        },
      },
      defaultVariants: {
        disabled: false,
        size: "md",
        fullWidth: false,
      },
    }
  );

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
      required={props.required}
      className={classes({
        disabled: props.disabled,
        size: props.size ?? "md",
        fullWidth: props.fullWidth ?? false,
      })}
      id={props.id ?? ""}
      name={props.name ?? ""}
      title={props.helperMsg}
    />
  );
};

export default Input;
