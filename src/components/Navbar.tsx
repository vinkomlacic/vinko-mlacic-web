
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'About', anchor: '#about' },
    { name: 'Skills', anchor: '#skills' },
    { name: 'Projects', anchor: '#projects' },
    { name: 'Contact', anchor: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-mint font-mono text-xl md:text-2xl font-semibold">
          {'<Dev />'}
        </a>
        
        {isMobile ? (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            className="text-slate-light hover:text-mint hover:bg-transparent"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        ) : (
          <nav className="flex items-center space-x-8">
            <ul className="flex space-x-6 items-center">
              {navItems.map((item, i) => (
                <li key={i} className="stagger-animate">
                  <a href={item.anchor} className="nav-link">
                    <span className="nav-number">0{i + 1}.</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* <Button 
              variant="outline" 
              className="border-mint text-mint hover:bg-mint/10 rounded"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button> */}
          </nav>
        )}

        {/* Mobile menu */}
        {isMobile && (
          <div 
            className={`fixed inset-0 z-40 bg-navy-dark/90 backdrop-blur-sm transition-all duration-300 ${
              menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMenu}
          >
            <div 
              className={`flex flex-col items-center justify-center h-full transition-all duration-500 ${
                menuOpen ? 'translate-y-0' : '-translate-y-10'
              }`}
              onClick={e => e.stopPropagation()}
            >
              <nav className="flex flex-col items-center space-y-8">
                <ul className="flex flex-col space-y-6 items-center">
                  {navItems.map((item, i) => (
                    <li key={i} style={{ animationDelay: `${(i + 1) * 100}ms` }} className="animate-fade-in-up">
                      <a href={item.anchor} className="nav-link text-xl" onClick={toggleMenu}>
                        <span className="nav-number">0{i + 1}.</span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* <Button 
                  variant="outline" 
                  className="border-mint text-mint hover:bg-mint/10 rounded text-lg px-6 py-3 animate-fade-in-up"
                  style={{ animationDelay: '500ms' }}
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                    Resume
                  </a>
                </Button> */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
