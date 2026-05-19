import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import StickyPhoneBar from "@/components/StickyPhoneBar";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Equipment Rental Jacksonville, MO | Gruenloh Equipment LLC",
  description:
    "Rent skid steers, mini excavators, trailers, and more in Jacksonville, MO. Gruenloh Equipment serves all of Pike County. Delivery available. Call (660) 676-8499.",
  keywords:
    "equipment rental Jacksonville MO, skid steer rental Pike County, mini excavator rental Missouri, trailer rental Jacksonville Missouri, construction equipment rental Louisiana MO",
  openGraph: {
    title: "Equipment Rental Jacksonville, MO | Gruenloh Equipment LLC",
    description:
      "Local equipment rental in Pike County, Missouri. Skid steers, mini excavators, trailers. Call (660) 676-8499.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://gruenlohequipment.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gruenloh Equipment LLC",
  telephone: "+1-660-676-8499",
  email: "ddgruenloh@yahoo.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jacksonville",
    addressRegion: "MO",
    addressCountry: "US",
  },
  areaServed: [
    "Jacksonville",
    "Pike County",
    "Hannibal",
    "Bowling Green",
    "Louisiana",
    "Perry",
    "Clarksville",
    "Frankford",
    "Curryville",
    "Vandalia",
    "New Hartford",
    "Eolia",
    "Annada",
    "Prairieville",
    "Rockport",
    "Paynesville",
    "Ashburn",
    "Nix",
    "Silex",
    "Elsberry",
    "Winfield",
  ],
  openingHours: "Mo-Su 07:00-19:00",
  priceRange: "$$",
  description:
    "Gruenloh Equipment LLC offers construction and agricultural equipment rental in Jacksonville, MO and the surrounding Pike County area. We rent skid steers, mini excavators, trailers, and more. Delivery available.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.5611,
    longitude: -91.3523,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0F0E0D] text-[#E8E4DC] font-sans antialiased">
        {children}
        <StickyPhoneBar />
      </body>
    </html>
  );
}
