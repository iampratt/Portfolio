import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button } from '../components/button';
import useStore from '../store/store';

const projects = [
  {
    title: "Pixilator",
    description: "AI image generation platform with multi-model fallback and automated prompt refinement for reliable high-quality outputs.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Hugging Face"],
    image: "Projects/pixilator.png",
    link: "https://pixilator.vercel.app/",
    github: "https://github.com/iampratt/pixilator"
  },
  {
    title: "HireMind",
    description: "AI-driven job discovery and resume tailoring platform that automates applications and avoids duplicate submissions using historical indexing.",
    tech: ["React.js", "Node.js", "LangGraph", "ChromaDB", "GPT-4", "BeautifulSoup"],
    image: "Projects/hiremind.png",
    link: "https://hiremindai.vercel.app/",
    github: "https://github.com/iampratt/HireMind"
  },
  {
    title: "UniWay",
    description: "College cab management app with student, driver and admin roles. Uses RAG and vector search to optimize routes and reduce commute time.",
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "LangChain", "FAISS"],
    image: "Projects/uniway.png",
    link: "https://github.com/iampratt/uniway",
    github: "https://github.com/iampratt/uniway"
  },
  {
    title: "Crave",
    description: "Production-ready MERN app for hostel food ordering with live SMS updates and JWT-secured vendor dashboards.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Twilio API", "JWT"],
    image: "Projects/crave.png",
    link: "https://cravemuj.vercel.app/",
    github: "https://github.com/iampratt/crave"
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
        end: "+=5000",
      }
    });
  }, []);

  return (
    <div 
      id="projects"
      onMouseLeave={()=>{
        setIsMaskActive(true)
      }}
      ref={containerRef}
      className="relative w-full h-screen bg-[#0d0d0d]">
      <div className="absolute top-20 px-10 lg:px-50">
        <h2 className="font-bold text-[#b7ab98] text-[2em] tracking-[6.67px] leading-[1em] lg:leading-[17.3px]">
          SELECTED WORKS
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/8 lg:left-1/2 -translate-y-1/2 pt-20 lg:pt-0">
        <div ref={scrollRef} className="flex gap-8 ">
          {[...projects].map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="w-[18em] h-[35em] lg:w-[55vh] lg:h-[55vh] relative "
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
                    className="text-[#eb5939] hover:text-[#b7ab98] transition-colors cursor-pointer"
                    onClick={()=>window.open(project.link, '_blank', 'noopener,noreferrer')}
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