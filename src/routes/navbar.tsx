import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Check if page is scrolled (for background change)
          setIsScrolled(currentScrollY > 20);
          
          // Always show navbar at the very top
          if (currentScrollY < 50) {
            setIsVisible(true);
          } else {
            // Hide on scroll down, show on scroll up
            const scrollingDown = currentScrollY > lastScrollY.current;
            if (scrollingDown) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          }
          
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`
        flex justify-between items-center px-12 py-8 
        shadow-md fixed top-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        ${isScrolled ? 'bg-[#b7d5d4]' : 'bg-[#b7d5d4]/90 backdrop-blur-sm'}
      `}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <a
        href="#home"
        className="text-5xl font-extrabold hover:text-[#305252] tracking-tight transition-colors duration-300"
      >
        Althan
      </a>
      <nav className="flex gap-x-12 text-xl font-bold">
        <a 
          href="#experience" 
          className="group relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#305252] hover:-translate-y-2 active:translate-y-0"
        >
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#305252] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />
        </a>
        <a 
          href="#skills" 
          className="group relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#305252] hover:-translate-y-2 active:translate-y-0"
        >
          Skills
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#305252] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />
        </a>
        <a 
          href="#projects" 
          className="group relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#305252] hover:-translate-y-2 active:translate-y-0"
        >
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#305252] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />
        </a>
        <a
          href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#305252] hover:-translate-y-2 active:translate-y-0"
        >
          Resume
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#305252] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />
        </a>
      </nav>
    </header>
  );
}