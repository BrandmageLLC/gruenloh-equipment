import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "John Deere 331G Skid Steer Rental | Large Track Loader | Moberly, MO",
  description:
    "Rent a John Deere 331G large-frame compact track loader in Randolph & Macon County, MO for $400/day. Heavy dirt work, land clearing, loading. Brush cutter, forks, and grapple available. Call (660) 676-8499.",
  openGraph: {
    title: "John Deere 331G Skid Steer Rental | Large Track Loader | Moberly, MO",
    description: "John Deere 331G large-frame track loader rental, $400/day, in Randolph & Macon County, MO. Call (660) 676-8499.",
    type: "website",
    url: "https://gruenlohequipment.com/equipment/large-skid-steer-rental",
    images: [{ url: "/images/john-deere-331g-skid-steer-rental-randolph-county-mo.jpg" }],
  },
  alternates: {
    canonical: "https://gruenlohequipment.com/equipment/large-skid-steer-rental",
  },
};

const jobTypes = [
  { job: "Heavy dirt moving", detail: "Pushing and carrying full buckets of dirt all day without bogging down." },
  { job: "Land & brush clearing", detail: "Pair it with the brush cutter for thick overgrowth, saplings, and timber edges." },
  { job: "Pond dams & berms", detail: "Building up and packing dirt where weight and push power matter." },
  { job: "Gravel & rock work", detail: "Moving and spreading big loads of rock on lanes, lots, and driveways." },
  { job: "Building pad prep", detail: "Cutting and leveling ground for shops, barns, and slabs." },
  { job: "Loading & material handling", detail: "Add pallet forks for heavy pallets, posts, and bulk materials." },
];

const specs = [
  { label: "Rate", value: "$400 / day" },
  { label: "Machine", value: "John Deere 331G Compact Track Loader" },
  { label: "Size", value: "Large frame — our biggest skid steer" },
  { label: "Drive", value: "Rubber tracks — better traction in mud" },
  { label: "Attachments", value: "Brush cutter $175 · Forks $50 · Grapple $100 / day" },
  { label: "Transport", value: "Delivery or trailer rental — call to confirm" },
];

export default function LargeSkidSteerPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0F0E0D]">

        {/* Hero */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/john-deere-331g-skid-steer-rental-randolph-county-mo.jpg"
              alt="John Deere 331G large-frame compact track loader available for rental in Randolph County, Missouri"
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
                Large Frame · Randolph &amp; Macon County, MO
              </span>
            </div>
            <h1
              className="font-display font-bold uppercase leading-[0.88] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
            >
              John Deere
              <br />
              331G Skid Steer
            </h1>
            <p className="font-display font-bold uppercase tracking-wide text-[#F0A500] mt-6">
              <span className="text-3xl md:text-4xl">$400</span>{" "}
              <span className="text-sm tracking-wider text-[#B8B2A8]">/ day</span>
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
                  The Machine
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-[#1A1917] leading-none mb-6">
                  When the Job
                  <br />
                  Needs More Machine.
                </h2>
                <p className="font-sans text-[#5A5550] text-base md:text-lg leading-relaxed mb-6">
                  The 331G is the big brother to our 317G. Bigger frame, more weight on the tracks, and more push and lift for jobs that would wear out a smaller loader — heavy dirt, big brush, and full loads of rock.
                </p>
                <p className="font-sans text-[#5A5550] text-base leading-relaxed mb-8">
                  $400 a day with a bucket. Add the brush cutter, pallet forks, or grapple when you call. Need to haul it yourself? Our tilt trailer is $100 a day with any of our machines.
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

        {/* Second photo */}
        <section className="bg-[#0F0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] md:aspect-[16/7] relative overflow-hidden">
              <Image
                src="/images/john-deere-331g-track-loader-rental-moberly-mo.jpg"
                alt="John Deere 331G track loader with tooth bucket, ready to rent near Moberly, Missouri"
                fill
                quality={100}
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
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
                Common Jobs.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D2CA]">
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
                  Ready to rent<br />the 331G?
                </h2>
                <p className="font-sans text-[#6A6460] text-base leading-relaxed max-w-sm">
                  Tell us the job and which attachment you need. Available weekdays and weekends.
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
                  Smaller job? The 317G
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/equipment/trailer-rental"
                  className="font-display font-bold text-sm uppercase tracking-wider text-[#6A6460] hover:text-[#E8E4DC] transition-colors inline-flex items-center gap-2 group"
                >
                  Haul it yourself: Trailer $100/day
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
