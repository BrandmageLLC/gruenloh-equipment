import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyPhoneBar from "@/components/StickyPhoneBar";

export const metadata: Metadata = {
  title: "Skid Steer Rental with Attachments | Brush Cutter, Grapple, Forks | Moberly, MO",
  description:
    "Rent a John Deere compact track loader in Randolph & Macon County, MO. Five attachments available: brush cutter, forks, grapple, tooth bucket, smooth bucket. Delivery available. Call (660) 676-8499.",
  alternates: {
    canonical: "https://gruenlohequipment.com/equipment/skid-steer-rental",
  },
};

const attachments = [
  {
    name: "Brush Cutter",
    desc: "Clears heavy brush, overgrowth, saplings, and fence lines. Built for Missouri timber edges and rough fields.",
    photo: "/images/skid-steer-attachments-brush-cutter-grapple-forks.jpg",
  },
  {
    name: "Forks",
    desc: "Pallet work, lumber, hay bales, heavy materials. Turns the CTL into a rough-terrain forklift.",
    photo: null,
  },
  {
    name: "Grapple",
    desc: "Grabs brush, debris, logs, and demolition material. Works the clean-up jobs the bucket can't hold.",
    photo: null,
  },
  {
    name: "Tooth Bucket",
    desc: "Hard digging, root removal, breaking through compacted ground, gravel work.",
    photo: null,
  },
  {
    name: "Smooth Bucket",
    desc: "Finish grading, spreading gravel, backfilling, and site cleanup. Leaves a clean surface.",
    photo: null,
  },
];

const jobTypes = [
  { job: "Gravel driveway work", detail: "Spreading, grading, and pushing gravel on farm lanes and driveways." },
  { job: "Brush & land clearing", detail: "Use the brush cutter to clear overgrown fields, fence lines, and timber edges." },
  { job: "Loading & material handling", detail: "Moving dirt, gravel, mulch, and materials with the bucket or forks." },
  { job: "Demolition cleanup", detail: "Grapple clears brush and debris after storm damage or demo work." },
  { job: "Barn & farm site prep", detail: "Site clearing, grading, and pushing around outbuildings and tight spaces." },
  { job: "Finish grading", detail: "Smooth bucket for final grading on yards, driveways, and building pads." },
];

const specs = [
  { label: "Machine", value: "John Deere Compact Track Loader" },
  { label: "Drive", value: "Rubber tracks — better traction in mud" },
  { label: "Attachments", value: "5 available (see below)" },
  { label: "Common uses", value: "Grading, clearing, loading, pushing" },
  { label: "Transport", value: "Delivery available — call to confirm" },
  { label: "Availability", value: "Weekdays and weekends" },
];

export default function SkidSteerPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0F0E0D]">

        {/* Hero */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skid-steer-rental-randolph-county-mo.jpg"
              alt="John Deere compact track loader available for rental in Randolph County, Missouri"
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
                5 Attachments Available · Randolph &amp; Macon County, MO
              </span>
            </div>
            <h1
              className="font-display font-bold uppercase leading-[0.88] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
            >
              John Deere
              <br />
              Skid Steer
            </h1>
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
                  One Machine.
                  <br />
                  Five Attachments.
                </h2>
                <p className="font-sans text-[#5A5550] text-base md:text-lg leading-relaxed mb-6">
                  This is a John Deere compact track loader — rubber tracks for better traction on wet Missouri ground. It comes with five attachments you can swap out depending on the job: brush cutter, forks, grapple, tooth bucket, and smooth bucket.
                </p>
                <p className="font-sans text-[#5A5550] text-base leading-relaxed mb-8">
                  Tell us what you need it for when you call and we'll make sure you have the right attachment. Delivery available within our service area.
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

        {/* Attachments */}
        <section className="bg-[#0F0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className="w-14 h-[3px] bg-[#E05C1A] mb-4" />
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
                What&apos;s in the Yard
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-white leading-none mb-4">
                Five Attachments.
              </h2>
              <p className="font-sans text-[#6A6460] text-base max-w-md leading-relaxed">
                All five come with the skid steer rental. Tell us what job you&apos;re doing and we&apos;ll load the right one.
              </p>
            </div>

            {/* Attachments photo */}
            <div className="aspect-[16/6] relative overflow-hidden mb-8">
              <Image
                src="/images/skid-steer-attachments-brush-cutter-grapple-forks.jpg"
                alt="All five skid steer attachments laid out — brush cutter, forks, grapple, tooth bucket, smooth bucket"
                fill
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Attachment cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#1A1917]">
              {attachments.map((att) => (
                <div key={att.name} className="bg-[#0F0E0D] p-6 border border-[#1A1917]">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#E8E4DC] mb-3">
                    {att.name}
                  </h3>
                  <p className="font-sans text-sm text-[#5A5550] leading-relaxed">
                    {att.desc}
                  </p>
                </div>
              ))}
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
                  Ready to rent<br />the skid steer?
                </h2>
                <p className="font-sans text-[#6A6460] text-base leading-relaxed max-w-sm">
                  Tell us what attachment you need. Available weekdays and weekends.
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
      <StickyPhoneBar />
    </>
  );
}
