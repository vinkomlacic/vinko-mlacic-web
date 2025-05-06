import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="numbered-heading text-2xl md:text-3xl font-bold mb-10">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-slate">
            <p>
            I'm a product-oriented software engineer with a unique global perspective, having lived and worked across
            five countries. My approach blends technical excellence with a deep understanding of user needs, ensuring
            every solution is robust, scalable, and meaningful.
            </p>
            
            <p>
            With a Master's degree in Cyber Security, I bring advanced expertise in building secure systems, defending
            against threats, and embedding security into every stage of development. My experience spans diverse
            environments and teams, making me adaptable, collaborative, and effective at turning complex challenges
            into innovative products.
            </p>

            <p>
            Driven by curiosity and a commitment to continuous learning, I thrive on solving tough problems and
            delivering results that matter. Whether leading cross-functional projects or diving deep into code, I aim
            to create software that empowers users and stands the test of time.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden border-2 border-mint w-full max-w-[300px] mx-auto md:ml-auto">
              <div className="aspect-square bg-navy-light flex items-center justify-center text-mint">
                <img 
                  src="/img/profile-img.jpg" 
                  alt="Profile Image" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-mint/20 transition-all duration-300"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 border-2 border-mint h-full w-full rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 max-w-[300px] hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
