import { type Project } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const getImageUrl = (url: string) => {
    if (url.startsWith('/assets/')) {
      // In a real Vite app, you'd import these, 
      // but for this dynamic case we'll try to map it or use a public path
      return url;
    }
    return url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden bg-gray-100 dark:bg-gray-800"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={getImageUrl(project.imageUrl)} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {project.category}
        </span>
        <h3 className="text-white font-heading font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          {project.description}
        </p>
        <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-175">
          <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Scope</p>
          <p className="text-white text-xs">{project.scope}</p>
        </div>
        <Link href={`/portfolio?id=${project.id}`} className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-accent transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Static Label (Visible when not hovering) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300 border-t border-gray-200">
        <h3 className="font-heading font-bold text-lg text-primary">{project.title}</h3>
        <span className="text-xs text-secondary font-medium uppercase tracking-wide">{project.category}</span>
      </div>
    </motion.div>
  );
}
