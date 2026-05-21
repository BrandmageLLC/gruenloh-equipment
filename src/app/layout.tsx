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
  title: "Equipment Rental Randolph & Macon County, MO | Gruenloh Equipment LLC",
  description:
    "Rent skid steers, mini excavators, trailers, and more in Randolph and Macon County, MO. Gruenloh Equipment serves Moberly, Macon, and surrounding areas. Delivery available. Call (660) 676-8499.",
  keywords:
    "equipment rental Moberly MO, skid steer rental Randolph County Missouri, mini excavator rental Macon County MO, equipment rental Jacksonville MO, construction equipment rental north central Missouri, trailer rental Macon MO",
  openGraph: {
    title: "Equipment Rental Randolph & Macon County, MO | Gruenloh Equipment LLC",
    description:
      "Local equipment rental in Randolph and Macon County, Missouri. Skid steers, mini excavators, trailers. Call (660) 676-8499.",
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
    "Randolph County",
    "Macon County",
    "Moberly",
    "Macon",
    "Huntsville",
    "Higbee",
    "Cairo",
    "Renick",
    "Bevier",
    "Callao",
    "Excello",
    "Atlanta",
    "Brashear",
    "La Plata",
    "Salisbury",
    "Mexico",
    "Clarence",
    "Shelbina",
    "Brookfield",
    "Marceline",
  ],
  openingHours: "Mo-Su 07:00-19:00",
  priceRange: "$$",
  description:
    "Gruenloh Equipment LLC offers construction and agricultural equipment rental in Jacksonville, MO and the surrounding Randolph and Macon County area. We rent skid steers, mini excavators, trailers, and more. Delivery available.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.52,
    longitude: -92.38,
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
