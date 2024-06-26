import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@molecules/Navigation";
import ThemeProvider from "@atoms/context/Theme";

export const metadata: Metadata = {
  title: "CoinVista - Dashboard",
  applicationName: "CoinVista",
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
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <ThemeProvider>
        <main className="h-full w-full p-2 sm:p-5 relative">{children}</main>
        <Navigation lang={params.lang.split("-")[0] || "en"} />
      </ThemeProvider>
    </html>
  );
}
