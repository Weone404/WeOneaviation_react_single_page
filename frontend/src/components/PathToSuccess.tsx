import { motion } from "framer-motion";
import { Stethoscope, Hash, BookOpen, Plane } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Stethoscope,
    title: "Medical Clearance",
    desc: "Complete Class 1 & Class 2 medical examination from approved doctors. We assist with the entire medical process and handle complications.",
  },
  {
    num: 2,
    icon: Hash,
    title: "Computer Number",
    desc: "Obtain your unique identification number required for all exams. We handle the complete application process.",
  },
  {
    num: 3,
    icon: BookOpen,
    title: "Ground Training & Exams",
    desc: "Master all 6 subjects: Air Navigation, Meteorology, Air Regulations, Technical General, RTR(A), Technical Specific. Clear exams with our expert guidance.",
  },
  {
    num: 4,
    icon: Plane,
    title: "Flight Training",
    desc: "Complete 200+ hours of hands-on flying at our partner schools worldwide. Get your CPL and start your airline career.",
  },
];

const PathToSuccess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Your Path to Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow this proven 4-step journey to become a certified commercial pilot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-gradient-orange rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-orange">
                {step.num}
              </div>
              <div className="mt-4 mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathToSuccess;
