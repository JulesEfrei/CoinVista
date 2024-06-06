import { Metadata } from "next";
import { ReactNode } from "react";
import { getTranslation } from "../translation";

export const metadata: Metadata = {
  title: "CoinVista - Login",
  applicationName: "CoinVista",
};

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
