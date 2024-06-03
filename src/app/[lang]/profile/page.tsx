import Button from "@atoms/Button";
import LogoutButton from "@atoms/LogoutButton";
import { removeAccount } from "@utils/supabase/actions";
import { createClient } from "@utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import { getTranslation } from "../translation";
import type { translation } from "@customTypes/translationType";

export default async function ProfilePage({
  params,
}: {
  params: { lang: string };
}) {
  const translation: translation = await getTranslation(
    params.lang.split("-")[0]
  );
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-in");
  }

  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="xs:w-full md:w-1/2 h-2/3 border-1 border-gray-500 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-h1">{translation.profile.title}</h1>
          <LogoutButton>{translation.profile.logout}</LogoutButton>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-3 mt-10">
          <div className="w-full">
            <p className="text-lead">{translation.profile.email}</p>
            <p className="text-p">{user?.email}</p>
          </div>
          <form action={removeAccount}>
            <input type="hidden" name="id" value={user?.id} />
            <Button type="submit" size="thin">
              {translation.profile.rmAccount}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
