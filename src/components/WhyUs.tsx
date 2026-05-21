"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Local.",
    body: "We're based in Jacksonville, not a regional call center. When you call, you're talking to someone who knows Randolph County.",
  },
  {
    number: "02",
    title: "We answer.",
    body: "Call us directly. If the phone rings, we pick up. Most rentals can be set up same day.",
  },
  {
    number: "03",
    title: "Delivery available.",
    body: "No trailer? We'll bring the machine to your site within our service area — call to confirm your address.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="bg-[#0F0E0D] py-24 md:py-32 border-t border-[#1A1917]"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left — sticky heading */}
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
              Why Gruenloh
            </p>
            <h2
              id="why-heading"
              className="font-display font-bold uppercase tracking-tight text-white leading-[0.9] mb-6"
              style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
            >
              Three reasons
              <br />
              we get called
              <br />
              back.
            </h2>
            <p className="font-sans text-[#6A6460] text-base md:text-lg leading-relaxed max-w-[260px]">
              Small operation. Good equipment. Straight answers.
            </p>
          </div>

          {/* Right — reasons */}
          <div className="divide-y divide-[#2C2A27]">
            {reasons.map((r, i) => (
              <motion.div
                key={r.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-8"
              >
                <div className="flex gap-7 items-start">
                  <span className="font-display font-bold text-sm text-[#E05C1A] tracking-widest mt-0.5 shrink-0 w-7">
                    {r.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-[#E8E4DC] mb-2">
                      {r.title}
                    </h3>
                    <p className="font-sans text-[#6A6460] text-base leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
