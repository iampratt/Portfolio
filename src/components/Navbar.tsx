import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useStore from "../store/store";
import Hamburger from "./hamburger";
import Magnet from "./Magnet";
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa6';

const navLinks = [
    { id: "mgss", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "wid", label: "WHAT I DO" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" }
];

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
    }
];

const Navbar = () => {
    const isMobile = useStore((state) => state.isMobile);
    const setIsMaskActive = useStore((state) => state.setIsMaskActive);
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>(null);

    useGSAP(() => {
        if (isMobile) {
            tl.current = gsap.timeline({ paused: true })
                .to(menuRef.current, {
                    clipPath: "circle(150% at 95% 5%)",
                    duration: 0.8,
                    ease: "power4.inOut"
                })
                .from(".mobile-nav-item", {
                    y: 50,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power3.out"
                }, "-=0.4")
                .from(".mobile-social-item", {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power3.out"
                }, "-=0.3");
        }
    }, [isMobile]);

    useGSAP(() => {
        if (open) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [open]);

    const handleLinkClick = (id: string) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Desktop Navigation */}
            {!isMobile && (
                <nav onMouseEnter={() => setIsMaskActive(false)}
                    onMouseLeave={() => setIsMaskActive(true)}
                    className="fixed top-[5%] right-[3%] z-50">
                    <ul className="flex flex-row items-center gap-6 bg-[#1a1a1a]/80 backdrop-blur-md border border-[#b7ab98]/20 rounded-full px-8 py-4 shadow-lg">
                        {navLinks.map((link) => (
                            <li key={link.id} className="relative group">
                                <Magnet padding={15} disabled={false} magnetStrength={3}>
                                    <div
                                        onClick={() => handleLinkClick(link.id)}
                                        className="relative cursor-pointer px-2"
                                    >
                                        <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[13px] text-[#b7ab98]/80 group-hover:text-[#eb5939] transition-colors duration-300">
                                            {link.label}
                                        </span>
                                    </div>
                                </Magnet>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Navbar;
