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
            <h1 className="font-heading text-5xl font-bold text-primary mb-6">Building Intelligence, <br/> Delivered.</h1>
            <p className="text-xl text-secondary leading-relaxed">
              We are a team of architects, engineers, and BIM specialists dedicated to transforming the construction industry through digital precision.
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
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent p-6 flex flex-col justify-center items-center text-white hidden md:flex">
              <span className="text-5xl font-heading font-bold">10+</span>
              <span className="text-sm font-medium uppercase tracking-wider mt-2">Years Exp.</span>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-secondary leading-relaxed">
                To eliminate construction waste and errors through impeccable digital planning. We believe that a building should be built twice: once digitally, and once physically.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Efficiency", desc: "Streamlined workflows that save time." },
                { icon: Target, title: "Accuracy", desc: "Zero-tolerance for modeling errors." },
                { icon: Users, title: "Collaboration", desc: "Seamless integration with your team." },
                { icon: CheckCircle2, title: "Quality", desc: "Standards that exceed expectations." }
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

        {/* Team Section Placeholder */}
        <div className="text-center py-16 border-t border-border">
          <h2 className="font-heading text-3xl font-bold text-primary mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-gray-200 mb-6 overflow-hidden relative">
                  {/* Generic professional headshot placeholders */}
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?w=500&q=80`}
                    alt="Team Member"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Member Name</h3>
                <p className="text-accent text-sm font-medium uppercase tracking-wider mt-1">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
