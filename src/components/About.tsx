import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="numbered-heading text-2xl md:text-3xl font-bold mb-10">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-slate">
            <p>
              Hello! I'm John, a passionate full-stack developer who enjoys creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at an 
              <a href="#" className="text-mint hover-underline mx-1">advertising agency</a>, 
              a 
              <a href="#" className="text-mint hover-underline mx-1">start-up</a>, 
              a 
              <a href="#" className="text-mint hover-underline mx-1">huge corporation</a>, 
              and a 
              <a href="#" className="text-mint hover-underline mx-1">software consultancy</a>. 
              My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-5">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech, i) => (
                <li key={i} className="flex items-center font-mono text-sm">
                  <span className="text-mint mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden border-2 border-mint w-full max-w-[300px] mx-auto md:ml-auto">
              {/* Replace with your profile image or just keep a placeholder */}
              <div className="aspect-square bg-navy-light flex items-center justify-center text-mint">
                <span className="font-mono text-4xl">JD</span>
              </div>
              <div className="absolute inset-0 bg-mint/20 group-hover:bg-transparent transition-all duration-300"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 border-2 border-mint h-full w-full rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 max-w-[300px] hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
