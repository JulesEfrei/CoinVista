"use client";
import AuthForm from "@molecules/AuthForm";
import { verifyOTP } from "@utils/supabase/actions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerificationPage = () => {
  const email = useSearchParams().get("email");
  const error = useSearchParams().get("error");

  if (error) {
    toast.error("Code invalid. Try again");
  }

  return (
    <>
      <div className="flex flex-col items-center gap-36 pt-14">
        <div>
          <h1 className="text-h1">Welcome to Coinvista</h1>
          <p className="text-lead mt-4">
            Check your mail inbox and enter the code
          </p>
        </div>
        <AuthForm
          formAction={verifyOTP}
          fields={[
            { label: "Email", name: "email", value: email, type: "hidden" },
            { label: "Code OTP", name: "code" },
          ]}
          submitValue="Verify"
        />
      </div>
    </>
  );
};

export default VerificationPage;
