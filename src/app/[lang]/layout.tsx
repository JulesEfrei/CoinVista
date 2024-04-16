import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@molecules/Navigation";
import ThemeProvider from "@atoms/context/Theme";

export const metadata: Metadata = {
  title: "Home - Dashboard",
  description: "",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang.split("-")[0] || "en"}>
      <ThemeProvider>
        <main>{children}</main>
        <Navigation />
      </ThemeProvider>
    </html>
  );
}
