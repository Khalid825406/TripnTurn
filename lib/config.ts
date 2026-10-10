/**
 * Central configuration for TripnTurn Holidays.
 *
 * IMPORTANT (per project brief):
 * - Phone, WhatsApp and email are intentionally LEFT BLANK.
 *   Fill them in before going live. The UI gracefully hides or
 *   disables contact CTAs until a value is provided.
 * - Package prices labelled "indicative" come from supplied promo
 *   posters and must be re-verified before publishing as offers.
 */
export const siteConfig = {
  name: "TripnTurn Holidays",
  tagline: "Turn Every Trip Into a Beautiful Memory",
  description:
    "TripnTurn Holidays crafts seamless domestic and international holidays — from Rajasthan heritage trails to Vietnam island escapes. Holiday packages, hotels, flights, transfers, honeymoon, family and group tours.",
  url: "https://www.tripnturnholidays.com", // TODO: replace with the production domain
  instagramUrl: "https://www.instagram.com/tripnturn_holidays/",
  instagramHandle: "@tripnturn_holidays",

  address:
    "203, Apple Square Building, Near Matrubhumi School, Dabholi Char Rasta, Surat, Gujarat 395004, India",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "203, Apple Square Building, Near Matrubhumi School, Dabholi Char Rasta, Surat, Gujarat 395004"
    ),

  // ── Contact channels (fill before launch; leave "" to hide) ──
  phone: "",
  whatsappNumber: "",
  email: "",
} as const;

export type SiteConfig = typeof siteConfig;

/** Builds a wa.me deep link, or returns null when not configured. */
export function whatsappLink(message: string): string | null {
  const num = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  if (!num) return null;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Holiday Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
