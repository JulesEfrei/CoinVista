import Input from "@atoms/Input";
import Button from "@atoms/Button";
import type { formField } from "@customTypes/AuthFormType";
import InputField from "./InputField";

interface Props {
  fields: formField[];
  formAction: (arg: FormData) => void;
  submitValue?: string;
}

const AuthForm = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <form className="w-full max-w-xs" action={props.formAction}>
        <div className="flex flex-col gap-1">
          {props.fields.map((elm, index) => {
            return (
              <div key={elm.name + "-" + index}>
                <InputField
                  title={elm.label}
                  type={elm.type || "text"}
                  placeholder={elm.placeholder || ""}
                  id={elm.name}
                  value={elm.value}
                  name={elm.name}
                />
              </div>
            );
          })}
          <div className="flex justify-center mt-3">
            <Button size="thin" type="submit">
              {props.submitValue || "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
