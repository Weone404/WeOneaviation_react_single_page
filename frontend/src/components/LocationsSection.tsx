import { motion } from "framer-motion";

const locations = [
  { country: "India", flag: "🇮🇳", cost: "₹40-60 Lakh", duration: "12-18 Months", highlight: "State-of-the-art simulators" },
  { country: "USA", flag: "🇺🇸", cost: "Starting from $62k", duration: "12-14 Months", highlight: "FAA CPL & ATPL Training" },
  { country: "Canada", flag: "🇨🇦", cost: "CAD $90k-$110k", duration: "18-24 Months", highlight: "PR opportunities available" },
  { country: "UK", flag: "🇬🇧", cost: "£90k-£120k", duration: "24 Months", highlight: "EASA ATPL Integrated" },
  { country: "Australia", flag: "🇦🇺", cost: "AUD $90k-$120k", duration: "12-18 Months", highlight: "CASA CPL & ATPL" },
  { country: "South Africa", flag: "🇿🇦", cost: "$60k-$80k", duration: "12-15 Months", highlight: "SACAA Training - Affordable" },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Train at World-Class Facilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partner flight schools across the globe providing the highest standards of safety and instruction with optimized training paths for aspiring pilots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.country}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{loc.flag}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{loc.country}</h3>
                  <span className="text-primary font-bold">{loc.cost}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Duration:</span> {loc.duration}
                </p>
                <p className="text-accent font-semibold">{loc.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advantage Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-card border border-primary/20 rounded-2xl p-8 text-center"
        >
          <p className="text-primary text-sm font-bold mb-2">✨ The We One Aviation Advantage</p>
          <p className="text-foreground text-lg max-w-3xl mx-auto">
            While standard regulations require 200 hours of flying, at{" "}
            <span className="text-primary font-bold">We One Aviation</span>, we go above and beyond with{" "}
            <span className="text-primary font-bold">250+ hours</span> to ensure you are better prepared, more confident, and ready for your first airline interview.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
