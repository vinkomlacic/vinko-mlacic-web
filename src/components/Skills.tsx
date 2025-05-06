
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Layout, Server } from "lucide-react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => (
  <Card className="bg-navy-light border-slate-dark hover:border-mint/50 transition-colors">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div className="bg-navy-dark p-2 rounded-md text-mint">
        {icon}
      </div>
      <CardTitle className="text-slate-light text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
        {skills.map((skill, i) => (
          <li key={i} className="text-slate flex items-center text-sm">
            <span className="text-mint mr-2 text-xs">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: ["Responsive Design", "Performance Optimization", "React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Material UI"]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: ["REST APIs", "Serverless", "Authentication", "Authorization", "Django / DRF", "Celery", "Node.js"]
    },
    {
      title: "Database Management",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Query Optimization", "Data Modeling"]
    },
    {
      title: "Additional Skills",
      icon: <Code size={24} />,
      skills: ["Git", "Docker", "CI/CD", "AWS", "Agile Methodology", "Technical Writing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-10 bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="numbered-heading text-2xl md:text-3xl font-bold mb-12">Skills</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
