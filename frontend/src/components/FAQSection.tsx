import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the eligibility criteria?",
    a: "Minimum age 17 years for CPL. Educational qualification: 10+2 with Physics & Mathematics. Medical fitness: Class 1 Medical Certificate from approved examiner.",
  },
  {
    q: "How long does it take to become a commercial pilot?",
    a: "The complete journey takes 2-3 years: Ground Classes (6 months), Exams (3-6 months), Flight Training (12-18 months). We offer fast-track programs.",
  },
  {
    q: "What is the total cost?",
    a: "Ground Classes: ₹2.2-2.9 Lakh (25% scholarship available). Complete CPL including flight training: ₹50-70 Lakh depending on country. We provide 100% loan support.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes! We provide 100% placement support. Our 3000+ alumni fly with Air India, IndiGo, SpiceJet, and international airlines. We conduct regular placement drives.",
  },
  {
    q: "Can I wear glasses and become a pilot?",
    a: "Yes! You can become a pilot with glasses as long as your vision is correctable to 6/6 with glasses or contact lenses and you meet Class 1 medical requirements.",
  },
  {
    q: "What is your success rate?",
    a: "We maintain a 95%+ first-attempt success rate. Our experienced instructors, comprehensive study material, and regular mock tests ensure students are well-prepared.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-navy-deep">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about pilot training.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-foreground font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
