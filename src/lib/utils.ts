import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Adds referrer parameter to external URLs
 * @param url - The URL to add referrer to
 * @param referrer - The referrer value (default: "cleanmate")
 * @returns The URL with referrer parameter added
 */
export function addReferrerToUrl(
  url: string,
  referrer: string = "cleanmate"
): string {
  // Only add referrer to external URLs (http:// or https://)
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return url;
  }

  try {
    const urlObj = new URL(url);
    // Add referrer parameter if it doesn't already exist
    if (!urlObj.searchParams.has("ref")) {
      urlObj.searchParams.set("ref", referrer);
    }
    return urlObj.toString();
  } catch {
    // If URL parsing fails, return original URL
    return url;
  }
}
