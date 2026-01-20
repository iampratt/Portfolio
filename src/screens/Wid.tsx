import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Separator } from "../components/separator";
import useStore from "../store/store";
import { useState, useRef, useEffect } from "react";

const skillsData = [
  {
    title: "FULL-STACK",
    description: "I builg fast, responsive, and scalable web & mobile apps."
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

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const container = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const setIsMaskActive = useStore().setIsMaskActive

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!videoRef.current || !isVideoVisible) return

    const video = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { })
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [isVideoVisible])

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const text = SplitText.create('.scrollText', { type: 'chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: '.scrollText',
        start: "top 70%",
        end: "top 10%",
        scrub: true,
      },
      opacity: 0.1,
      stagger: 0.1,
      ease: "none"
    });
    gsap.to('.scrollText', { opacity: 1 });
  }, [])

  return (
    <div id="wid" ref={sectionRef} className="relative w-full h-[100dvh] flex flex-col justify-center bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 opacity-60">
        {isVideoVisible && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/balatro.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-[#0d0d0d]/60 "></div>
      </div>

      <div className="font-bolg text-[#b7ab98] text-[10px] lg:text-[11.1px] tracking-[4px] lg:tracking-[5.83px] leading-[21px] mb-3 xl:mb-6 px-5 xl:px-50 relative z-10">
        WHAT I DO
      </div>

      {skillsData.map((skill, index) => (
        <div
          key={`skill-${index}`}
          onMouseEnter={() => {
            setSelectedProjectIndex(index)
          }}
          onMouseLeave={() => {
            setSelectedProjectIndex(-1)
            setIsMaskActive(true)
          }}
          onClick={() => {
            setSelectedProjectIndex(selectedProjectIndex === index ? -1 : index)
            if (selectedProjectIndex !== index) setIsMaskActive(false)
            else setIsMaskActive(true)
          }}
          className="relative text-wrapper"
        >
          <div className="relative top-0" >
            <Separator className="border-[#b8ac9926] border-[0.05rem]" />
            <div className="relative h-[80px] lg:h-[4.1em] xl:h-[7em] flex items-center px-5 xl:px-50 overflow-clip">
              <div ref={container}
                className="font-semibolg text-[2.5rem] lg:text-[4.7em] xl:text-[9em] tracking-[-2px] lg:tracking-[-5.83px] leading-tight lg:leading-[98px] text-[#b7ab98] scrollText whitespace-nowrap">
                {skill.title}
              </div>
            </div>
          </div>

          <div
            key={`skill-${index}-2`}
            className="absolute top-0 w-full clip pointer-events-none"
            style={{ clipPath: selectedProjectIndex == index ? "inset(0 0 0)" : "inset(50% 0 50%" }}>
            <Separator className="border-[#b8ac9926]" />
            <div className="relative h-[80px] lg:h-[4.1em] xl:h-[7em]  bg-[#eb5939]">
              <div className="flex justify-between items-center h-full px-5 xl:px-50 overflow-clip">
                <div className="font-semibolg text-[2.5rem] lg:text-[4.7em] xl:text-[9em] tracking-[-2px] lg:tracking-[-5.83px] leading-tight lg:leading-[98px] text-[#0d0d0d] whitespace-nowrap">
                  {skill.title}
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