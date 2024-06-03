import { logout } from "@utils/supabase/actions";
import Button from "./Button";
import { ReactNode } from "react";

export default function LogoutButton({ children }: { children: ReactNode }) {
  return (
    <form action={logout}>
      <Button type="submit" size="thin">
        {children}
      </Button>
    </form>
  );
}
