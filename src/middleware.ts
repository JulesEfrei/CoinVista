import { updateSession } from "@utils/supabase/middleware";
import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "en-US", "en-UK", "fr", "fr-FR"];

function getLocale(request: NextRequest) {
  const defaultLocale = "en-US";
  const headerLocale = request.headers.get("Accept-Language").split(",")[0];
  return locales.some((locale) => headerLocale) ? headerLocale : defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname =
    request.nextUrl.pathname === "/" ? "/dashboard" : request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  const localesRegex =
    /^[A-Za-z]{2,4}([_-][A-Za-z]{4})?([_-]([A-Za-z]{2}|[0-9]{3}))?$/gm;

  //Remove no managed locale from pathname if nedeed
  const parsedPathname = pathname.split("/");
  parsedPathname[1] = parsedPathname[1].replace(localesRegex, "");

  // request.nextUrl.pathname = `/${locale}${parsedPathname.join("/")}`;
  const redirectUrl = `/${locale}${parsedPathname.join("/")}`;
  // return NextResponse.redirect(request.nextUrl);

  return updateSession(request, redirectUrl);
}

export const config = {
  matcher: [
    // Skip internal paths (_next)
    "/((?!_next).*)",
  ],
};
