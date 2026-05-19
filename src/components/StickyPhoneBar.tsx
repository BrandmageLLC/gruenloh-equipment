"use client";

import { motion } from "framer-motion";

export default function StickyPhoneBar() {
  return (
    <motion.div
      initial={{ y: 88 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label="Quick call button"
    >
      <a
        href="tel:6606768499"
        className="flex items-center justify-center gap-3 bg-[#F0A500] hover:bg-[#D4920A] active:bg-[#B87D00] transition-colors duration-150 py-4 px-4"
        aria-label="Call Gruenloh Equipment at 660-676-8499"
      >
        <svg
          className="w-5 h-5 text-[#0F0E0D] shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="font-display font-bold text-sm uppercase tracking-widest text-[#0F0E0D]">
          Call (660) 676-8499
        </span>
      </a>
    </motion.div>
  );
}
