
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  image?: string;
  reverse?: boolean;
}

const Project = ({ title, description, tech, links, reverse = false }: ProjectProps) => (
  <div className={`relative grid md:grid-cols-12 items-center gap-10 ${reverse ? 'md:text-right' : ''}`}>
    {/* Content */}
    <div className={`${reverse ? 'md:col-start-6 md:col-end-13' : 'md:col-span-7'} z-10`}>
      <p className="font-mono text-mint text-sm mb-2">Featured Project</p>
      <h3 className="text-xl md:text-2xl font-bold text-slate-light mb-5">{title}</h3>
      
      <div className="p-6 bg-navy-light rounded-md shadow-xl md:shadow-2xl mb-5">
        <p className="text-slate">{description}</p>
      </div>
      
      <ul className={`flex flex-wrap mb-6 gap-x-4 gap-y-2 ${reverse ? 'md:justify-end' : ''}`}>
        {tech.map((item, i) => (
          <li key={i}>
            <Badge variant="outline" className="border-slate-dark text-slate font-mono">
              {item}
            </Badge>
          </li>
        ))}
      </ul>
      
      <div className={`flex items-center gap-4 ${reverse ? 'md:justify-end' : ''}`}>
        {links.github && (
          <a 
            href={links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-light hover:text-mint transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
        )}
        {links.live && (
          <a 
            href={links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-light hover:text-mint transition-colors"
            aria-label="Live Project"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
    
    {/* Image */}
    {/* <div 
      className={`rounded-md md:col-span-7 ${
        reverse ? 'md:col-start-1 md:col-end-8' : 'md:col-start-6 md:col-end-13'
      } md:absolute md:h-full`}
    >
      <div className="w-full h-64 md:h-full bg-navy-light rounded-md flex items-center justify-center relative">
        <div className="absolute inset-0 bg-mint/5 hover:bg-transparent border border-mint/20 hover:border-mint/40 rounded-md transition-all duration-300"></div>
        <span className="font-mono text-4xl text-mint opacity-40">Project Image</span>
      </div>
    </div> */}
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "Recipe management app",
      description: "A Django application for creating and publishing recipes. Check it out here. You will need access to a demo account, so make sure you check out the README.",
      tech: ["Django", "Python", "Bootstrap", "PostgreSQL"],
      links: {
        github: "https://github.com/vinkomlacic/recipy",
        live: "https://recipy.vinkomlacic.com",
      },
    },
    {
      title: "URL Shortener",
      description: " A Django application for creating and publishing recipes. You will need access to a demo account, so make sure you check out the README.",
      tech: ["Django", "Python", "Bootstrap", "PostgreSQL"],
      links: {
        github: "https://github.com/vinkomlacic/url-shortener",
        live: "https://urls.vinkomlacic.com",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="numbered-heading text-2xl md:text-3xl font-bold mb-16">Some Things I've Built</h2>
        
        <div className="space-y-28">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} reverse={index % 2 !== 0} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-slate-light text-xl font-bold mb-6">Other Noteworthy Projects</h3>
          <Button className="bg-transparent hover:bg-mint/10 text-mint border border-mint px-6 py-2 rounded" asChild>
            <a 
              href="https://github.com/vinkomlacic" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View More on GitHub
              <Github className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
