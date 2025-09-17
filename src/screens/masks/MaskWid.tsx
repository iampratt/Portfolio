import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Separator } from "../../components/separator";
import useStore from "../../store/store";
import { useState } from "react";

const skillsData = [
  {
    title: "FULL-STACK",
    description: "I build fast, responsive, and scalable web & mobile apps."
  },
  {
    title: "GEN AI",
    description: "I design agentic workflows and intelligent systems."
  },
  {
    title: "DEVOPS",
    description: "I containerize, automate, and deploy with CI/CD pipelines."
  },
  {
    title: "OPEN SOURCE",
    description: "I contribute to projects that help devs ship faster."
  },
  {
    title: "CLOUD",
    description: "I deploy scalable systems on AWS & Azure."
  }
];

function Wid() {

    const setIsMaskActive=useStore().setIsMaskActive
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1)

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger, SplitText);
        const text = SplitText.create('.scrollText', { type: "chars" });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: '.scrollText',
                start: "top 90%",
                end: "top 50%",
                scrub:true
            },
            opacity: 0.1,
            stagger: 0.1,
            ease: "none"
        });
        gsap.to('.scrollText', { opacity: 1 });
    }, [])

  return (
    <div className="relative w-full h-[100dvh] flex flex-col justify-center">
      <div className="font-bold text-[#b7ab98] text-[11.1px] tracking-[5.83px] leading-[21px] mb-3 xl:mb-6 px-5 xl:px-50">
        WHAT I DO
      </div>

      {skillsData.map((skill, index) => (
        <div 
          key={`skill-${index}`} 
          onMouseEnter={() => {
            setSelectedProjectIndex(index)
            setIsMaskActive(false)
          }}
          className="relative text-wrapper"
        >
            <div className="relative top-0" >
              <Separator className="border-transparent border-[0.05rem]" />
              <div className="relative h-[3.2em] lg:h-[4.1em] xl:h-[7em] flex items-center px-5 xl:px-50 overflow-hidden">
                <div 
                  className="font-semibold text-[3.9em] lg:text-[4.7em] xl:text-[9em] tracking-[-5.83px] leading-[98px] text-[#b7ab98] scrollText">
                    {skill.title}
                </div>
              </div>
            </div>

            <div 
              className="absolute top-0 w-full clip"
              style={{clipPath: selectedProjectIndex == index ? "inset(0 0 0)" : "inset(50% 0 50%"}}>
                <div className="relative h-[3.2em] lg:h-[4.1em] xl:h-[7em] bg-[#eb5939]">
                    <div className="flex justify-between items-center h-full px-5 xl:px-50 overflow-hidden">
                        <div className="font-semibold text-[3.9em] lg:text-[4.7em] xl:text-[9em] tracking-[-5.83px] leading-[98px] text-[#0d0d0d] mr-20">
                            {skill.title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ))}
      <Separator className="border-transparent border-1" />
    </div>
  )
}

export default Wid