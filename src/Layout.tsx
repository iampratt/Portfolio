
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
import Contact from "./screens/Contact"
import MaskContact from "./screens/masks/MaskContact"
import Navbar from "./components/Navbar"
import useStore from "./store/store"
import useMousePosition from "./utils/useMousePosition"
import { useAudio } from "./utils/useAudio"
import Magnet from "./components/Magnet"
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa6';
import { useEffect, useState } from "react"
import MobileNotice from "./components/MobileNotice"

function Layout() {
    const isMaskActive = useStore().isMaskActive
    const maskSize = useStore().maskSize;
    const isMobile = useStore().isMobile
    const setIsMobile = useStore().setIsMobile
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    const { x, y } = useMousePosition()
    const [isPlaying, setIsPlaying] = useState(true)

    useAudio({
        src: "/bgMusic.mp3",
        volume: 0.5,
        loop: true,
        isPlaying,
    });

    useEffect(() => {
        if (innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

        window.addEventListener('resize', () => setInnerWidth(window.innerWidth))
        return () => window.removeEventListener('resize', () => setInnerWidth(window.innerWidth))
    }, [innerWidth, setIsMobile])

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 1,
            syncTouch: true,
            syncTouchLerp: 0.1,
            easing: (x) => 1 - (1 - x) * (1 - x)
        })
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
        gsap.to('.mask', {
            maskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
            maskSize: isMaskActive ? `${maskSize}px` : '0px',
            duration: 0.8,
            ease: "power4.out",
            overwrite: 'auto',
        })
    }, [x, y]);

    const socialIcons = [
        {
            id: 1,
            src: FaLinkedinIn,
            alt: "LinkedIn",
            link: "https://www.linkedin.com/in/iampratt/"
        },
        {
            id: 2,
            src: FaGithub,
            alt: "GitHub",
            link: "https://github.com/iampratt"
        },
        {
            id: 3,
            src: FaTwitter,
            alt: "Twitter",
            link: "https://x.com/iampratt__"
        },
        // { 
        //     id: 4, 
        //     src: FaInstagram, 
        //     alt: "Instagram", 
        //     link: "https://www.instagram.com/_pratyushsrivastava/" 
        // },
    ];

    return (
        <div className="relative w-[100dvw] ">
            <div className={`absolute w-full ${!isMaskActive && 'z-10'}`}>
                <div>
                    <Mgss />
                    <About />
                    <Wid />
                    <Projects />
                    <Contact />
                    <MobileNotice />
                </div>
                <div className="fixed">
                    {/* Logo */}
                    <img
                        className="fixed w-10 h-10 top-[1.5%] lg:top-[5%] left-[5%] lg:left-[3%]"
                        alt="Icon"
                        src="/icon.svg"
                    />

                    <Navbar />

                    {/* Social media links */}
                    <div className={`fixed bottom-[1.5%] lg:bottom-[5%] left-[5%] lg:left-[3%] flex items-center justify-center z-20 transition-all ${isMobile ? 'flex-row gap-6 bg-[#1a1a1a]/80 backdrop-blur-md border border-[#b7ab98]/20 rounded-full px-6 py-3 shadow-lg' : 'flex-col gap-[30px] p-2'}`}>
                        {socialIcons.map((icon) => (
                            <Magnet key={icon.id} padding={20} disabled={isMobile} magnetStrength={1}>
                                <icon.src
                                    color="#B7AB98"
                                    className={`mix-blend-difference cursor-pointer active:scale-90 transition-transform ${isMobile ? 'w-6 h-6' : 'w-5 h-5'}`}
                                    onClick={() => window.open(icon.link, '_blank', 'noopener,noreferrer')}
                                />
                            </Magnet>
                        ))}
                    </div>

                    {/* Sound toggle */}
                    <div className={`${isMobile && 'hidden'} fixed bottom-[1.5%] lg:bottom-[5%] right-[10%] lg:right-[6%] -rotate-90`}>
                        <div className="absolute h-[18px] top-0 left-1.5 [font-family:'Inter',Helvetica] font-bold text-[#4d4d4d] text-[13.2px] leading-[17.3px] whitespace-nowrap">
                            SOUND
                        </div>
                        <div className="flex absolute top-px left-[59px] cursor-pointer">
                            <div onClick={() => setIsPlaying(!isPlaying)} className={`${!isPlaying ? 'hidden' : ''} [font-family:'Inter',Helvetica] font-bold text-[#b7ab98] text-[13.2px] leading-[17.3px] whitespace-nowrap ml-2`}>
                                ON
                            </div>
                            <div onClick={() => setIsPlaying(!isPlaying)} className={`${isPlaying ? 'hidden' : ''} [font-family:'Inter',Helvetica] font-bold text-[#b7ab98] text-[13.2px] leading-[17.3px] whitespace-nowrap ml-2`}>
                                OFF
                            </div>
                        </div>
                    </div>

                    {/* Hamburger logic handled in Navbar */}
                </div>
            </div>


            <div className={`${isMobile ? 'hidden' : 'mask'} absolute w-full`}>
                <div>
                    <MaskMgss />
                    <MaskAbout />
                    <MaskWid />
                    <MaskProjects />
                    <MaskContact />
                </div>
                <div className="fixed">
                    {/* Logo */}
                    <img
                        className={`fixed w-10 h-10 top-[1.5%] lg:top-[5%] left-[5%] lg:left-[3%] ${isMaskActive && 'contrast-200 invert grayscale'}`}
                        alt="Icon"
                        src="/icon.svg"
                    />

                    <Navbar />

                    {/* Social media links */}
                    <div className={`fixed bottom-[1.5%] lg:bottom-[5%] left-[5%] lg:left-[3%] flex items-center justify-center z-20 transition-all ${isMobile ? 'flex-row gap-6 bg-[#1a1a1a]/80 backdrop-blur-md border border-[#b7ab98]/20 rounded-full px-6 py-3 shadow-lg' : 'flex-col gap-[30px] p-2'}`}>
                        {socialIcons.map((icon) => (
                            <Magnet key={icon.id} padding={20} disabled={isMobile} magnetStrength={1}>
                                <icon.src
                                    className={`mix-blend-difference cursor-pointer active:scale-90 transition-transform ${isMobile ? 'w-6 h-6' : 'w-5 h-5'}`}
                                    onClick={() => window.open(icon.link, '_blank', 'noopener,noreferrer')}
                                />
                            </Magnet>
                        ))}
                    </div>

                    {/* Sound toggle */}
                    <div className={`${isMobile && 'hidden'} fixed bottom-[1.5%] lg:bottom-[5%] right-[10%] lg:right-[6%] -rotate-90`}>
                        <div className="absolute h-[18px] top-0 left-1.5 [font-family:'Inter',Helvetica] font-bold text-[#4d4d4d] text-[13.2px] leading-[17.3px] whitespace-nowrap">
                            SOUND
                        </div>
                        <div className="flex absolute top-px left-[59px]">
                            <div onClick={() => setIsPlaying(!isPlaying)} className={`${!isPlaying ? 'hidden' : ''} [font-family:'Inter',Helvetica] font-bold text-[#0d0d0d] cursor-pointer text-[13.2px] leading-[17.3px] whitespace-nowrap ml-2`}>
                                ON
                            </div>
                            <div onClick={() => setIsPlaying(!isPlaying)} className={`${isPlaying ? 'hidden' : ''} [font-family:'Inter',Helvetica] font-bold text-[#0d0d0d] cursor-pointer text-[13.2px] leading-[17.3px] whitespace-nowrap ml-2`}>
                                OFF
                            </div>
                        </div>
                    </div>

                    {/* Hamburger removed from mask layer */}
                </div>
            </div>
        </div>
    )
}

export default Layout
