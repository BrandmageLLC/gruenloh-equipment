"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end bg-[#0F0E0D] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background photo — shows through clearly at top, fades to dark at bottom */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Gradient rises from the bottom — photo is visible in the upper half */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0F0E0D 0%, #0F0E0D 20%, rgba(15,14,13,0.85) 45%, rgba(15,14,13,0.3) 70%, rgba(15,14,13,0.1) 100%)",
          }}
        />
      </div>

      {/* Content — sits at the bottom of the viewport */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-14 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">

          {/* Top rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="w-full h-[1px] bg-white/20 mb-8"
          />

          {/* H1 — full-width horizontal, not a tall stack */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(44px, 8.5vw, 108px)" }}
          >
            Equipment Rental
          </motion.h1>

          {/* Location line — tight under the H1, different weight */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="font-display font-bold uppercase tracking-[0.12em] text-[#E05C1A] mt-2 mb-8"
            style={{ fontSize: "clamp(14px, 2.2vw, 28px)" }}
          >
            Randolph &amp; Macon County, Missouri
          </motion.p>

          {/* Dividing rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="w-full h-[1px] bg-white/15 mb-8"
          />

          {/* Lower band — description left, CTA right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            {/* Left — description */}
            <p className="font-sans text-base md:text-lg text-[#8C8680] max-w-sm leading-relaxed">
              Skid steer. Mini excavator.
              <br className="hidden md:block" />
              Delivery available. Most jobs set up same day.
            </p>

            {/* Right — CTA block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <a
                href="tel:6606768499"
                className="font-display font-bold text-base md:text-lg uppercase tracking-wider bg-[#F0A500] hover:bg-[#D4920A] active:bg-[#B87D00] text-[#0F0E0D] px-8 py-4 transition-colors duration-200 whitespace-nowrap"
              >
                Call (660) 676-8499
              </a>
              <a
                href="#equipment"
                className="font-display font-bold text-sm uppercase tracking-wider text-[#E8E4DC] hover:text-[#F0A500] inline-flex items-center gap-2 transition-colors duration-200 group whitespace-nowrap"
              >
                See equipment
                <span
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
