import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, Zap, ShieldCheck, Microscope } from "lucide-react";

import expertiseImg from "@assets/SOLID_GLASS_CUBE_2_1771449977187.jpg";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      
      {/* Header */}
      <div className="bg-primary py-20 mb-16">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">About NAV</span>
            <h1 className="font-heading text-5xl font-bold text-white mb-6">Clean, Coordinated, <br/> & Submission-Ready.</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              NAV specializes in delivering high-quality BIM outputs for medium- to large-scale developments, supporting design consultants, developers, and contractors in translating complex architectural designs into structured models.
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
            <img 
              src={expertiseImg} 
              alt="Our Expertise" 
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">Our Expertise</h2>
              <p className="text-secondary leading-relaxed italic">
                "Our process is built to support complex projects, tight schedules, and high governance environments without compromising quality or clarity."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "BIM Governance", desc: "Technical foundation aligned with project requirements." },
                { icon: Target, title: "Clash Matrix", desc: "Structured, matrix-driven coordination process." },
                { icon: Users, title: "ISO 19650", desc: "Compliance with international information management." },
                { icon: Microscope, title: "QA/QC Records", desc: "Continuous quality control throughout project lifecycle." }
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
              "BIM Manager",
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
