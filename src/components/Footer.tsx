export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0E0D] border-t border-[#1A1917] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 leading-none">
              <span className="font-display font-bold text-xl uppercase tracking-widest text-white block">
                Gruenloh
              </span>
              <span className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-[#E05C1A] block mt-0.5">
                Equipment LLC
              </span>
            </div>
            <p className="font-sans text-sm text-[#6A6460] leading-relaxed max-w-[200px]">
              Equipment rental in Jacksonville, Missouri and surrounding Pike County.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-[#E05C1A] mb-4">
              Contact
            </p>
            <address className="not-italic flex flex-col gap-2.5">
              <a
                href="tel:6606768499"
                className="font-sans text-sm text-[#E8E4DC] hover:text-[#F0A500] transition-colors duration-200"
              >
                (660) 676-8499
              </a>
              <a
                href="mailto:ddgruenloh@yahoo.com"
                className="font-sans text-sm text-[#6A6460] hover:text-[#E8E4DC] transition-colors duration-200"
              >
                ddgruenloh@yahoo.com
              </a>
              <span className="font-sans text-sm text-[#6A6460]">
                Jacksonville, MO · Pike County
              </span>
            </address>
          </div>

          {/* Nav */}
          <div>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-[#E05C1A] mb-4">
              Quick Links
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5">
                {[
                  { href: "#equipment", label: "Equipment" },
                  { href: "#service-area", label: "Service Area" },
                  { href: "#faq", label: "FAQ" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-[#6A6460] hover:text-[#E8E4DC] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1917] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#3A3632]">
            © {year} Gruenloh Equipment LLC · Jacksonville, Missouri
          </p>
          <p className="font-sans text-xs text-[#3A3632]">
            Site by{" "}
            <a
              href="https://thebrandmage.com"
              className="hover:text-[#6A6460] transition-colors duration-200"
              rel="noopener noreferrer"
            >
              Brandmage
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
