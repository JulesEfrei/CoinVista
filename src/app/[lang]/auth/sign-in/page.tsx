"use client";
import AuthForm from "@molecules/AuthForm";
import type { translation as translationType } from "@customTypes/translationType";
import { sendOTP } from "@utils/supabase/actions";
import { getTranslation } from "app/[lang]/translation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = ({ params }: { params: { lang: string } }) => {
  const error = useSearchParams().get("error");

  const [translation, setTranslation] = useState<translationType | null>(null);

  useEffect(() => {
    const getATranslation = async () => {
      const translation = await getTranslation(params.lang.split("-")[0]);
      setTranslation(translation);
    };

    getATranslation();
  }, [params.lang]);

  if (error) {
    toast.error("Code invalid. Try again");
  }

  return (
    <>
      <div className="flex flex-col items-center gap-36 pt-14">
        <div>
          <h1 className="text-h1">
            {translation !== null
              ? translation.auth.title
              : "Welcome to Coinvista"}
          </h1>
          <p className="text-lead mt-4">
            {translation !== null
              ? translation.auth.email
              : "Enter your mail to continue"}
          </p>
        </div>
        <AuthForm
          formAction={sendOTP}
          fields={[{ label: "Email", name: "email", type: "email" }]}
          submitValue={
            translation !== null ? translation.auth.codeSubmit : "Send code"
          }
        />
      </div>
    </>
  );
};

export default SignInPage;
