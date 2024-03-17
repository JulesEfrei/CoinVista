import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@molecules/Navigation";
import { cookies } from "next/headers";
import ThemeSwitcher from "@atoms/ThemeSwitcher";

enum Theme {
  dark = "dark",
  light = "light",
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("x-coinvista-theme");

  return (
    <html lang="en" className={theme?.value}>
      <body
        className={
          inter.className +
          " w-screen min-h-screen dark:bg-slate-950 dark:text-white"
        }
      >
        <main>{children}</main>
        <Navigation />
        <ThemeSwitcher
          currTheme={theme?.value === "dark" ? Theme.dark : Theme.light}
        />
      </body>
    </html>
  );
}
