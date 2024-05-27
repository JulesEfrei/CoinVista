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
      <ToastContainer />
      <AuthForm
        formAction={verifyOTP}
        fields={[
          { label: "Email", name: "email", value: email },
          { label: "Code OTP", name: "code" },
        ]}
      />
    </>
  );
};

export default VerificationPage;
