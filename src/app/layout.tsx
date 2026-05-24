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
  metadataBase: new URL("https://gruenlohequipment.com"),
  title: "Skid Steer & Mini Excavator Rental | Moberly, MO",
  description:
    "Rent a skid steer with attachments or John Deere mini excavator in Randolph & Macon County, MO. Serving Moberly, Macon, and Huntsville. Available weekends. Call Gruenloh Equipment (660) 676-8499.",
  keywords:
    "mini excavator rental near me, skid steer rental near me, mini excavator rental Moberly MO, skid steer rental Moberly MO, equipment rental Macon MO, John Deere mini excavator rental Missouri, brush cutter skid steer rental Missouri, compact track loader rental near me, skid steer rental Randolph County Missouri, mini excavator rental Macon County MO, equipment rental Jacksonville MO, trenching rental north Missouri, land clearing equipment rental Moberly, grapple bucket rental Missouri",
  openGraph: {
    title: "Skid Steer & Mini Excavator Rental | Moberly, MO | Gruenloh Equipment",
    description:
      "Skid steer with attachments + John Deere mini excavator rental in Randolph & Macon County, MO. Available weekends. Call (660) 676-8499.",
    type: "website",
    locale: "en_US",
    url: "https://gruenlohequipment.com",
    siteName: "Gruenloh Equipment LLC",
    images: [
      {
        url: "/images/hero-equipment-rental-moberly-mo.jpg",
        width: 1200,
        height: 630,
        alt: "Gruenloh Equipment LLC — Skid Steer & Mini Excavator Rental in Randolph County, Missouri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skid Steer & Mini Excavator Rental | Moberly, MO",
    description: "John Deere equipment rental in Randolph & Macon County, MO. Available weekends. Call (660) 676-8499.",
    images: ["/images/hero-equipment-rental-moberly-mo.jpg"],
  },
  alternates: {
    canonical: "https://gruenlohequipment.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gruenloh Equipment LLC",
  url: "https://gruenlohequipment.com",
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
    "Gruenloh Equipment LLC rents a John Deere mini excavator and skid steer with attachments (brush cutter, forks, grapple, tooth bucket, smooth bucket) in Randolph and Macon County, MO. Serving Moberly, Macon, Huntsville, and surrounding areas. Available weekends. Delivery available.",
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
