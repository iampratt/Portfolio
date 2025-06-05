import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Separator } from "../components/separator";
import useStore from "../store/store";
import { useState, useRef } from "react";

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

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1)
    const container=useRef(null)
    const setIsMaskActive=useStore().setIsMaskActive

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger, SplitText);
        const text = SplitText.create('.scrollText', { type: 'chars' });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: '.scrollText',
                start: "top 70%",
                end: "top 10%",
                scrub:true,
            },
            opacity: 0.1,
            stagger: 0.1,
            ease: "none"
        });
        gsap.to('.scrollText', { opacity: 1 });
    }, [])

  return (
    <div id="wid" className="relative w-full h-[100dvh] flex flex-col justify-center bg-[#0d0d0d] ">
      <div className="font-bold text-[#b7ab98] text-[11.1px] tracking-[5.83px] leading-[21px] mb-3 lg:mb-6 px-5 lg:px-50">
        WHAT I DO
      </div>

      {skillsData.map((skill, index) => (
        <div 
          key={`skill-${index}`}
          onMouseEnter={() => {
            setSelectedProjectIndex(index)
          }}
          onMouseLeave={()=>{
              setSelectedProjectIndex(-1)
              setIsMaskActive(true)
          }} 
          className="relative text-wrapper"
        >
            <div className="relative top-0" >
              <Separator className="border-[#b8ac9926] border-[0.05rem]" />
              <div className="relative h-[3.2em] md:h-[4.1em] lg:h-[7em] flex items-center px-5 lg:px-50">
                <div ref={container}
                  className="font-semibold text-[3.9em] md:text-[4.7em] lg:text-[9em] tracking-[-5.83px] leading-[98px] text-[#b7ab98] scrollText">
                    {skill.title}
                </div>
              </div>
            </div>

            <div
              key={`skill-${index}-2`} 
              className="absolute top-0 w-full clip"
              style={{clipPath: selectedProjectIndex == index ? "inset(0 0 0)" : "inset(50% 0 50%"}}>
                <Separator className="border-[#b8ac9926]" />
                <div className="relative h-[3.2em] md:h-[4.1em] lg:h-[7em]  bg-[#eb5939]">
                    <div className="flex justify-between items-center h-full px-5 lg:px-50">
                        <div className="font-semibold text-[3.9em] md:text-[4.7em] lg:text-[9em] tracking-[-5.83px] leading-[98px] text-[#0d0d0d] mr-20">
                            {skill.title}
                        </div>
                        <div className={`${(window.innerWidth<1024) && 'hidden'} font-semibold text-[1.1em] text-[#0d0d0d] w-[20rem]`}>
                            {skill.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ))}
      <Separator className="border-[#b8ac9926] border-1" />
    </div>
  )
}

export default Wid