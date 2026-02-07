import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "We One Aviation made my dream come true. The instructors are incredibly supportive, and the training facilities are world-class. I cleared all exams in my first attempt.",
    name: "Akansha Tiwari",
    role: "Now Flying with Air India Express",
  },
  {
    text: "Best decision I ever made! The flight simulators gave me incredible hands-on experience. The structured approach and personal attention made all the difference.",
    name: "Mayank Yadav",
    role: "Currently with IndiGo",
  },
  {
    text: "I cleared my Aviation Meteorology exam in just 45 days! They handle everything - medical, documentation, visa - so I could focus purely on my studies.",
    name: "Manisha Singh",
    role: "Current Student - Batch 2025",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Success Stories
          </h2>
          <p className="text-muted-foreground">
            Hear from our graduates who are now flying with major airlines.
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-10 text-center"
          >
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" />
            <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="text-foreground font-bold text-lg">{testimonials[current].name}</p>
              <p className="text-primary text-sm font-medium">{testimonials[current].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
