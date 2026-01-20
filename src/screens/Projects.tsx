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
  const setIsMaskActive = useStore().setIsMaskActive

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (scrollRef.current && containerRef.current) {
        gsap.to(scrollRef.current, {
          x: -(scrollRef.current.scrollWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + scrollRef.current!.scrollWidth,
            invalidateOnRefresh: true,
          }
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      id="projects"
      onMouseLeave={() => {
        setIsMaskActive(true)
      }}
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0d0d0d] overflow-x-hidden">
      <div className="absolute top-10 lg:top-20 px-5 lg:px-50 z-10">
        <h2 className="font-bold text-[#b7ab98] text-[20px] lg:text-[2em] tracking-[4px] lg:tracking-[6.67px] leading-[1em] lg:leading-[17.3px]">
          SELECTED WORKS
        </h2>
      </div>

      <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4 z-20 opacity-80 pointer-events-none">
        <span className="text-[10px] tracking-[0.2em] font-bold text-[#b7ab98] uppercase mb-2">
          Scroll Down
        </span>
        <div className="relative w-[30px] h-[30px] perspective-[35vh]">
          {[0, 1, 2, 3].map((i) => (
            <svg
              key={i}
              viewBox="0 0 8 4"
              className="absolute left-1/2 w-full fill-current text-[#b7ab98] animate-scroll-3d opacity-0"
              style={{
                animationDelay: `${i * 0.5}s`,
                top: '50%',
                transform: 'translateX(-50%)' // Initial mostly handled by keyframes but needed for layout
              }}
            >
              <path d="M 0 0 L 0 2 L 4 4 L 8 2 L 8 0 L 4 2 Z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen w-full lg:block lg:min-h-0 lg:h-screen lg:py-0 pt-32 pb-10">
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2">
          <div ref={scrollRef} className="flex flex-col lg:flex-row gap-8 lg:pl-0">
            {[...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="w-[90vw] h-[500px] lg:w-[60vh] lg:h-[60vh] lg:min-h-[500px] lg:min-w-[500px] relative flex-shrink-0 mx-auto lg:mx-0"
              >
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-lg transform transition-transform group-hover:scale-[0.98] overflow-hidden flex flex-col">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[45%] object-cover opacity-80"
                  />
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[#eb5939] font-bold text-2xl mb-2">{project.title}</h3>
                      <p className="text-[#b7ab98] text-sm line-clamp-3">{project.description}</p>
                    </div>
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
                      className="text-[#eb5939] hover:text-[#b7ab98] transition-colors cursor-pointer w-fit pl-0 hover:bg-transparent"
                      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
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
    </div>
  );
}

export default Projects;