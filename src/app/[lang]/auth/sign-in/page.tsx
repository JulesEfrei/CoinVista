"use client";
import AuthForm from "@molecules/AuthForm";
import { sendOTP } from "@utils/supabase/actions";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
  const error = useSearchParams().get("error");

  if (error) {
    toast.error("Code invalid. Try again");
  }

  return (
    <>
      <div className="flex flex-col items-center gap-36 pt-14">
        <div>
          <h1 className="text-h1">Welcome to Coinvista</h1>
          <p className="text-lead mt-4">Enter your mail to continue</p>
        </div>
        <AuthForm
          formAction={sendOTP}
          fields={[{ label: "Email", name: "email", type: "email" }]}
          submitValue="Send code"
        />
      </div>
    </>
  );
};

export default SignInPage;
