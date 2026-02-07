import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          Visit Us in Delhi
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-bold mb-2">Our Address</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We One Aviation Academy<br />
              C-404, 3rd Floor, Sector-7<br />
              Dwarka, Delhi - 110075<br />
              Near IGI Airport
            </p>
            <a
              href="https://maps.google.com/?q=We+One+Aviation+Academy+Dwarka+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-semibold mt-3 inline-block hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Hours */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-bold mb-2">Office Hours</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Monday - Saturday: 10:00 AM - 6:00 PM<br /><br />
              Sunday: Closed
            </p>
          </div>

          {/* Contact */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-bold mb-2">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Phone:{" "}
                <a href="tel:+919355611996" className="text-foreground hover:text-primary transition-colors">
                  +919355611996
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href="https://wa.me/919355611996" className="text-foreground hover:text-primary transition-colors">
                  +919355611996
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:weoneaviation8@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  weoneaviation8@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
