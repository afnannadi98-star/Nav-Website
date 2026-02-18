import { motion } from "framer-motion";
import { ArrowRight, Layers, Box, Zap, FileText, Target, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import profilePic from "@assets/1_1771355152045.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary" />
        </div>

        <div className="container-padding relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-none">
              <span className="text-accent font-bold tracking-widest text-xs uppercase">Precision Engineering</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] uppercase">
              Advanced <br />
              <span className="text-white font-extrabold">Architectural BIM</span> <br />
              Consultancy
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              NAV specializes in delivering clean, coordinated, and submission-ready BIM models for medium- to large-scale developments.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 h-12 text-sm uppercase font-bold tracking-wider">
                  Start a Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-none px-8 h-12 text-sm uppercase font-bold tracking-wider">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Decorative Technical Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-[500px] h-[400px] border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between">
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-accent" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-accent" />
              
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="h-1 w-12 bg-white/20" />
                  <div className="h-1 w-8 bg-white/20" />
                </div>
                <Box className="w-12 h-12 text-white/20" />
              </div>
              
              <div className="space-y-4">
                <div className="text-6xl font-heading font-bold text-white/10">LOD 500</div>
                <div className="h-px w-full bg-white/10" />
                <div className="flex justify-between text-xs text-white/40 font-mono uppercase">
                  <span>Coordination</span>
                  <span>Fabrication</span>
                  <span>Analysis</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">Comprehensive BIM Solutions</h2>
            <p className="text-secondary text-lg">
              We provide end-to-end Architectural BIM services across SD, DD, IFC, As Built, shop drawing and authority submission stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "BIM Coordination", desc: "Weekly matrix-driven federation and clash management in Navisworks." },
              { icon: Box, title: "Model Development", desc: "Progressive Revit-based modeling from LOD 200 to LOD 500 standards." },
              { icon: Zap, title: "Automation", desc: "Custom Dynamo scripts for model integrity and efficient production." },
              { icon: Target, title: "QA/QC Checks", desc: "Continuous model health monitoring and compliance validation." },
              { icon: FileText, title: "Documentation", desc: "Coordinated, authority-ready drawings derived from live BIM data." },
              { icon: ShieldCheck, title: "Project Setup", desc: "Technical foundation setup aligned with ISO 19650 standards." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-border hover:border-accent/50 bg-white hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary group-hover:bg-accent group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-primary text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container-padding relative z-10 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Project?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Join leading architects and contractors who trust NAV for precision modeling and coordination.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-none px-10 h-14 text-sm uppercase font-bold tracking-wider">
              Get a Quote Today
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
