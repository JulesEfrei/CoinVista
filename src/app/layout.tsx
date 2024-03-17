import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@molecules/Navigation";
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
      </ThemeProvider>
    </html>
  );
}
