import Input from "@atoms/Input";
import Button from "@atoms/Button";
import { formField } from "@type/AuthFormType";

interface Props {
  fields: formField[];
  formAction: (FormData) => void;
}

const AuthForm = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <form className="w-full max-w-xs">
        <div className="flex flex-col gap-1">
          {props.fields.map((elm, index) => {
            return (
              <div>
                {!elm.value ? (
                  <label htmlFor={elm.name}>{elm.label}</label>
                ) : null}
                <Input
                  type={elm.value ? "hidden" : "text"}
                  placeholder={elm.placeholder || ""}
                  id={elm.name}
                  value={elm.value}
                />
              </div>
            );
          })}
          <div className="flex justify-center mt-3">
            <button type="submit" formAction={props.formAction}></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
