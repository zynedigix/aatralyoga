import logo from "../assets/aatral-yoga-logo.webp";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Corporate", href: "#corporate" },
  { label: "Gallery", href: "#gallery" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-navy surface-dark text-white">
      <div className="container-editorial pt-20 lg:pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-14 lg:gap-20">
          <div className="md:col-span-5">
            <img
              src={logo}
              alt="Aatral Yoga"
              className="h-12 lg:h-14 w-auto brightness-0 invert opacity-90"
            />
            <p className="type-body-sm text-white/75 mt-8 max-w-sm leading-[1.85]">
              Premium yoga and corporate wellness in Chennai. Awaken your
              inner balance through mindful practice.
            </p>
            <p className="type-eyebrow text-gold/60 mt-8">
              Awaken · Align · Achieve
            </p>
          </div>

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
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 mt-16 lg:mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 type-small text-white/55">
          <p>&copy; {new Date().getFullYear()} Aatral Yoga. All rights reserved.</p>
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
