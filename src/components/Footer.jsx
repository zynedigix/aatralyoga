import logo from "../assets/aatral-yoga-logo.webp";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-navy surface-dark text-white">
      <div className="container-editorial pt-20 lg:pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-14 lg:gap-20">
          {/* Logo Section */}
          <div className="md:col-span-5">
            <img
              src={logo}
              alt="Aatral Yoga"
              className="h-12 lg:h-14 w-auto brightness-0 invert opacity-90"
            />

            <p className="type-body-sm text-white/75 mt-8 max-w-sm leading-[1.85]">
              AatralYoga – Empowering Life Through Yoga, Wellness & Mindfulness
            </p>

            <blockquote className="type-body-sm text-white/75 leading-[1.85] font-light italic mt-6">
              "Transforming lives through authentic yoga practices, mindful
              movement, and holistic wellness."
            </blockquote>

            <p className="type-eyebrow text-gold/60 mt-8">
              Awaken · Align · Achieve
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="type-eyebrow text-white/55 mb-8">Navigate</h3>

            <nav className="space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block type-body-sm text-white/78 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="type-eyebrow text-white/55 mb-8">Connect</h3>

            <div className="space-y-4 type-body-sm text-white/78">
              <address className="not-italic leading-relaxed">
                No 3, Ground Floor,
                <br />
                Olympia Mithila, Thirumazhisai,
                <br />
                Tiruvallur, Tamil Nadu 600124
              </address>

              <a
                href="mailto:contact@aatralyoga.com"
                className="block hover:text-gold transition-colors"
              >
                contact@aatralyoga.com
              </a>

              <a
                href="tel:+919876543210"
                className="block hover:text-gold transition-colors"
              >
                +91 98765 43210 / 9790531500
              </a>

              {/* Website */}

              <a
                href="https://www.aatralyoga.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                www.aatralyoga.com
              </a>

              {/* Social Icons */}

              <div className="flex gap-4 pt-5">
                {/* Youtube */}

                <a
                  href="https://www.youtube.com/@Aatral_Yoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" />
                  </svg>
                </a>

                {/* Instagram */}

                <a
                  href="https://www.instagram.com/aatral_yoga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />

                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/8 mt-16 lg:mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 type-small text-white/55">
          <p>
            &copy; {new Date().getFullYear()} Aatral Yoga. All rights reserved.
          </p>

          <p>
            Crafted by{" "}
            <a
              href="https://zyne.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold transition-colors"
            >
              ZyneDigix
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
