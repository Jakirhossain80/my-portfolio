import type { Metadata } from "next";

const siteUrlValue = process.env.SITE_URL?.trim();

function parseSiteUrl(value: string | undefined): URL | undefined {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return undefined;
    }

    url.hash = "";
    url.search = "";
    url.pathname = url.pathname.replace(/\/$/, "");

    return url;
  } catch {
    return undefined;
  }
}

export const SITE_URL = parseSiteUrl(siteUrlValue);

export function getAbsoluteUrl(pathname: string): string | undefined {
  if (!SITE_URL) {
    return undefined;
  }

  return new URL(pathname, `${SITE_URL.toString()}/`).toString();
}

export function getCanonicalMetadata(pathname: string): Pick<Metadata, "alternates"> {
  const canonical = getAbsoluteUrl(pathname);

  return canonical ? { alternates: { canonical } } : {};
}

export function serializeJsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
