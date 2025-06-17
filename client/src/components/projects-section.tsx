import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

type FilterType = 'all' | 'web' | 'mobile' | 'api';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'api', label: 'APIs' },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meus Projetos</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma seleção dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções criativas.
          </p>
        </motion.div>

        {/* Project Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={activeFilter === filter.key ? "bg-primary text-white" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-blue-700"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-blue-700"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
