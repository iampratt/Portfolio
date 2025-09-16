import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button } from '../components/button';
import useStore from '../store/store';

const projects = [
  {
    title: "HireMind",
    description: "Automates job discovery and resume tailoring using GPT-4 and LangGraph. Scales parallel job applications and indexes historical interactions for efficiency.",
    tech: ["React.js", "Node.js", "LangGraph", "GPT-4", "ChromaDB", "BeautifulSoup"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://hiremindai.vercel.app/"
  },
  {
    title: "UniWay",
    description: "3-role cab management app for colleges with RAG pipeline and vectorized log analysis. Serves 500+ users and optimizes commute times.",
    tech: ["React Native", "Node.js", "GPT-4", "LangChain", "FAISS"],
    image: "https://github.com/iampratt/UniWay/blob/master/assets/logo.png?raw=true",
    link: "https://github.com/iampratt/UniWay"
  },
  {
    title: "Crave",
    description: "Production-grade MERN app for hostel food ordering. Integrates Twilio SMS updates and JWT-secured dashboards for 1000+ students.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Twilio API"],
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://cravemuj.vercel.app/"
  },
  {
    title: "Pixilator",
    description: "Full-stack app for DALL·E image generation with GPT-3.5 prompt refinement, Redis caching, and CDN delivery. Supports 100+ concurrent users.",
    tech: ["React.js", "Node.js", "Redis", "Cloudinary", "DALL·E", "GPT-3.5"],
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/iampratt/Pixilator"
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
              className="w-[18em] h-[35em] lg:w-[600px] lg:h-[600px] relative "
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