"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end bg-[#0F0E0D] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background photo */}
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
        {/* Dark overlay — preserves legibility while letting photo breathe */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,14,13,0.92) 0%, rgba(15,14,13,0.75) 50%, rgba(15,14,13,0.5) 100%)",
          }}
        />
        {/* Bottom fade to body bg */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0F0E0D] to-transparent" />
      </div>

      {/* Left orange vertical accent line */}
      <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#E05C1A] to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 pt-36 md:pb-36 md:pt-44 w-full">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-10 h-[2px] bg-[#E05C1A]" />
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A]">
              Jacksonville, Missouri · Pike County
            </span>
          </motion.div>

          {/* H1 — single unit entrance, not letter-by-letter */}
          <motion.h1
            initial={{ opacity: 0, y: 52 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold uppercase leading-[0.88] tracking-[-0.01em] text-white mb-9"
            style={{ fontSize: "clamp(52px, 9.5vw, 112px)" }}
          >
            Equipment
            <br />
            Rental in
            <br />
            <span className="text-[#E05C1A]">Jacksonville,</span>
            <br />
            Missouri.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl text-[#8C8680] max-w-[420px] leading-relaxed mb-10"
          >
            Skid steers. Mini excavators. Trailers. Serving Pike County and
            beyond. Delivery available — most jobs set up same day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="tel:6606768499"
              className="font-display font-bold text-base md:text-lg uppercase tracking-wider bg-[#F0A500] hover:bg-[#D4920A] active:bg-[#B87D00] text-[#0F0E0D] px-8 py-4 transition-colors duration-200"
            >
              Call (660) 676-8499
            </a>
            <a
              href="#equipment"
              className="font-display font-bold text-sm uppercase tracking-wider text-[#E8E4DC] hover:text-[#F0A500] flex items-center gap-2 transition-colors duration-200 group"
            >
              See what&apos;s available
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {[
              "Delivery Available",
              "Same-Day Scheduling",
              "Locally Owned & Operated",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5C9E5C] shrink-0" />
                <span className="font-sans text-sm text-[#8C8680]">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 md:right-14 hidden md:flex items-center gap-3 text-[#5A5550]">
        <span className="font-display text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-10 h-[1px] bg-[#2C2A27]" />
      </div>
    </section>
  );
}
