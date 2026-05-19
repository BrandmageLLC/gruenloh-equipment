"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#equipment", label: "Equipment" },
  { href: "#service-area", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0E0D]/95 backdrop-blur-sm border-b border-[#2C2A27]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-white">
              Gruenloh
            </span>
            <span className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-[#E05C1A]">
              Equipment LLC
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8C8680] hover:text-[#E8E4DC] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA — always visible */}
          <a
            href="tel:6606768499"
            aria-label="Call Gruenloh Equipment at 660-676-8499"
            className="font-display font-bold text-xs md:text-sm uppercase tracking-wider bg-[#E05C1A] hover:bg-[#C44E14] active:bg-[#A83E10] text-white px-4 md:px-6 py-2.5 md:py-3 transition-colors duration-200"
          >
            <span className="hidden md:inline">(660) 676-8499</span>
            <span className="md:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
