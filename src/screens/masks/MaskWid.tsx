import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Separator } from "../../components/separator";
import useStore from "../../store/store";
import { useRef, useState } from "react";

const skillsData = [
  {
    title: "3D",
    description: 'I can produce anything that my 16" laptop can render',
  },
  {
    title: "VISUAL",
    description: [
      "I search the internet for visual references and then",
      "combine them to create my own work.",
    ],
  },
  {
    title: "MOTION",
    description: [
      "I use fancy motion that makes my design more",
      "interesting that it actually is",
    ],
  },
  {
    title: "PRODUCT",
    description: [
      "I utilize common design best practices, test, and re-",
      "iterate until it works (hopefully).",
    ],
  },
  {
    title: "TUTORIAL",
    description: [
      "I thought I'd make millions of $ from Youtube but I",
      "didn't",
    ],
  },
];

function Wid() {

    const setIsMaskActive=useStore().setIsMaskActive
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1)
    const container=useRef(null)

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
            opacity: 0.05,
            stagger: 0.2,
            ease: "none"
        });
        gsap.to('.scrollText', { opacity: 1 });
    }, [])

  return (
    <div className="relative w-full h-screen flex flex-col justify-center">
      <div className="font-bold text-[#b7ab98] text-[11.1px] tracking-[5.83px] leading-[21px] mb-6 px-50">
        WHAT I DO
      </div>

      {skillsData.map((skill, index) => (
        <div 
          key={`skill-${index}`} 
          onMouseEnter={() => {
            setSelectedProjectIndex(index)
            setIsMaskActive(false)
          }}
          onMouseLeave={()=>{
              setSelectedProjectIndex(-1)
              setIsMaskActive(true)
          }} 
          className="relative text-wrapper"
        >
            <div className="relative top-0" >
              <Separator className="border-transparent border-[0.05rem]" />
              <div className="relative h-[7em] flex items-center px-50">
                <div 
                  className="font-semibold text-[9em] tracking-[-5.83px] leading-[98px] text-[#b7ab98] scrollText">
                    {skill.title}
                </div>
              </div>
            </div>

            <div 
              className="absolute top-0 w-full clip"
              style={{clipPath: selectedProjectIndex == index ? "inset(0 0 0)" : "inset(50% 0 50%"}}>
                <div className="relative h-[7em]  bg-[#eb5939]">
                    <div className="flex justify-between items-center h-full px-50">
                        <div className="font-semibold text-[9em] tracking-[-5.83px] leading-[98px] text-[#0d0d0d] mr-20">
                            {skill.title}
                        </div>
                        <div className=" font-semibold text-[1.1em] text-[#0d0d0d] w-[25rem]">
                            {skill.description}
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