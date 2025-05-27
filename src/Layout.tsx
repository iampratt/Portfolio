
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Mgss from "./screens/Mgss"
import MaskMgss from "./screens/masks/maskMgss"
import  useStore  from "./store/store"
import useMousePosition from "./utils/useMousePosition"


function Layout() {
    const maskSize = useStore().maskSize;
    const {x, y}=useMousePosition()

    useGSAP(()=>{        
        gsap.to('.mask',{
            maskPosition: `${x-maskSize/2}px ${y-maskSize/2}px`,
            maskSize: `${maskSize}px`,
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
        <div className="absolute h-screen w-full">
        <div>
            <Mgss />
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
            <div className="fixed top-[622px] left-12 flex flex-col gap-[30px] p-2">
            {socialIcons.map((icon) => (
                <img
                key={icon.id}
                className="w-5 h-5"
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

        
        <div className="mask absolute h-screen w-full">
        <div>
            <MaskMgss />
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
            <div className="fixed top-[622px] left-12 flex flex-col gap-[30px] p-2">
            {socialIcons.map((icon) => (
                <img
                key={icon.id}
                className="w-5 h-5"
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