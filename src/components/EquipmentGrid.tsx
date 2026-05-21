"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const machines = [
  {
    name: "Mini Excavator",
    slug: "mini-excavator-rental",
    specs:
      "John Deere. Pond work, utility trenching, stump removal, footings. Fits through a standard gate — goes where full-size can't.",
    photo: "/images/IMG_3457.jpg",
    alt: "John Deere mini excavator available for rental in Randolph County, Missouri",
    tag: null,
  },
  {
    name: "Skid Steer",
    slug: "skid-steer-rental",
    specs:
      "Grading, clearing, loading, pushing, and tight-space site work. Five attachments available — see below for what's in the yard.",
    photo: "/images/IMG_0545.jpg",
    alt: "Skid steer loader with attachments available for rental in Randolph and Macon County, Missouri",
    tag: "5 Attachments Available",
  },
];

const attachments = [
  {
    name: "Brush Cutter",
    desc: "Heavy overgrowth, brush clearing, fence lines, and rough land.",
  },
  {
    name: "Forks",
    desc: "Pallet work, material handling, moving lumber or heavy supplies.",
  },
  {
    name: "Grapple",
    desc: "Brush, debris, logs, and demo cleanup. Reaches where buckets can't hold.",
  },
  {
    name: "Tooth Bucket",
    desc: "Digging, breaking hard ground, gravel work, and root removal.",
  },
  {
    name: "Smooth Bucket",
    desc: "Finish grading, spreading dirt or gravel, site cleanup.",
  },
];

const machineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const machineCard = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const attachmentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const attachmentCard = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function EquipmentGrid() {
  return (
    <section
      id="equipment"
      className="bg-[#F5F0EB] py-24 md:py-32"
      aria-labelledby="equipment-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="w-14 h-[3px] bg-[#E05C1A] mb-4"
          />
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
            What We Rent
          </p>
          <h2
            id="equipment-heading"
            className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-[#1A1917] leading-none"
          >
            The Fleet
          </h2>
          <p className="font-sans text-[#6A6460] mt-4 max-w-md text-base md:text-lg leading-relaxed">
            Two machines, maintained and ready. Call to confirm availability — weekends book fast.
          </p>
        </div>

        {/* Machine cards — 2-up, larger */}
        <motion.div
          variants={machineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8D2CA] mb-px"
        >
          {machines.map((item) => (
            <motion.div
              key={item.slug}
              variants={machineCard}
              whileHover={{ scale: 1.008, transition: { duration: 0.2 } }}
              className="group bg-[#1A1917] relative overflow-hidden"
            >
              {/* Photo */}
              <div className="aspect-[16/9] bg-[#141210] relative overflow-hidden">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-0 left-0 w-10 h-[2px] bg-[#E05C1A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="absolute top-0 left-0 w-[2px] h-10 bg-[#E05C1A] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                {item.tag && (
                  <span className="absolute top-4 right-4 font-display text-[10px] font-bold uppercase tracking-widest bg-[#E05C1A] text-white px-3 py-1.5">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-7 border-t border-[#2C2A27] group-hover:border-[#E05C1A] transition-colors duration-300">
                <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-[#E8E4DC] mb-3">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-[#7A7470] leading-relaxed mb-6">
                  {item.specs}
                </p>
                <a
                  href="tel:6606768499"
                  className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-[#F0A500] hover:text-[#E05C1A] inline-flex items-center gap-2 transition-colors duration-200 group/link"
                  aria-label={`Call to rent ${item.name}`}
                >
                  Call to Rent
                  <span
                    className="inline-block transition-transform duration-200 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Attachments section */}
        <div className="bg-[#1A1917] border-t-0">
          {/* Attachments photo + label */}
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] border-b border-[#2C2A27]">
            <div className="relative h-40 md:h-full overflow-hidden">
              <Image
                src="/images/IMG_0544.jpg"
                alt="All five skid steer attachments laid out — brush cutter, forks, grapple, tooth bucket, smooth bucket"
                fill
                className="object-cover object-center"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="px-7 py-5 flex flex-col justify-center">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-[#E05C1A] mb-1">
                Skid Steer Attachments
              </p>
              <p className="font-sans text-sm text-[#5A5550]">
                Five attachments in the yard — one machine, a lot of jobs.
              </p>
            </div>
          </div>
          <motion.div
            variants={attachmentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#2C2A27]"
          >
            {attachments.map((att) => (
              <motion.div
                key={att.name}
                variants={attachmentCard}
                className="p-6 group hover:bg-[#222018] transition-colors duration-200"
              >
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#E8E4DC] mb-2 group-hover:text-[#F0A500] transition-colors duration-200">
                  {att.name}
                </h4>
                <p className="font-sans text-xs text-[#5A5550] leading-relaxed">
                  {att.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-[#D8D2CA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="font-sans text-[#6A6460] text-sm md:text-base leading-relaxed max-w-md">
            Need to know what&apos;s available this week? Just call.
          </p>
          <a
            href="tel:6606768499"
            className="font-display font-bold text-sm uppercase tracking-wider bg-[#1A1917] hover:bg-[#2C2A27] text-[#E8E4DC] border border-[#3A3632] px-7 py-3.5 transition-colors duration-200 whitespace-nowrap"
          >
            (660) 676-8499
          </a>
        </div>

      </div>
    </section>
  );
}
