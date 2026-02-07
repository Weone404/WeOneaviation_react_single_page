import { motion } from "framer-motion";
import { Users, Award, Globe, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: "3000+", label: "Pilots Trained Since 2011" },
  { icon: Award, value: "100%", label: "Placement Support" },
  { icon: Globe, value: "6+", label: "Global Training Locations" },
  { icon: Briefcase, value: "500+", label: "Airline Placements" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
