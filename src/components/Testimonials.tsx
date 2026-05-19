"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Had a skid steer out to our farm by noon. Denver was easy to work with. Machine ran great. Will call again.",
    name: "Mike T.",
    location: "Frankford, MO",
  },
  {
    quote:
      "Rented the mini excavator for a weekend pond project. Ran perfect the whole time. Honest pricing, no surprises.",
    name: "Brad K.",
    location: "Bowling Green, MO",
  },
  {
    quote:
      "Finally someone local. Don't have to drive all the way to Hannibal anymore. Good equipment, quick setup.",
    name: "Travis W.",
    location: "Perry, MO",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-[#0F0E0D] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="w-14 h-[3px] bg-[#E05C1A] mb-4"
          />
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
            What People Say
          </p>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-white leading-none"
          >
            From Pike County.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border border-[#2C2A27] p-8 relative"
            >
              <div
                className="font-display text-7xl font-bold text-[#E05C1A]/20 leading-none mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote>
                <p className="font-sans text-[#C8C4BC] text-base md:text-lg leading-relaxed mb-6">
                  {t.quote}
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-5 h-[1px] bg-[#E05C1A]" aria-hidden="true" />
                <div>
                  <cite className="font-display font-bold text-sm uppercase tracking-wider text-[#E8E4DC] not-italic">
                    {t.name}
                  </cite>
                  <p className="font-sans text-xs text-[#6A6460] mt-0.5">
                    {t.location}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
