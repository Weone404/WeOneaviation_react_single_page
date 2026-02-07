import { useState } from "react";
import { MessageCircle, Shield, Zap, Lock } from "lucide-react";

const interests = [
  "CPL Ground Classes",
  "CPL Flight Training",
  "Full CPL Course",
  "Career Counseling",
];

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // ✅ HARD validation before API call
  if (
    !formData.fullName.trim() ||
    !formData.whatsapp.trim() ||
    !formData.interest.trim()
  ) {
    alert("Please fill all required fields");
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("https://weone-aviation-backend.onrender.com/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        interest: formData.interest.trim(), // 👈 critical
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to save form");
    }

    const message = `Hi, I'm ${formData.fullName}. I'm interested in ${formData.interest}. My WhatsApp: ${formData.whatsapp}${
      formData.email ? `, Email: ${formData.email}` : ""
    }`;

    const whatsappUrl = `https://wa.me/919355611996?text=${encodeURIComponent(message)}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);

  } catch (error) {
    console.error("Form submission error:", error);
    alert(error instanceof Error ? error.message : "Something went wrong");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section className="py-16 bg-navy-deep relative" id="consultation">
      {/* Urgency Banner */}
      <div className="bg-primary/10 border-y border-primary/20 py-3 mb-12">
        <p className="text-center text-primary font-bold text-sm animate-pulse">
          🔥 Limited Seats! Next Batch Starting Soon
        </p>
      </div>

      <div className="max-w-xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-foreground text-center mb-2">
          Get Free Consultation - Delhi
        </h3>
        <p className="text-muted-foreground text-center mb-8">
          Connect with our expert counselors via WhatsApp instantly!
        </p>

        {submitted ? (
          <div className="bg-card border border-accent/30 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Thank You!</h4>
            <p className="text-muted-foreground">
              Redirecting you to WhatsApp for instant consultation...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-4">
            <div>
              <label className="text-sm text-foreground font-medium mb-1.5 block">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="text-sm text-foreground font-medium mb-1.5 block">
                WhatsApp Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                required
                maxLength={15}
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="Enter your WhatsApp number"
              />
            </div>

            <div>
              <label className="text-sm text-foreground font-medium mb-1.5 block">
                Email Address
              </label>
              <input
                type="email"
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="Enter your email (optional)"
              />
            </div>

            <div>
              <label className="text-sm text-foreground font-medium mb-1.5 block">
                Select Your Interest <span className="text-primary">*</span>
              </label>
              <select
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
              >
                <option value="">Select an option</option>
                {interests.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-green text-accent-foreground py-3.5 rounded-lg font-bold text-base shadow-green hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Get Free Consultation on WhatsApp"}
            </button>

            <div className="flex items-center justify-center gap-6 pt-2">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Zap className="w-3.5 h-3.5 text-primary" /> Instant Response
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-accent" /> No Spam
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5 text-accent" /> 100% Privacy
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ConsultationForm;
