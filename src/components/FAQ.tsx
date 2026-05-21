"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "How far do you deliver?",
    a: "Generally within 40 miles of Jacksonville — that covers all of Randolph and Macon counties and into Moberly, Macon, Mexico, and beyond. Call us with your address and we'll give you a straight answer.",
  },
  {
    q: "Do I need a license to operate a skid steer or mini excavator?",
    a: "No CDL or special license required to rent or operate. That said, these machines deserve real respect. If you've never run one, ask when you call — we can walk you through the basics.",
  },
  {
    q: "Can I rent by the day, weekend, or week?",
    a: "Yes — daily, weekend, and weekly rates are all available. Weekend rate is typically Friday pickup through Monday morning. Call for current pricing.",
  },
  {
    q: "What's your deposit and damage policy?",
    a: "We'll go over that when you call. It varies by machine. We keep it simple — no surprises.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, check, and major cards. Ask when you call.",
  },
  {
    q: "Do I need a reservation or can I call same day?",
    a: "Calling ahead is the right move — especially on weekends when machines book up. Same-day often works if something's available. Call first.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#F5F0EB] py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="w-14 h-[3px] bg-[#E05C1A] mb-4"
            />
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-[#1A1917] leading-none mb-6"
            >
              Common
              <br />
              Questions.
            </h2>
            <p className="font-sans text-[#6A6460] text-base leading-relaxed mb-5">
              Still have a question? Just call.
            </p>
            <a
              href="tel:6606768499"
              className="font-display font-bold text-sm uppercase tracking-wider text-[#E05C1A] hover:text-[#C44E14] transition-colors duration-200 inline-flex items-center gap-2 group"
            >
              (660) 676-8499
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>

          {/* Right — accordion */}
          <div
            className="lg:col-span-2 divide-y divide-[#D8D2CA]"
            role="list"
            aria-label="Frequently asked questions"
          >
            {faqs.map((faq, i) => (
              <div key={i} role="listitem">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                >
                  <span className="font-display font-bold text-base md:text-lg uppercase tracking-wide text-[#1A1917] group-hover:text-[#E05C1A] transition-colors duration-200 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="font-display font-bold text-xl text-[#E05C1A] shrink-0 mt-0.5 leading-none"
                    aria-hidden="true"
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[#5A5550] text-base leading-relaxed pb-6 pr-10">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
