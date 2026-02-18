import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      
      {/* Header */}
      <div className="bg-secondary/10 py-20 mb-16">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">About NAV</span>
            <h1 className="font-heading text-5xl font-bold text-primary mb-6">Precision, Clarity, <br/> & Technical Integrity.</h1>
            <p className="text-xl text-secondary leading-relaxed">
              NAV is a specialized Architectural BIM consultancy founded in 2025. We operate at the intersection of design intent, technical accuracy, and BIM governance.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-padding">
        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Office meeting image */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
              alt="Our Team" 
              className="w-full h-[500px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">Letter of Submission</h2>
              <p className="text-secondary leading-relaxed italic">
                "Our expertise lies in transforming architectural design intent into technically accurate, high-quality BIM outputs suitable for coordination, documentation, and authority submission."
                <br /><br />
                — Afnan Mohammad, Founder & BIM Manager
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "BIM Governance", desc: "Structured methodology for information delivery." },
                { icon: Target, title: "CDE Management", desc: "Common Data Environment control and coordination." },
                { icon: Users, title: "ISO 19650", desc: "International standards for information management." },
                { icon: CheckCircle2, title: "QA/QC Control", desc: "Disciplined verification and validation workflows." }
              ].map((val, i) => (
                <div key={i} className="flex gap-4">
                  <val.icon className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-primary">{val.title}</h3>
                    <p className="text-sm text-secondary mt-1">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hierarchy Section */}
        <div className="py-16 border-t border-border">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">Technical Hierarchy</h2>
            <p className="text-secondary">Our structured hierarchy ensures consistency and accountability through defined coordination roles and QA checkpoints.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Founder / BIM Manager",
              "Project Architect",
              "Senior Architect",
              "BIM Coordinator",
              "BIM Architects"
            ].map((role, i) => (
              <div key={i} className="p-6 border border-border bg-white text-center">
                <p className="font-heading font-bold text-sm uppercase tracking-wider text-primary">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
