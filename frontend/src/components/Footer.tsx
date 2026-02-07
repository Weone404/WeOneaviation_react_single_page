const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "#home" },
    { label: "Commercial Pilot License", href: "#courses" },
    { label: "Ground Classes", href: "#courses" },
    { label: "Blog & Resources", href: "#" },
    { label: "Exam Practice", href: "#" },
  ],
  courses: [
    { label: "CPL Ground Classes", href: "#courses" },
    { label: "Flight Training", href: "#courses" },
    { label: "Full CPL Package", href: "#courses" },
    { label: "Cadet Programs", href: "#" },
    { label: "Airline Prep", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center font-bold text-primary-foreground text-sm">
                WO
              </div>
              <h3 className="text-foreground font-extrabold text-lg">
                WE <span className="text-primary">ONE</span> AVIATION
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              India's leading pilot training academy since 2011. We've trained 3000+ pilots who are now flying with major airlines worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Visit Us</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>📍 C-404, 3rd Floor, Sector-7<br />Dwarka, Delhi - 110075</p>
              <p>📞 +919355611996</p>
              <p>💬 WhatsApp: +919355611996</p>
              <p>📧 weoneaviation8@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2011-2026 We One Aviation Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
