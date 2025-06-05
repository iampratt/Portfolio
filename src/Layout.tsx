
import gsap from "gsap"
import ScrollSmoother from "gsap/ScrollSmoother"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Lenis from "lenis"
import Mgss from "./screens/Mgss"
import MaskMgss from "./screens/masks/MaskMgss"
import About from "./screens/About"
import MaskAbout from "./screens/masks/MaskAbout"
import Wid from "./screens/Wid"
import MaskWid from "./screens/masks/MaskWid"
import Projects from "./screens/Projects"
import MaskProjects from "./screens/masks/MaskProjects"
import useStore from "./store/store"
import useMousePosition from "./utils/useMousePosition"
import { useEffect, useState } from "react"

function Layout() {
    const isMaskActive=useStore().isMaskActive
    const maskSize=useStore().maskSize;
    const isMobile=useStore().isMobile
    const setIsMobile=useStore().setIsMobile
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)
    const {x, y}=useMousePosition()

    useEffect(()=>{
        if(innerWidth<768){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }

        window.addEventListener('resize', ()=>setInnerWidth(window.innerWidth))
        return ()=>window.removeEventListener('resize', ()=>setInnerWidth(window.innerWidth))
    }, [innerWidth, setIsMobile])

    useGSAP(()=>{ 
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)  
        const lenis=new Lenis({
            smoothWheel:true,
            lerp: 1,
            syncTouch: true,
            syncTouchLerp: 1,
            easing: (x)=>1 - (1 - x) * (1 - x)
        })   
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
        gsap.to('.mask',{
            maskPosition: `${x-maskSize/2}px ${y-maskSize/2}px`,
            maskSize: isMaskActive?`${maskSize}px`:'0px',
            duration: 1.2,
            ease: "power4.out",
        })
    }, [x, y]);

    const navLinks = [
        { id: "about", label: "ABOUT" },
        { id: "projects", label: "PROJECTS" },
        { id: "wid", label: "WHAT I DO" },
    ];

    const socialIcons = [
        { id: 1, src: "/icon-3.svg", alt: "Social media icon" },
        { id: 2, src: "/icon-1.svg", alt: "Social media icon" },
        { id: 3, src: "/icon-4.svg", alt: "Social media icon" },
        { id: 4, src: "/icon-2.svg", alt: "Social media icon" },
    ];


  return (
    <div className="relative w-full ">
        <div className={`absolute w-full ${!isMaskActive && 'z-10'}`}>
            <div>
                <Mgss />
                <About />
                <Wid />
                <Projects />
                <div className="h-screen"/>
            </div>
            <div className="fixed">
                {/* Logo */}
                <img
                    className="fixed w-10 h-10 top-[1.5%] lg:top-[5%] left-[5%] lg:left-[3%]"
                    alt="Icon"
                    src="/icon.svg"
                />

                {/* Navigation */}
                <nav className={`${isMobile && 'hidden'} fixed top-[1.5%] lg:top-[5%] right-[5%] lg:right-[3%]`}>
                    <ul className="flex flex-col gap-2.5">
                        {navLinks.map((link) => (
                            <li key={link.id} className="relative">
                                <div onClick={()=>document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'})} className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[13.3px] text-[#b7ab98]">
                                    {link.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social media links */}
                <div className={`${isMobile && 'hidden'} fixed bottom-[1.5%] lg:bottom-[5%] left-[5%] lg:left-[3%] flex flex-col gap-[30px] p-2`}>
                    {socialIcons.map((icon) => (
                        <img
                            key={icon.id}
                            className="w-5 h-5 mix-blend-difference"
                            alt={icon.alt}
                            src={icon.src}
                        />
                    ))}
                </div>

                {/* Sound toggle */}
                <div className={`${isMobile && 'hidden'} fixed w-[85px] h-[19px] bottom-[1.5%] lg:bottom-[5%] right-[5%] lg:right-[3%] -rotate-90`}>
                    <div className="absolute h-[18px] top-0 left-1.5 [font-family:'Inter',Helvetica] font-bold text-[#4d4d4d] text-[13.2px] leading-[17.3px] whitespace-nowrap">
                        SOUND
                    </div>
                    <div className="flex absolute top-px left-[59px]">
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#b7ab98] text-[13.2px] leading-[17.3px] whitespace-nowrap">
                        ON
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#b7ab98] text-[13.2px] leading-[17.3px] whitespace-nowrap ml-2">
                        OFF
                        </div>
                    </div>
                </div>

                {/* Hamburger */}
                {isMobile && 
                    <div>
                        {/* Hamburger Icon */}
                        <button
                            className="z-50 fixed top-5 right-5 w-10 h-10 flex items-center justify-center"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <g>
                                    <rect
                                        x="6"
                                        y="9"
                                        width="20"
                                        height="2"
                                        rx="1"
                                        fill="#b7ab98"
                                        style={{
                                            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                                            transform: open ? "translateY(7px) rotate(45deg)" : "none"
                                        }}
                                    />
                                    <rect
                                        x="6"
                                        y="15"
                                        width="20"
                                        height="2"
                                        rx="1"
                                        fill="#b7ab98"
                                        style={{
                                            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                                            opacity: open ? 0 : 1
                                        }}
                                    />
                                    <rect
                                        x="6"
                                        y="21"
                                        width="20"
                                        height="2"
                                        rx="1"
                                        fill="#b7ab98"
                                        style={{
                                            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                                            transform: open ? "translateY(-7px) rotate(-45deg)" : "none"
                                        }}
                                    />
                                </g>
                            </svg>
                        </button>
                        {/* Overlay Menu */}
                        {open && (
                            <div className="fixed inset-0 z-40 bg-[#0d0d0d]/90 flex flex-col items-center justify-center transition-all">
                                <nav>
                                    <ul className="flex flex-col gap-8 items-center">
                                        {navLinks.map((link) => (
                                            <li key={link.id}>
                                                <button
                                                    className="text-[#b7ab98] text-2xl font-bold tracking-widest"
                                                    onClick={() => {
                                                        setOpen(false)
                                                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                                                    }}
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="flex gap-8 mt-12">
                                    {socialIcons.map((icon) => (
                                        <img
                                            key={icon.id}
                                            className="w-7 h-7 mix-blend-difference"
                                            alt={icon.alt}
                                            src={icon.src}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>}
            </div>
        </div>

        
        <div className={`${isMobile?'hidden':'mask'} absolute w-full`}>
            <div>
                <MaskMgss />
                <MaskAbout />
                <MaskWid />
                <MaskProjects />
                <div className="h-screen">hello</div>
            </div>
            <div className="fixed">
                {/* Logo */}
                <img
                    className={`fixed w-10 h-10 top-[1.5%] lg:top-[5%] left-[5%] lg:left-[3%] ${isMaskActive && 'contrast-200 invert grayscale'}`}
                    alt="Icon"
                    src="/icon.svg"
                />

                {/* Navigation */}
                <nav className={`${isMobile && 'hidden'} fixed top-[1.5%] lg:top-[5%] right-[5%] lg:right-[3%]`}>
                    <ul className="flex flex-col gap-2.5">
                        {navLinks.map((link) => (
                        <li key={link.id} className="relative">
                            <div onClick={()=>document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'})} className={`[font-family:'Nunito_Sans',Helvetica] font-bold text-[13.3px] text-[#0d0d0d] cursor-pointer`}>
                                {link.label}
                            </div>
                        </li>
                        ))}
                    </ul>
                </nav>

                {/* Social media links */}
                <div className={`${isMobile && 'hidden'} fixed bottom-[1.5%] lg:bottom-[5%] left-[5%] lg:left-[3%] flex flex-col gap-[30px] p-2`}>
                    {socialIcons.map((icon) => (
                        <img
                            key={icon.id}
                            className={`w-5 h-5 ${isMaskActive && 'contrast-200 invert grayscale'}`}
                            alt={icon.alt}
                            src={icon.src}
                        />
                    ))}
                </div>

                {/* Sound toggle */}
                <div className={`${isMobile && 'hidden'} fixed w-[85px] h-[19px] bottom-[1.5%] lg:bottom-[5%] right-[5%] lg:right-[3%] -rotate-90`}>
                    <div className="absolute h-[18px] top-0 left-1.5 [font-family:'Inter',Helvetica] font-bold text-[#4d4d4d] text-[13.2px] leading-[17.3px] whitespace-nowrap">
                        SOUND
                    </div>
                    <div className="flex absolute top-px left-[59px]">
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#b7ab98] text-[13.2px] leading-[17.3px] whitespace-nowrap">
                        ON
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#b7ab98] text-[13.2px] leading-[17.3px] whitespace-nowrap ml-2">
                        OFF
                        </div>
                    </div>
                </div>

                {/* Hamburger */}
                {isMobile && 
                    <div>
                        {/* Hamburger Icon */}
                        <button
                            className="z-50 fixed top-5 right-5 w-10 h-10 flex items-center justify-center"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <g>
                                    <rect
                                        x="6"
                                        y="9"
                                        width="20"
                                        height="2"
                                        rx="1"
                                        fill="#b7ab98"
                                        style={{
                                            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                                            transform: open ? "translateY(7px) rotate(45deg)" : "none"
                                        }}
                                    />
                                    <rect
                                        x="6"
                                        y="15"
                                        width="20"
                                        height="2"
                                        rx="1"
                                        fill="#b7ab98"
                                        style={{
                                            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                                            opacity: open ? 0 : 1
                                        }}
                                    />
                                    <rect
                                        x="6"
                                        y="21"
                                        width="20"
                                        height="2"
                                        rx="1"
                                        fill="#b7ab98"
                                        style={{
                                            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                                            transform: open ? "translateY(-7px) rotate(-45deg)" : "none"
                                        }}
                                    />
                                </g>
                            </svg>
                        </button>
                        {/* Overlay Menu */}
                        {open && (
                            <div className="fixed inset-0 z-40 bg-[#0d0d0d]/90 flex flex-col items-center justify-center transition-all">
                                <nav>
                                    <ul className="flex flex-col gap-8 items-center">
                                        {navLinks.map((link) => (
                                            <li key={link.id}>
                                                <button
                                                    className="text-[#b7ab98] text-2xl font-bold tracking-widest"
                                                    onClick={() => {
                                                        setOpen(false)
                                                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                                                    }}
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="flex gap-8 mt-12">
                                    {socialIcons.map((icon) => (
                                        <img
                                            key={icon.id}
                                            className="w-7 h-7 mix-blend-difference"
                                            alt={icon.alt}
                                            src={icon.src}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>}
            </div>
        </div>
    </div>
  )
}

export default Layout