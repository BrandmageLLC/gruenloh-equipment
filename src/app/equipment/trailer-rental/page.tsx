import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Equipment Trailer Rental | Tilt Deck Trailer | Moberly, MO",
  description:
    "Rent a Load Trail triple-axle tilt deck trailer in Randolph & Macon County, MO. $100/day with our equipment, $150/day on its own. Haul skid steers, mini excavators, and more. Call (660) 676-8499.",
  openGraph: {
    title: "Equipment Trailer Rental | Tilt Deck Trailer | Moberly, MO",
    description: "Triple-axle tilt deck trailer rental in Randolph & Macon County, MO. $100/day with our equipment, $150/day on its own. Call (660) 676-8499.",
    type: "website",
    url: "https://gruenlohequipment.com/equipment/trailer-rental",
    images: [{ url: "/images/tilt-deck-equipment-trailer-rental-randolph-county-mo.jpg" }],
  },
  alternates: {
    canonical: "https://gruenlohequipment.com/equipment/trailer-rental",
  },
};

const rates = [
  {
    label: "With our equipment",
    price: "$100",
    detail: "Rent a skid steer or the mini excavator and haul it yourself.",
  },
  {
    label: "Trailer only",
    price: "$150",
    detail: "Move your own tractor, loader, vehicle, or materials.",
  },
];

const jobTypes = [
  { job: "Haul your rental", detail: "Pick up a skid steer or mini ex and run it to your own site on your schedule." },
  { job: "Move your own equipment", detail: "Tractors, compact loaders, side-by-sides, and mowers." },
  { job: "Vehicle transport", detail: "Tilt deck loads cars and trucks without hunting for ramps." },
  { job: "Building materials", detail: "Lumber, posts, pallets, and fencing supplies to the job." },
];

const specs = [
  { label: "Rate", value: "$100 / day with our equipment" },
  { label: "Trailer only", value: "$150 / day" },
  { label: "Trailer", value: "Load Trail tilt deck" },
  { label: "Axles", value: "Triple axle" },
  { label: "Loading", value: "Tilt deck — no ramps to set up" },
  { label: "Towing", value: "Call to confirm your truck and hitch" },
];

export default function TrailerPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0F0E0D]">

        {/* Hero */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/tilt-deck-equipment-trailer-rental-randolph-county-mo.jpg"
              alt="Load Trail triple-axle tilt deck trailer available for rental in Randolph County, Missouri"
              fill
              priority
              quality={100}
              className="object-cover object-[center_60%]"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #0F0E0D 0%, #0F0E0D 15%, rgba(15,14,13,0.7) 50%, rgba(15,14,13,0.2) 100%)" }}
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 pb-16 pt-36">
            <Link
              href="/#equipment"
              className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-[#E05C1A] hover:text-[#F0A500] transition-colors inline-flex items-center gap-2 mb-6"
            >
              ← Back to Equipment
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#E05C1A]" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A]">
                For Rent · Randolph &amp; Macon County, MO
              </span>
            </div>
            <h1
              className="font-display font-bold uppercase leading-[0.88] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
            >
              Tilt Deck
              <br />
              Trailer
            </h1>
            <p className="font-display font-bold uppercase tracking-wide text-[#F0A500] mt-6">
              <span className="text-3xl md:text-4xl">$100</span>{" "}
              <span className="text-sm tracking-wider text-[#B8B2A8]">/ day with our equipment</span>
            </p>
          </div>
        </section>

        {/* Overview + specs */}
        <section className="bg-[#F5F0EB] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div>
                <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
                  The Trailer
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-[#1A1917] leading-none mb-6">
                  Haul It
                  <br />
                  Yourself.
                </h2>
                <p className="font-sans text-[#5A5550] text-base md:text-lg leading-relaxed mb-6">
                  A Load Trail triple-axle tilt deck. The deck tilts down to load, so there are no ramps to wrestle with. Drive the machine on, chain it down, and go.
                </p>
                <p className="font-sans text-[#5A5550] text-base leading-relaxed mb-8">
                  Renting one of our machines? The trailer is $100 a day. Need it on its own for your own equipment? $150 a day.
                </p>
                <a
                  href="tel:6606768499"
                  className="font-display font-bold text-base uppercase tracking-wider bg-[#F0A500] hover:bg-[#D4920A] text-[#0F0E0D] px-8 py-4 transition-colors duration-200 inline-block"
                >
                  Call (660) 676-8499
                </a>
              </div>

              {/* Right — specs */}
              <div className="bg-[#1A1917] divide-y divide-[#2C2A27]">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-start justify-between px-6 py-4 gap-4">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-[#6A6460] shrink-0">
                      {s.label}
                    </span>
                    <span className="font-sans text-sm text-[#E8E4DC] text-right">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Rates + photo */}
        <section className="bg-[#0F0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
                Daily Rates
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-white leading-none">
                Two Ways to Rent It.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-px bg-[#1A1917]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1917]">
                {rates.map((r) => (
                  <div key={r.label} className="bg-[#0F0E0D] p-8 border border-[#1A1917] flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#E8E4DC] mb-3">
                        {r.label}
                      </h3>
                      <p className="font-sans text-sm text-[#5A5550] leading-relaxed mb-8">
                        {r.detail}
                      </p>
                    </div>
                    <p className="font-display font-bold uppercase text-[#F0A500]">
                      <span className="text-5xl">{r.price}</span>{" "}
                      <span className="text-sm tracking-wider text-[#B8B2A8]">/ day</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <Image
                  src="/images/tilt-trailer-rental-macon-county-mo.jpg"
                  alt="Tilt deck trailer tilted down for loading equipment, available for rent in Macon County, Missouri"
                  fill
                  quality={100}
                  className="object-cover object-[center_75%]"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Jobs */}
        <section className="bg-[#F5F0EB] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
                What People Rent It For
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-[#1A1917] leading-none">
                Common Uses.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D8D2CA]">
              {jobTypes.map((item) => (
                <div key={item.job} className="bg-[#F5F0EB] p-7">
                  <h3 className="font-display font-bold text-base uppercase tracking-wide text-[#1A1917] mb-2">
                    {item.job}
                  </h3>
                  <p className="font-sans text-sm text-[#6A6460] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1A1917] py-20 border-t border-[#2C2A27]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div>
                <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
                <h2 className="font-display font-bold uppercase tracking-tight text-white leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
                  Need the<br />trailer?
                </h2>
                <p className="font-sans text-[#6A6460] text-base leading-relaxed max-w-sm">
                  Call to check availability and confirm your truck can pull it.
                </p>
              </div>
              <div className="flex flex-col gap-4 shrink-0">
                <a
                  href="tel:6606768499"
                  className="font-display font-bold text-xl md:text-2xl uppercase tracking-wider text-[#F0A500] hover:text-[#E05C1A] transition-colors"
                >
                  (660) 676-8499
                </a>
                <Link
                  href="/equipment/skid-steer-rental"
                  className="font-display font-bold text-sm uppercase tracking-wider text-[#6A6460] hover:text-[#E8E4DC] transition-colors inline-flex items-center gap-2 group"
                >
                  Also see: Skid Steers
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/equipment/mini-excavator-rental"
                  className="font-display font-bold text-sm uppercase tracking-wider text-[#6A6460] hover:text-[#E8E4DC] transition-colors inline-flex items-center gap-2 group"
                >
                  Also see: Mini Excavator
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
