
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-10 bg-navy-dark">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-mono text-mint mb-5">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-light mb-6">Get In Touch</h2>
        
        <p className="text-slate text-lg mb-12">
          I'm always looking for new opportunities to connect with curious minds. Whether you have a question or
          just want to say hi, I'll try my best to get back to you!
        </p>
        
        <Button 
          className="bg-transparent hover:bg-mint/10 text-mint border border-mint px-7 py-6 rounded text-lg group"
          asChild
        >
          <a href="mailto:vinkomlacic@outlook.com">
            <Mail className="mr-2" size={20} />
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
