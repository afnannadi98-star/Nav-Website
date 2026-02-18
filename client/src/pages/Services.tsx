import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "BIM Coordination & IFC",
      description: "Weekly or milestone-based federation with structured clash detection and IFC coordination. We establish a Clash Matrix defining discipline combinations, responsibilities, and tolerance thresholds.",
      features: ["Navisworks Federation", "IFC Coordination", "Priority Categorization", "Issue Tracking & Resolution"],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
    },
    {
      title: "Model Development (LOD 200-500)",
      description: "Revit-based architectural modeling from SD to As-Built (LOD 500). We align with design intent and BEP requirements, utilizing parametric families and Dynamo automation.",
      features: ["SD / DD / IFC / Shop Drawings", "LOD 500 As-Built Modeling", "Parametric RFA Families", "Workset & File Strategy"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
    },
    {
      title: "Automation & Model Health",
      description: "Custom computational workflows including profile change detection, parameter validation, and integrity checks. We ensure validated, warning-controlled models for submission.",
      features: ["Custom Dynamo Tools", "Model Health Optimization", "Parameter Validation", "Automated Batch Exports"],
      image: "https://images.unsplash.com/photo-1581094794329-cd67bce35543?w=800&q=80"
    },
    {
      title: "Documentation & Compliance",
      description: "Authority-compliant layouts derived directly from live BIM data. Deliverables include plans, sections, and detailed packages aligned with ISO 19650 standards.",
      features: ["Shop Drawing Extraction", "Property Set Management", "Authority Submissions", "ISO 19650 Compliance"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-padding mb-16 text-center">
        <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Our Services</span>
        <h1 className="font-heading text-5xl font-bold text-primary">Technical Excellence</h1>
      </div>

      <div className="container-padding space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-none -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="aspect-video overflow-hidden border border-border">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover filter saturate-0 group-hover:saturate-100 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="font-heading text-3xl font-bold text-primary">{service.title}</h2>
              <p className="text-secondary text-lg leading-relaxed">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/contact">
                  <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wider">
                    Request Service
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
