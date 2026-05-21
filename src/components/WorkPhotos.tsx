"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "/images/IMG_4923.jpg",
    alt: "Mini excavator digging a foundation trench alongside a building in Randolph County, Missouri",
    caption: "Foundation work",
  },
  {
    src: "/images/IMG_4928.jpg",
    alt: "Deep trench excavation next to a metal building — mini excavator rental job site",
    caption: "Utility trenching",
  },
  {
    src: "/images/IMG_4937.jpg",
    alt: "Mini excavator digging along a concrete foundation wall in Macon County, Missouri",
    caption: "Site prep",
  },
];

export default function WorkPhotos() {
  return (
    <section className="bg-[#0F0E0D] pb-0 border-t border-[#1A1917]" aria-label="Recent job site photos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-2">
          On the Job
        </p>
        <p className="font-sans text-[#5A5550] text-sm">Real work, local sites.</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3"
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden group"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 33vw, 33vw"
            />
            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
                {photo.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
