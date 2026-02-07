import { motion } from "framer-motion";
import { Trophy, Users, Monitor, Wallet, Globe, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "Since 2011, we've trained 3000+ pilots who are now flying with major airlines. 95%+ first-attempt success rate.",
  },
  {
    icon: Users,
    title: "Learn from Airline Captains",
    desc: "Learn from experienced airline pilots and aviation professionals. Real-world flying experience in every class.",
  },
  {
    icon: Monitor,
    title: "Advanced Simulators",
    desc: "Train on state-of-the-art flight simulators including Boeing 737 MAX. Get realistic cockpit experience.",
  },
  {
    icon: Wallet,
    title: "100% Loan Support",
    desc: "We provide complete assistance with education loans from partnered banks. Flexible EMI options available.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    desc: "Train at premier flying schools in USA, Canada, UK, Australia, South Africa, and India.",
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Support",
    desc: "From medical assistance to visa processing, computer number to exam booking - we handle everything.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Why We One Aviation?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What makes us India's most trusted pilot training academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
