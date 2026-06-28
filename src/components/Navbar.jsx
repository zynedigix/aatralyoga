import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/aatral-yoga-logo.webp";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-soft">
      <div className="container-editorial py-5 lg:py-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Aatral Yoga" className="h-12 lg:h-[3.35rem] w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-12 xl:gap-14">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="type-small text-navy/60 hover:text-navy transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-premium">
            Book a Session
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden text-navy p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-soft border-t border-navy/5 px-6 py-8 space-y-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block type-body text-navy/75 hover:text-navy py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-premium mt-4"
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
