import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyPhoneBar from "@/components/StickyPhoneBar";

export const metadata: Metadata = {
  title: "John Deere Mini Excavator Rental | Randolph & Macon County, MO",
  description:
    "Rent a John Deere 50G mini excavator in Randolph and Macon County, Missouri. Pond work, trenching, stump removal, footings. Delivery available. Call Gruenloh Equipment (660) 676-8499.",
  alternates: {
    canonical: "https://gruenlohequipment.com/equipment/mini-excavator-rental",
  },
};

const jobTypes = [
  { job: "Pond & waterway work", detail: "Digging, shaping, and cleaning out ponds and drainage channels." },
  { job: "Utility trenching", detail: "Water lines, electric runs, septic connections. Clean trench walls, precise depth." },
  { job: "Stump removal", detail: "Pulls root balls that a chainsaw can't touch. Works alongside the skid steer for cleanup." },
  { job: "Foundation & footing prep", detail: "Tight access next to existing structures. Fits where full-size equipment can't." },
  { job: "Fence post holes", detail: "Faster than manual boring for fence lines across large properties." },
  { job: "Demolition & grading", detail: "Breaking out concrete, small structures, and rough site grading." },
];

const specs = [
  { label: "Machine", value: "John Deere 50G" },
  { label: "Class", value: "5-ton compact excavator" },
  { label: "Dig depth", value: "~11 ft" },
  { label: "Operating weight", value: "~11,200 lbs" },
  { label: "Gate clearance", value: "Fits through a standard farm gate" },
  { label: "Transport", value: "Delivery available — call to confirm radius" },
];

export default function MiniExcavatorPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0F0E0D]">

        {/* Hero */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/john-deere-mini-excavator-rental-macon-county-mo.jpg"
              alt="John Deere 50G mini excavator available for rent in Randolph and Macon County, Missouri"
              fill
              priority
              quality={100}
              className="object-cover object-center"
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
              John Deere
              <br />
              Mini Excavator
            </h1>
          </div>
        </section>

        {/* Overview + specs */}
        <section className="bg-[#F5F0EB] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left — intro */}
              <div>
                <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
                  The Machine
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-[#1A1917] leading-none mb-6">
                  John Deere 50G.
                  <br />
                  Compact. Capable.
                </h2>
                <p className="font-sans text-[#5A5550] text-base md:text-lg leading-relaxed mb-6">
                  The 50G is a 5-ton machine that digs deep and fits through tight spots. It goes where full-size excavators can't — through farm gates, next to buildings, in landscaped yards. One of the most versatile rentals we offer.
                </p>
                <p className="font-sans text-[#5A5550] text-base leading-relaxed mb-8">
                  Delivery available within our service area. Call to confirm availability and your address before you need it — this machine books up.
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
                <div className="px-6 py-5">
                  <p className="font-sans text-xs text-[#5A5550] leading-relaxed">
                    Specs are approximate. Call to confirm current availability and exact machine configuration.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Job photos — action shots */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/mini-excavator-foundation-trench-work-missouri.jpg"
              alt="John Deere mini excavator digging a foundation trench in Missouri"
              fill
              quality={100}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/mini-excavator-stump-removal-randolph-county.jpg"
              alt="John Deere mini excavator doing stump removal in Randolph County Missouri"
              fill
              quality={100}
              className="object-cover object-[center_30%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* What it's used for */}
        <section className="bg-[#0F0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
                What People Rent It For
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-white leading-none">
                Common Jobs.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1917]">
              {jobTypes.map((item) => (
                <div key={item.job} className="bg-[#0F0E0D] p-7 border border-[#1A1917]">
                  <h3 className="font-display font-bold text-base uppercase tracking-wide text-[#E8E4DC] mb-2">
                    {item.job}
                  </h3>
                  <p className="font-sans text-sm text-[#5A5550] leading-relaxed">
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
                  Ready to rent<br />the mini ex?
                </h2>
                <p className="font-sans text-[#6A6460] text-base leading-relaxed max-w-sm">
                  Call to check availability and set up delivery. Available weekdays and weekends.
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
                  Also see: Skid Steer
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyPhoneBar />
    </>
  );
}
