
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


function Layout() {
    const isMaskActive=useStore().isMaskActive
    const maskSize = useStore().maskSize;
    const {x, y}=useMousePosition()

    useGSAP(()=>{ 
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)  
        const lenis=new Lenis({
            smoothWheel:true
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
        { id: "work", label: "WORK" },
        { id: "contact", label: "CONTACT" },
    ];

    const socialIcons = [
        { id: 1, src: "/icon-3.svg", alt: "Social media icon" },
        { id: 2, src: "/icon-1.svg", alt: "Social media icon" },
        { id: 3, src: "/icon-4.svg", alt: "Social media icon" },
        { id: 4, src: "/icon-2.svg", alt: "Social media icon" },
    ];


  return (
    <div className="relative w-full">
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
                    className="fixed w-10 h-10 top-[63px] left-[58px]"
                    alt="Icon"
                    src="/icon.svg"
                />

                {/* Navigation */}
                <nav className="fixed top-[59px] right-[59px]">
                    <ul className="flex flex-col gap-2.5">
                        {navLinks.map((link) => (
                            <li key={link.id} className="relative">
                                <div className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[13.3px] text-[#b7ab98]">
                                    {link.label}
                                </div>
                                <div className="absolute top-0 left-0 [font-family:'Nunito_Sans',Helvetica] font-bold text-[13.3px] text-[#b8ac9980]">
                                    {link.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social media links */}
                <div className="fixed bottom-[5rem] left-12 flex flex-col gap-[30px] p-2">
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
                <div className="fixed w-[85px] h-[19px] top-[754px] right-[21px] -rotate-90">
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
            </div>
        </div>

        
        <div className='mask absolute w-full'>
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
                    className={`fixed w-10 h-10 top-[63px] left-[58px] ${isMaskActive && 'contrast-200 invert grayscale'}`}
                    alt="Icon"
                    src="/icon.svg"
                />

                {/* Navigation */}
                <nav className="fixed top-[59px] right-[59px]">
                    <ul className="flex flex-col gap-2.5">
                        {navLinks.map((link) => (
                        <li key={link.id} className="relative">
                            <div onClick={()=>document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'})} className={`[font-family:'Nunito_Sans',Helvetica] font-bold text-[13.3px] text-[#b7ab98] hover:text-[#0d0d0d] ${isMaskActive && 'text-[#0d0d0d]'} cursor-pointer`}>
                                {link.label}
                            </div>
                        </li>
                        ))}
                    </ul>
                </nav>

                {/* Social media links */}
                <div className="fixed bottom-[5rem] left-12 flex flex-col gap-[30px] p-2">
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
                <div className="fixed w-[85px] h-[19px] top-[754px] right-[21px] -rotate-90">
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
            </div>
        </div>
    </div>
  )
}

export default Layout