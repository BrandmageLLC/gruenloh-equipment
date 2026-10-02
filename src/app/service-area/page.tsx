import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Service Area | Equipment Rental in Randolph, Macon & Surrounding Counties, MO",
  description:
    "Skid steer, mini excavator, and trailer rental delivered from Jacksonville, MO to Moberly, Macon, Huntsville, Clarence, Salisbury, and towns within about 40 miles. Call (660) 676-8499.",
  openGraph: {
    title: "Service Area | Gruenloh Equipment — Randolph & Macon County, MO",
    description: "Where we deliver skid steers, a mini excavator, and trailers from Jacksonville, MO. Call (660) 676-8499.",
    type: "website",
    url: "https://gruenlohequipment.com/service-area",
    images: [{ url: "/images/equipment-delivery-randolph-county-missouri.jpg" }],
  },
  alternates: {
    canonical: "https://gruenlohequipment.com/service-area",
  },
};

const services = [
  { name: "Skid steer rental (317G)", href: "/equipment/skid-steer-rental", price: "$400 / day" },
  { name: "Large skid steer rental (331G)", href: "/equipment/large-skid-steer-rental", price: "$400 / day" },
  { name: "Mini excavator rental", href: "/equipment/mini-excavator-rental", price: "$400 / day" },
  { name: "Tilt deck trailer rental", href: "/equipment/trailer-rental", price: "From $100 / day" },
];

// Distances are approximate straight-line miles from Jacksonville, rounded to 5.
const areas = [
  {
    id: "randolph-county",
    heading: "Randolph County",
    blurb: "Our home county. Jacksonville is where the machines live, so these are the shortest delivery runs we make.",
    towns: [
      { name: "Jacksonville", miles: "Home base" },
      { name: "Cairo", miles: "~5 mi" },
      { name: "Huntsville", miles: "~10 mi" },
      { name: "Moberly", miles: "~10 mi" },
      { name: "Renick", miles: "~15 mi" },
      { name: "Higbee", miles: "~20 mi" },
    ],
  },
  {
    id: "macon-county",
    heading: "Macon County",
    blurb: "Just north of Jacksonville. Macon, Bevier, and Callao are all a short haul up the road.",
    towns: [
      { name: "Excello", miles: "~5 mi" },
      { name: "Macon", miles: "~10 mi" },
      { name: "Bevier", miles: "~10 mi" },
      { name: "Callao", miles: "~15 mi" },
      { name: "Atlanta", miles: "~20 mi" },
      { name: "La Plata", miles: "~30 mi" },
    ],
  },
  {
    id: "surrounding-counties",
    heading: "Surrounding Counties",
    blurb: "Shelby, Chariton, Linn, Adair, and Audrain. Towns near the edge of our range — call with your address and we'll confirm delivery.",
    towns: [
      { name: "Clarence (Shelby Co.)", miles: "~15 mi" },
      { name: "Salisbury (Chariton Co.)", miles: "~20 mi" },
      { name: "Shelbina (Shelby Co.)", miles: "~25 mi" },
      { name: "Marceline (Linn Co.)", miles: "~25 mi" },
      { name: "Brookfield (Linn Co.)", miles: "~35 mi" },
      { name: "Brashear (Adair Co.)", miles: "~40 mi" },
      { name: "Kirksville (Adair Co.)", miles: "~45 mi — call" },
      { name: "Mexico (Audrain Co.)", miles: "~45 mi — call" },
    ],
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0F0E0D]">

        {/* Hero */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/equipment-delivery-randolph-county-missouri.jpg"
              alt="Equipment delivery across Randolph and Macon County, Missouri"
              fill
              priority
              quality={100}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #0F0E0D 0%, #0F0E0D 15%, rgba(15,14,13,0.7) 50%, rgba(15,14,13,0.25) 100%)" }}
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 pb-16 pt-36">
            <Link
              href="/"
              className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-[#E05C1A] hover:text-[#F0A500] transition-colors inline-flex items-center gap-2 mb-6"
            >
              ← Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#E05C1A]" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A]">
                About 40 Miles From Jacksonville, MO
              </span>
            </div>
            <h1
              className="font-display font-bold uppercase leading-[0.88] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
            >
              Where
              <br />
              We Work
            </h1>
          </div>
        </section>

        {/* What we rent */}
        <section className="bg-[#F5F0EB] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
                  Every Town Below
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-[#1A1917] leading-none mb-6">
                  Same Machines.
                  <br />
                  Same Rates.
                </h2>
                <p className="font-sans text-[#5A5550] text-base md:text-lg leading-relaxed mb-6">
                  Everything we rent goes anywhere in our area. We deliver, or you can haul it yourself on our tilt trailer for $100 a day.
                </p>
                <p className="font-sans text-[#5A5550] text-base leading-relaxed">
                  Skid steer attachments: brush cutter $175, grapple $100, pallet forks $50 a day. Buckets included with rental.
                </p>
              </div>
              <ul className="bg-[#1A1917] divide-y divide-[#2C2A27]">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="flex items-center justify-between px-6 py-5 gap-4 group hover:bg-[#222018] transition-colors"
                    >
                      <span className="font-display text-sm font-bold uppercase tracking-wider text-[#E8E4DC] group-hover:text-[#F0A500] transition-colors">
                        {s.name}
                      </span>
                      <span className="font-display text-sm font-bold uppercase tracking-wider text-[#F0A500] shrink-0">
                        {s.price}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Areas */}
        {areas.map((area, i) => (
          <section
            key={area.id}
            id={area.id}
            className={`py-20 md:py-24 ${i % 2 === 0 ? "bg-[#0F0E0D]" : "bg-[#1A1917]"}`}
            aria-labelledby={`${area.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
                <div>
                  <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
                  <h2
                    id={`${area.id}-heading`}
                    className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-white leading-none mb-5"
                  >
                    Equipment Rental in
                    <br />
                    {area.heading}
                  </h2>
                  <p className="font-sans text-[#8A847C] text-base leading-relaxed mb-8 max-w-md">
                    {area.blurb}
                  </p>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-[#6A6460] mb-3">
                    Available here
                  </p>
                  <ul className="flex flex-col gap-2">
                    {services.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="font-sans text-sm text-[#E8E4DC] hover:text-[#F0A500] transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 bg-[#E05C1A] shrink-0" aria-hidden="true" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#2C2A27] border border-[#2C2A27]"
                  aria-label={`Towns we serve in ${area.heading}`}
                >
                  {area.towns.map((t) => (
                    <li
                      key={t.name}
                      className={`flex items-center justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-[#0F0E0D]" : "bg-[#1A1917]"}`}
                    >
                      <span className="font-display text-base font-bold uppercase tracking-wide text-[#E8E4DC]">
                        {t.name}
                      </span>
                      <span className="font-sans text-xs text-[#8A847C] shrink-0">
                        {t.miles}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-[#F5F0EB] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div>
                <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
                <h2
                  className="font-display font-bold uppercase tracking-tight text-[#1A1917] leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
                >
                  Town not<br />listed?
                </h2>
                <p className="font-sans text-[#5A5550] text-base leading-relaxed max-w-sm">
                  Distances are approximate. Call with your address and we&apos;ll tell you straight whether we can get a machine there.
                </p>
              </div>
              <a
                href="tel:6606768499"
                className="font-display font-bold text-base uppercase tracking-wider bg-[#F0A500] hover:bg-[#D4920A] text-[#0F0E0D] px-8 py-4 transition-colors duration-200 inline-block self-start md:self-auto"
              >
                Call (660) 676-8499
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
