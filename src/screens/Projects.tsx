import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button } from '../components/button';
import useStore from '../store/store';

const projects = [
  {
    title: "Portfolio 2024",
    description: "A modern portfolio with interactive animations and smooth transitions",
    tech: ["React", "TypeScript", "GSAP", "Tailwind"],
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory",
    tech: ["Next.js", "Supabase", "Stripe", "TailwindCSS"],
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with video streaming",
    tech: ["React Native", "Firebase", "WebRTC", "Redux"],
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const setIsMaskActive=useStore().setIsMaskActive

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(scrollRef.current, {
      x: -(scrollRef.current?.scrollWidth || 0),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=10000",
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-20 left-50">
        <h2 className="font-bold text-[#b7ab98] text-[2em] tracking-[6.67px] leading-[17.3px]">
          SELECTED WORKS
        </h2>
      </div>

      <div 
        onMouseLeave={()=>{
            setIsMaskActive(true)
        }}
        className="absolute top-1/2 left-1/2 -translate-y-1/2">
        <div ref={scrollRef} className="flex gap-8 pointer-events-none">
          {[...projects].map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="w-[600px] h-[600px] relative "
            >
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-lg transform transition-transform group-hover:scale-[0.98]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-1/2 object-cover rounded-t-lg opacity-80"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-[#eb5939] font-bold text-2xl">{project.title}</h3>
                  <p className="text-[#b7ab98] text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-[#2a2a2a] text-[#b7ab98] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-[#eb5939] hover:text-[#b7ab98] transition-colors "
                  >
                    View Project →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;