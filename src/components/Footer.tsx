
import React from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 text-center text-slate">
      <div className="mb-5 flex justify-center space-x-6">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate hover:text-mint transform hover:-translate-y-1 transition-all"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate hover:text-mint transform hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate hover:text-mint transform hover:-translate-y-1 transition-all"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
      </div>
      <div className="font-mono text-xs">
        <p>Designed & Built by John Doe</p>
        <p className="mt-2 text-slate-dark">© 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
