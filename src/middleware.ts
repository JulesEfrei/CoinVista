import { updateSession } from "@utils/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "en-US", "en-UK", "fr", "fr-FR"];

function getLocale(request: NextRequest) {
  const defaultLocale = "en-US";
  const headerLocale = request.headers.get("Accept-Language").split(",")[0];
  return locales.some((locale) => headerLocale) ? headerLocale : defaultLocale;
}

export async function middleware(request: NextRequest) {
  const pathname =
    request.nextUrl.pathname === "/" ? "/dashboard" : request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    const localesRegex =
      /^[A-Za-z]{2,4}([_-][A-Za-z]{4})?([_-]([A-Za-z]{2}|[0-9]{3}))?$/gm;
    const parsedPathname = pathname.split("/");

    if (localesRegex.test(parsedPathname[0])) {
      parsedPathname[0] = parsedPathname[0].replace(localesRegex, "");
    }

    request.nextUrl.pathname = `/${locale}${parsedPathname.join("/")}`;

    return NextResponse.redirect(request.nextUrl);
  } else if (
    pathnameHasLocale &&
    request.nextUrl.pathname.split("/").length === 2
  ) {
    request.nextUrl.pathname += "/dashboard";

    return NextResponse.redirect(request.nextUrl);
  }

  let response = NextResponse.next();
  response = await updateSession(request, response);

  return response;
}

export const config = {
  matcher: [
    // Skip internal paths (_next)
    "/((?!_next).*)",
  ],
};
