"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="bg-[#1A1917] py-24 md:py-32 border-t border-[#2C2A27]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — call CTA */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
              Get a Machine on Your Jobsite
            </p>
            <h2
              id="contact-heading"
              className="font-display font-bold uppercase tracking-tight text-white leading-[0.88] mb-6"
              style={{ fontSize: "clamp(44px, 7vw, 80px)" }}
            >
              Call Us.
            </h2>
            <p className="font-sans text-[#6A6460] text-base md:text-lg leading-relaxed mb-8 max-w-[300px]">
              We&apos;ll tell you what&apos;s available and what it costs. No
              forms, no waiting — unless you&apos;d rather leave a message.
            </p>
            <a
              href="tel:6606768499"
              className="font-display font-bold uppercase tracking-wider text-[#F0A500] hover:text-[#E05C1A] transition-colors duration-200 block"
              style={{ fontSize: "clamp(22px, 4vw, 36px)" }}
            >
              (660) 676-8499
            </a>
            <div className="mt-4 flex items-center gap-2 text-[#6A6460]">
              <div
                className="w-1.5 h-1.5 rounded-full bg-[#5C9E5C] shrink-0"
                aria-hidden="true"
              />
              <span className="font-sans text-sm">Available 7 days a week</span>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display font-bold text-xs uppercase tracking-widest text-[#6A6460] mb-6">
              Or leave a message — we&apos;ll call you back.
            </p>

            {sent ? (
              <div className="border border-[#E05C1A] p-8">
                <p className="font-display font-bold text-xl uppercase tracking-wide text-white mb-2">
                  Got it.
                </p>
                <p className="font-sans text-[#6A6460] text-base leading-relaxed">
                  We&apos;ll call you back shortly. If it&apos;s urgent, call us
                  directly at{" "}
                  <a href="tel:6606768499" className="text-[#F0A500] hover:underline">
                    (660) 676-8499
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-4"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-[#6A6460] block mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full bg-[#0F0E0D] border border-[#2C2A27] focus:border-[#E05C1A] text-[#E8E4DC] px-4 py-3 font-sans text-sm placeholder:text-[#3A3632] outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-[#6A6460] block mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="(660) 555-0100"
                      className="w-full bg-[#0F0E0D] border border-[#2C2A27] focus:border-[#E05C1A] text-[#E8E4DC] px-4 py-3 font-sans text-sm placeholder:text-[#3A3632] outline-none transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-equipment"
                    className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-[#6A6460] block mb-2"
                  >
                    Equipment Needed
                  </label>
                  <input
                    id="contact-equipment"
                    type="text"
                    placeholder="Skid steer, mini ex, trailer..."
                    className="w-full bg-[#0F0E0D] border border-[#2C2A27] focus:border-[#E05C1A] text-[#E8E4DC] px-4 py-3 font-sans text-sm placeholder:text-[#3A3632] outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-date"
                    className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-[#6A6460] block mb-2"
                  >
                    When Do You Need It?
                  </label>
                  <input
                    id="contact-date"
                    type="text"
                    placeholder="This weekend, June 10–12, ASAP..."
                    className="w-full bg-[#0F0E0D] border border-[#2C2A27] focus:border-[#E05C1A] text-[#E8E4DC] px-4 py-3 font-sans text-sm placeholder:text-[#3A3632] outline-none transition-colors duration-200"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="font-display font-bold text-sm uppercase tracking-widest bg-[#F0A500] hover:bg-[#D4920A] active:bg-[#B87D00] text-[#0F0E0D] px-8 py-4 transition-colors duration-200"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
