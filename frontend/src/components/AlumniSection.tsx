import { motion } from "framer-motion";

const placements = [
  { airline: "Air India", count: "150+" },
  { airline: "IndiGo", count: "200+" },
  { airline: "SpiceJet", count: "80+" },
  { airline: "Air India Express", count: "50+" },
  { airline: "Intl. Airlines", count: "20+" },
];

const AlumniSection = () => {
  return (
    <section className="py-16 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Our Students Fly With
          </h2>
          <p className="text-muted-foreground">
            500+ placements in 2024-25 batch across leading airlines.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {placements.map((p, i) => (
            <motion.div
              key={p.airline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl font-black text-primary mb-1">{p.count}</div>
              <div className="text-foreground font-semibold text-sm">{p.airline}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
