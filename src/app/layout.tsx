import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { env } from "@/lib/env";
import { Anton, Newsreader, Plus_Jakarta_Sans, Space_Mono, Yesteryear, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


/* Self-hosted, optimized design-system fonts. Exposing CSS variables so the
   @utility rules in globals.css can reference them reliably. */
const anton = Anton({ variable: "--font-display-hero", weight: "400", display: "swap" });
const newsreader = Newsreader({
  variable: "--font-headline-editorial-lg",
  weight: ["400", "700"],
  display: "swap",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headline-ui-lg",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const spaceMono = Space_Mono({ variable: "--font-label-mono-bold", weight: ["400", "700"], display: "swap" });
const yesteryear = Yesteryear({ variable: "--font-yesteryear", weight: ["400"], display: "swap" });

const siteName = "Agile Begins";
const description =
  "Practical live workshops for ambitious students — build real projects, sharpen in-demand skills, and get career-ready.";

export const metadata: Metadata = {
  // Absolute base so OG/canonical URLs resolve on the production domain.
  metadataBase: new URL(env.appUrl()),
  title: {
    default: `${siteName} — Practical workshops for students`,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  icons: {
    // Main app mark as the browser-tab favicon.
    icon: "/logos/main-icon.png",
    // Same mark for Apple touch / home-screen surfaces.
    apple: "/logos/main-icon.png",
    shortcut: "/logos/main-icon.png",
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} — Practical workshops for students`,
    description,
    url: env.appUrl(),
    images: ["/logos/main-icon.png"],
  },
  twitter: {
    card: "summary",
    title: `${siteName} — Practical workshops for students`,
    description,
    images: ["/logos/main-icon.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${anton.variable} ${newsreader.variable} ${plusJakartaSans.variable} ${spaceMono.variable} ${yesteryear.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
