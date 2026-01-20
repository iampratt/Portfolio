import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, Suspense } from "react";
import { Face } from "../components/3d";

function LoadingSpinner() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#eb5939]" />
        </div>
    );
}

function About() {
    const container = useRef(null)
    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add("(min-width: 1024px)", () => {
            gsap.registerPlugin(ScrollTrigger, SplitText);
            const text = SplitText.create(container.current, { type: "chars" });
            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: true
                },
                opacity: 0.05,
                stagger: 0.2,
                ease: "none"
            });
            gsap.to(container.current, { opacity: 1 });
        })
    }, [])

    return (
        <div id='about' className='relative w-full h-[100dvh] bg-[#0d0d0d] flex justify-center items-start pt-[33vh]'>
            <div className="absolute h-screen w-full opacity-20">
                <Suspense fallback={<LoadingSpinner />}>
                    <Face />
                </Suspense>
            </div>
            <div className='flex flex-col gap-6 lg:gap-10 justify-center items-start px-5 lg:px-50 text-[#b7ab98] max-w-[100vw] overflow-hidden'>
                <div className='font-bold text-[10px] lg:text-[13.9px] tracking-[4px] lg:tracking-[6.67px] leading-[17.3px]'>ABOUT ME</div>
                <div ref={container} className='text-[2rem] md:text-[3em] lg:text-[65px] tracking-[-1px] lg:tracking-[-2.67px] leading-tight lg:leading-[54.7px] font-bold'>
                    I'm a <span className="text-[#eb5939]">full-stack developer</span> who blends clean code with purposeful design to build fast, scalable, and meaningful digital products.
                </div>
            </div>
        </div>
    )
}

export default About