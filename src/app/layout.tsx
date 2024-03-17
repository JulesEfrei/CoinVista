import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@molecules/Navigation";
import { cookies } from "next/headers";
import ThemeSwitcher from "@atoms/ThemeSwitcher";
import ThemeProvider from "../utils/Theme";

export const metadata: Metadata = {
  title: "Home - Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <main>{children}</main>
        <Navigation />
        <ThemeSwitcher />
      </ThemeProvider>
    </html>
  );
}
