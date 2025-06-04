import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Face from "../components/3d/face";

function About() {
    const container=useRef(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger, SplitText);
        const text = SplitText.create(container.current, { type: "chars" });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 90%",
                end: "top 50%",
                scrub:true
            },
            opacity: 0.05,
            stagger: 0.2,
            ease: "none"
        });
        gsap.to(container.current, { opacity: 1 });
    }, [])

  return (
    <div id='about' className='relative w-full h-screen bg-[#0d0d0d] flex justify-center items-center'>
        <div className="absolute h-screen w-full opacity-20">
            <Face />
        </div>
        <div className='flex flex-col gap-10 justify-center items-start px-50 text-[#b7ab98]'>
            <div className='font-bold text-[13.9px] tracking-[6.67px] leading-[17.3px]'>ABOUT ME</div>
            <div ref={container} className='text-[65px] tracking-[-2.67px] leading-[54.7px] font-bold'>
                I'm a <span className="text-[#eb5939]">selectively skilled</span> prodcut designer with strong focus on producing high quality & impactful disgital experience.
            </div>
        </div>
    </div>
  )
}

export default About