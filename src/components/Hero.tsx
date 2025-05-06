
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="stagger-animate">
          <h1 className="font-mono text-mint text-base md:text-lg mb-5">Hi, my name is</h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-light mb-4">Vinko Mlačić.</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-8">
            I'm a Product-Driven Software Engineer.
          </h3>
          
          <p className="max-w-xl text-slate text-lg md:text-xl mb-12">
          With a passion for crafting reliable products and a global perspective shaped by living in five countries,
          I design and deliver software that solves real-world problems. Master’s in Cyber Security. Let’s create the
          future, securely.
          </p>
          
          <Button 
            className="bg-transparent hover:bg-mint/10 text-mint border border-mint px-7 py-6 rounded group"
            asChild
          >
            <a href="#projects">
              Check out my work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
