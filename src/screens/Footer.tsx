import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
// import Magnet from "../components/Magnet";

export default function Footer() {
    const container = useRef(null);
    const year = new Date().getFullYear();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.from(container.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 90%",
                end: "top 70%",
                scrub: true,
            },
            opacity: 0,
            y: 50,
        });
    }, []);

    return (
        <footer ref={container} className="w-full bg-[#0a0a0a] text-white py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left side - Contact */}
                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#eb5939] to-[#2B2A4C] bg-clip-text text-transparent">
                            Let's Connect
                        </h3>
                        <div className="space-y-4">
                                <a
                                    href="mailto:hello@iampratt.com"
                                    className="block text-lg hover:text-[#eb5939] transition-colors"
                                >
                                    hello@iampratt.com
                                </a>
                            <div className="flex gap-6">
                                    <a
                                        href="https://github.com/iampratt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg hover:text-[#eb5939] transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/iampratt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg hover:text-[#eb5939] transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Navigation */}
                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#eb5939] to-[#2B2A4C] bg-clip-text text-transparent">
                            Navigation
                        </h3>
                        <nav className="grid grid-cols-2 gap-4">
                            
                                <a href="#intro" className="text-lg hover:text-[#eb5939] transition-colors">
                                    Home
                                </a>
                                <a href="#about" className="text-lg hover:text-[#eb5939] transition-colors">
                                    About
                                </a>
                                <a href="#projects" className="text-lg hover:text-[#eb5939] transition-colors">
                                    Projects
                                </a>
                                <a href="#wid" className="text-lg hover:text-[#eb5939] transition-colors">
                                    What I Do
                                </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <p className="text-center text-white/60">
                        © {year} iampratt. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
