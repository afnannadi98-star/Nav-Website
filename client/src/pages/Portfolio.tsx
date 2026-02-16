import { useProjects } from "@/hooks/use-projects";
import ProjectCard from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { data: projects, isLoading, isError } = useProjects();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-accent" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load projects. Please try again later.
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="bg-primary text-white py-16 mb-16">
        <div className="container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Our Work</span>
            <h1 className="font-heading text-5xl font-bold mb-6">Featured Projects</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A curated selection of our BIM projects across commercial, residential, and infrastructure sectors.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-padding">
        {/* Filter placeholders could go here */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects?.length === 0 && (
          <div className="text-center py-20 bg-gray-50 border border-dashed border-gray-200">
            <h3 className="text-lg font-medium text-gray-500">No projects found</h3>
            <p className="text-sm text-gray-400 mt-2">Check back soon for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
