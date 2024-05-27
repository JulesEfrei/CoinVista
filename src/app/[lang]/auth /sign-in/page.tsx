"use client";
import AuthForm from "@molecules/AuthForm";
import { sendOTP } from "@utils/supabase/actions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
  const error = useSearchParams().get("error");

  if (error) {
    toast.error("Code invalid. Try again");
  }

  return (
    <>
      <ToastContainer />
      <AuthForm
        formAction={sendOTP}
        fields={[{ label: "Email", name: "email" }]}
      />
    </>
  );
};

export default SignInPage;
