"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "./server";
import { VerifyEmailOtpParams } from "@supabase/supabase-js";

export async function sendOTP(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
  };

  const { error } = await supabase.auth.signInWithOtp(data);

  if (error) {
    redirect("/auth/sign-in?error=true");
  }

  revalidatePath("/auth", "layout");
  redirect("/auth/verification?email=" + data.email);
}

export async function verifyOTP(formData: FormData) {
  const supabase = createClient();

  const data: VerifyEmailOtpParams = {
    email: formData.get("email") as string,
    token: formData.get("code") as string,
    type: "email",
  };

  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp(data);

  if (error) {
    redirect("/auth/verification?email=" + data.email + "&error=true");
  }

  revalidatePath("/", "layout");
  redirect("/en-US/dashboard");
}
