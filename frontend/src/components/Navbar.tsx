import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Locations", href: "#locations" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center font-bold text-primary-foreground text-sm">
              WO
            </div>
            <div>
              <h1 className="text-foreground font-extrabold text-lg leading-tight tracking-tight">
                WE <span className="text-primary">ONE</span> AVIATION
              </h1>
              <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em]">
                Pilot Training Academy
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919355611996"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-orange"
            >
              <Phone className="w-4 h-4" />
              +919355611996
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-secondary/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-muted-foreground hover:text-foreground py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919355611996"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full font-semibold text-sm w-fit"
            >
              <Phone className="w-4 h-4" />
              +919355611996
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
