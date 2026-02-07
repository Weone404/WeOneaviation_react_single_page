import { motion } from "framer-motion";
import { Clock, Monitor, GraduationCap, Percent, MessageCircle } from "lucide-react";

const courses = [
  {
    title: "CPL Ground Classes",
    description: "Master all theoretical subjects with expert instructors. Comprehensive preparation for your Commercial Pilot License exams.",
    details: [
      { label: "Duration", value: "6 Months" },
      { label: "Mode", value: "Offline / Online" },
      { label: "Fees", value: "Enquire Now" },
    ],
    badge: "25% Scholarship Available",
    badgeColor: "bg-primary/10 text-primary",
    icon: GraduationCap,
  },
  {
    title: "CPL Flight Training",
    description: "Complete 200+ hours of professional flight training in India or abroad. Train with modern aircraft and experienced instructors.",
    details: [
      { label: "Flying Hours", value: "200+ Hours" },
      { label: "Duration", value: "12 - 18 Months" },
      { label: "Fees", value: "Enquire Now" },
    ],
    badge: "100% Loan Support",
    badgeColor: "bg-accent/10 text-accent",
    icon: Monitor,
  },
  {
    title: "Complete CPL Package",
    description: "End-to-end Commercial Pilot License training. All-inclusive program from theory to flight certification.",
    details: [
      { label: "Program Type", value: "Theory + Practical" },
      { label: "Duration", value: "2 - 3 Years" },
      { label: "Fees", value: "Enquire Now" },
    ],
    badge: "Guaranteed Placement",
    badgeColor: "bg-accent/10 text-accent",
    icon: Clock,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Professional Training Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of pilot training courses designed to take you from ground to sky with precision and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-1">{course.description}</p>

              <div className="space-y-3 mb-6">
                {course.details.map((detail) => (
                  <div key={detail.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{detail.label}</span>
                    <span className="text-foreground font-semibold">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className={`text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4 ${course.badgeColor}`}>
                {course.badge}
              </div>

              <div className="flex gap-3">
                <a
                  href="#consultation"
                  className="flex-1 text-center bg-muted text-foreground py-2.5 rounded-lg text-sm font-semibold hover:bg-muted/80 transition-colors"
                >
                  Details
                </a>
                <a
                  href="https://wa.me/919355611996?text=Hi%2C%20I%20want%20to%20apply%20for%20pilot%20training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-green text-accent-foreground py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
