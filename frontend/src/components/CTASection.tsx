import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Ready to Take Flight from Delhi?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Join Delhi's #1 pilot training academy in Dwarka, near IGI Airport. Connect with us on WhatsApp for instant consultation.
        </p>
        <a
          href="https://wa.me/919355611996?text=Hi%2C%20I%20want%20to%20know%20about%20pilot%20training%20at%20We%20One%20Aviation%20Delhi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-green text-accent-foreground px-8 py-4 rounded-full font-bold text-lg shadow-green hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-6 h-6" />
          Chat on WhatsApp - Delhi Office
        </a>
      </div>
    </section>
  );
};

export default CTASection;
