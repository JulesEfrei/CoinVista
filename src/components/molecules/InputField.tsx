import Input from "@atoms/Input";
import { InputProps } from "@type/propsType";
import { cva } from "class-variance-authority";

interface InputFieldProps extends InputProps {
  name: string;
  title: string;
  subtitle?: string;
}

const InputField = (props: InputFieldProps) => {
  const labelClasses = cva(["mb-1", "text-black", "dark:text-white"], {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-p",
      },
      disabled: {
        true: "text-slate-300 dark:text-gray-500",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  });

  const subtitleClasses = cva(
    ["mt-2", "text-slate-500", "has-[:invalid]:text-danger"],
    {
      variants: {
        size: {
          sm: "text-xs",
          md: "text-sm",
        },
      },
      defaultVariants: {
        size: "md",
      },
    }
  );

  return (
    <div className="flex flex-col w-fit">
      <label
        htmlFor={props.name}
        id={props.id ? props.id + "-label" : ""}
        className={labelClasses({ disabled: props.disabled, size: props.size })}
      >
        {props.title}
      </label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
        id={props.id ? props.id + "-input" : ""}
        name={props.name}
        fullWidth={props.fullWidth}
        size={props.size}
        helperMsg={props.helperMsg}
      />
      {props.subtitle ? (
        <span
          className={subtitleClasses({
            size: props.size,
          })}
        >
          {props.subtitle}
        </span>
      ) : null}
    </div>
  );
};

export default InputField;
