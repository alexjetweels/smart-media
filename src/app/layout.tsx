import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proagency.com"),
  title:
    "Pro Agency - Rent Verified Facebook Business Accounts – Free VPS & 3-Day Trial",
  description:
    "Boost your campaigns with verified Facebook Business Accounts & BM. Enjoy free VPS/proxy, Smart Pixel, and 3% off in the first month. Try risk-free!",
  keywords: [
    "proagency",
    "proagency ads",
    "proagency facebook",
    "facebook business accounts",
    "rent facebook ad account",
    "agency ad accounts",
  ],
  authors: [{ name: "ProAgency" }],
  alternates: {
    canonical: "https://proagency.com/",
  },
  openGraph: {
    title:
      "Pro Agency - Rent Verified Facebook Business Accounts – Free VPS & 3-Day Trial",
    description:
      "Boost your campaigns with verified Facebook Business Accounts & BM. Enjoy free VPS/proxy, Smart Pixel, and 3% off in the first month. Try risk-free!",
    url: "https://proagency.com/",
    siteName: "Pro Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pro Agency brand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pro Agency - Rent Verified Facebook Business Accounts – Free VPS & 3-Day Trial",
    description:
      "Boost your campaigns with verified Facebook Business Accounts & BM. Enjoy free VPS/proxy, Smart Pixel, and 3% off in the first month. Try risk-free!",
    images: ["/images/logo.png"],
    site: "@proagency",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "h3oe1iC7N3Ix3YlOCqIdHmKb534BLeVgOaNJANeC6yQ",
    other: {
      "trustpilot-one-time-domain-verification-id":
        "135b0109-33f0-4f5c-a942-6f17efb7b95e",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Source+Sans+Pro:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/map.css" />
        <link rel="stylesheet" href="/assets/css/popup-banner.css" />
        <link rel="stylesheet" href="/assets/css/rating-section.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
