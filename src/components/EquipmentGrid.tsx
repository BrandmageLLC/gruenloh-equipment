"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const equipment = [
  {
    name: "Skid Steer",
    slug: "skid-steer-rental",
    specs: "~7,000 lb operating weight. Grading, clearing, loading, tight-space farm and site work.",
    photo: "/images/skid-steer.jpg",
    alt: "Skid steer loader available for rental in Jacksonville, Missouri",
    tag: "Most Requested",
  },
  {
    name: "Mini Excavator",
    slug: "mini-excavator-rental",
    specs: "3–6 ton class. Pond work, utility trenching, stump removal. Fits through a standard gate.",
    photo: "/images/mini-excavator.jpg",
    alt: "Mini excavator rental in Pike County, Missouri",
    tag: null,
  },
  {
    name: "Compact Track Loader",
    slug: "compact-track-loader-rental",
    specs: "Better traction in wet conditions. Preferred for muddy Missouri spring and fall work.",
    photo: "/images/compact-track-loader.jpg",
    alt: "Compact track loader rental Jacksonville MO",
    tag: null,
  },
  {
    name: "20ft Tilt Trailer",
    slug: "trailer-rental",
    specs: "Hauls skid steers, mini excavators, and heavy loads. Bumper pull, tilt deck.",
    photo: "/images/trailer.jpg",
    alt: "Equipment trailer rental in Pike County, Missouri",
    tag: null,
  },
  {
    name: "Brush Hog",
    slug: "brush-hog-rental",
    specs: "Tractor-mounted rough and finish mower. High demand for farm fields and overgrown lots.",
    photo: "/images/brush-hog.jpg",
    alt: "Brush hog and tractor rental in rural Missouri",
    tag: null,
  },
  {
    name: "Generator",
    slug: "generator-rental",
    specs: "6,000–12,000W. Job sites without power, storm backup, remote locations.",
    photo: "/images/generator.jpg",
    alt: "Construction generator rental Jacksonville Missouri",
    tag: null,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
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
            All machines are maintained and ready to go. Call to confirm
            availability — weekends book fast.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DAD2]"
        >
          {equipment.map((item) => (
            <motion.div
              key={item.slug}
              variants={card}
              whileHover={{ scale: 1.012, transition: { duration: 0.2 } }}
              className="group bg-[#1A1917] relative overflow-hidden"
            >
              {/* Equipment photo */}
              <div className="aspect-[4/3] bg-[#141210] relative overflow-hidden">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay — lifts on hover */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-10 h-[2px] bg-[#E05C1A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="absolute top-0 left-0 w-[2px] h-10 bg-[#E05C1A] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                {/* Tag */}
                {item.tag && (
                  <span className="absolute top-4 right-4 font-display text-[10px] font-bold uppercase tracking-widest bg-[#F0A500] text-[#0F0E0D] px-2.5 py-1">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 border-t border-[#2C2A27] group-hover:border-[#E05C1A] transition-colors duration-300">
                <h3 className="font-display font-bold text-xl uppercase tracking-wide text-[#E8E4DC] mb-2">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-[#7A7470] leading-relaxed mb-5">
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

        {/* Footer row */}
        <div className="mt-10 pt-8 border-t border-[#D8D2CA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="font-sans text-[#6A6460] text-sm md:text-base leading-relaxed max-w-md">
            Need something not listed? Call — we may have it or know who does.
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
