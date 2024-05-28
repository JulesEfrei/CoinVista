import { logout } from "@utils/supabase/actions";
import Button from "./Button";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button type="submit" size="thin">
        Logout
      </Button>
    </form>
  );
}
