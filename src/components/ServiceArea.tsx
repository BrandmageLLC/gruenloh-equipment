"use client";

import { motion } from "framer-motion";

const towns = [
  "Jacksonville",
  "Moberly",
  "Macon",
  "Huntsville",
  "Higbee",
  "Cairo",
  "Renick",
  "Bevier",
  "Callao",
  "Excello",
  "Atlanta",
  "Brashear",
  "La Plata",
  "Salisbury",
  "Mexico",
  "Clarence",
  "Shelbina",
  "Brookfield",
  "Marceline",
  "Kirksville",
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="bg-[#F5F0EB] py-24 md:py-32"
      aria-labelledby="service-area-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Google Maps embed — Jacksonville, Randolph County, MO */}
            <div className="aspect-square relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98712.23!2d-92.4335!3d39.4186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c5f9a4d1b8e6b7%3A0x1a2b3c4d5e6f7a8b!2sJacksonville%2C%20MO%2065260!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gruenloh Equipment service area — Jacksonville, Randolph County, Missouri"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="font-sans text-sm text-[#7A7470] mt-4 leading-relaxed">
              Delivery radius: approximately 40 miles from Jacksonville — covering Randolph, Macon, and surrounding counties.{" "}
              <a
                href="tel:6606768499"
                className="text-[#E05C1A] hover:underline"
              >
                Call to confirm your address.
              </a>
            </p>
          </motion.div>

          {/* Right — town list */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="w-14 h-[3px] bg-[#E05C1A] mb-4"
            />
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#E05C1A] mb-3">
              Where We Work
            </p>
            <h2
              id="service-area-heading"
              className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-[#1A1917] leading-none mb-4"
            >
              We Deliver
              <br />
              Across Randolph &amp; Macon County.
            </h2>
            <p className="font-sans text-base md:text-lg text-[#6A6460] leading-relaxed max-w-sm mb-10">
              Based in Jacksonville. We regularly deliver to Moberly, Macon, and the towns below — and everywhere in between.
            </p>

            <ul
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 mb-8"
              aria-label="Towns in service area"
            >
              {towns.map((town) => (
                <li key={town} className="flex items-center gap-2">
                  <div
                    className="w-1 h-1 bg-[#E05C1A] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-sm text-[#5A5550]">
                    {town}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border border-[#D8D2CA] bg-white p-5">
              <p className="font-sans text-sm text-[#5A5550] leading-relaxed">
                <strong className="font-display font-bold uppercase tracking-wide text-[#1A1917] text-xs">
                  Not on the list?
                </strong>{" "}
                Call{" "}
                <a
                  href="tel:6606768499"
                  className="text-[#E05C1A] font-medium hover:underline"
                >
                  (660) 676-8499
                </a>{" "}
                — if it&apos;s within reasonable distance of Jacksonville,
                we&apos;ll work it out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
