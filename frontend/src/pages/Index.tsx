import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConsultationForm from "@/components/ConsultationForm";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import PathToSuccess from "@/components/PathToSuccess";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationsSection from "@/components/LocationsSection";
import AlumniSection from "@/components/AlumniSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ConsultationForm />
      <StatsSection />
      <CoursesSection />
      <PathToSuccess />
      <WhyChooseUs />
      <LocationsSection />
      <AlumniSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
