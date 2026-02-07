import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, Award } from "lucide-react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";

const heroImages = [
  { src: hero1, alt: "Flight Simulator Training at We One Aviation" },
  { src: hero2, alt: "Successful Pilot Graduates from We One Aviation" },
  { src: hero3, alt: "Professional Commercial Pilot Career" },
];

const features = [
  "FREE Pilot Career Counselling Call",
  "FREE Flying School Selection",
  "FREE DGCA Computer Number Support",
  "FREE Medical Guidance",
  "FREE Simulator Experience (Limited Seats)",
  "FREE guideline for NIOS",
];

const airlines = ["INDIGO", "AIR INDIA", "VISTARA", "SPICEJET", "QATAR"];

const stats = [
  { value: "Affordable", label: "CPL Ground Classes" },
  { value: "100%", label: "Placement Support" },
  { value: "14+", label: "Years Experience" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={heroImages[currentSlide].src}
                  alt={heroImages[currentSlide].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Scholarship Badge */}
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-green">
                25% Scholarship
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentSlide ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                <Award className="w-4 h-4 text-primary" />
                #1 in Delhi
              </span>
              <span className="flex items-center gap-1.5 bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                Dwarka, Near IGI Airport
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground">
              Your Journey to the{" "}
              <span className="font-display italic text-gradient-orange">Cockpit</span>{" "}
              Starts in –{" "}
              <span className="font-display italic text-gradient-orange">We One Aviation</span>
            </h1>

            {/* Feature List */}
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground/90">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Airlines */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Our Alumni Fly With
              </p>
              <div className="flex flex-wrap gap-4">
                {airlines.map((airline) => (
                  <span
                    key={airline}
                    className="text-foreground font-bold text-sm tracking-wider"
                  >
                    {airline}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-3 text-center"
                >
                  <div className="text-primary font-black text-lg lg:text-xl">{stat.value}</div>
                  <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#courses"
                className="bg-gradient-orange text-primary-foreground px-6 py-3 rounded-full font-bold text-sm shadow-orange hover:opacity-90 transition-opacity"
              >
                Explore Courses
              </a>
              <a
                href="https://wa.me/919355611996?text=Hi%2C%20I%20want%20to%20know%20about%20pilot%20training%20at%20We%20One%20Aviation%20Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-green text-accent-foreground px-6 py-3 rounded-full font-bold text-sm shadow-green hover:opacity-90 transition-opacity"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
