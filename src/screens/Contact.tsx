import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Magnet from '../components/Magnet';
import { FaPaperPlane, FaPhone, FaEnvelope } from 'react-icons/fa6';
import useStore from '../store/store';

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const isMobile = useStore((state) => state.isMobile);
    const setIsMaskActive = useStore((state) => state.setIsMaskActive);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom bottom",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".contact-text", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        })
            .from(".glass-form", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.4");

    }, { scope: containerRef });

    return (
        <section
            id="contact"
            ref={containerRef}
            onMouseLeave={() => setIsMaskActive(false)}
            onMouseEnter={() => setIsMaskActive(true)}
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 lg:py-20 px-4 lg:px-20 overflow-hidden"
        >

            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#eb5939]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#b7ab98]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Contact Info Side */}
                <div className="flex flex-col gap-8 lg:gap-12">
                    <div className="flex flex-col gap-4">
                        <h2 className="contact-text [font-family:'Nunito_Sans',Helvetica] font-bold text-[#b7ab98] text-sm tracking-[0.2em] uppercase">
                            Get in Touch
                        </h2>
                        <h1 className="contact-text [font-family:'Inter',Helvetica] font-bold text-4xl lg:text-7xl text-[#e6e6e6] leading-tight">
                            Let's Work <br />
                            <span className="text-[#eb5939]">Together.</span>
                        </h1>
                    </div>

                    <p className="contact-text [font-family:'Nunito_Sans',Helvetica] text-[#b7ab98] text-lg lg:text-xl max-w-md leading-relaxed">
                        Have a project in mind or just want to say hello? I'm always open to discussing new ideas and opportunities.
                    </p>

                    <div className="contact-text flex flex-col gap-6 mt-4">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('mailto:pratyush0705@gmail.com')}>
                            <div className="p-4 rounded-full bg-[#1a1a1a] border border-[#333] group-hover:border-[#eb5939] transition-colors">
                                <FaEnvelope className="text-[#b7ab98] group-hover:text-[#eb5939] w-5 h-5 transition-colors" />
                            </div>
                            <div>
                                <p className="text-[#666] text-xs uppercase tracking-wider mb-1 font-bold">Email Me</p>
                                <p className="text-[#e6e6e6] text-lg font-medium">pratyush0705@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('tel:+919336105078')}>
                            <div className="p-4 rounded-full bg-[#1a1a1a] border border-[#333] group-hover:border-[#eb5939] transition-colors">
                                <FaPhone className="text-[#b7ab98] group-hover:text-[#eb5939] w-5 h-5 transition-colors" />
                            </div>
                            <div>
                                <p className="text-[#666] text-xs uppercase tracking-wider mb-1 font-bold">Call Me</p>
                                <p className="text-[#e6e6e6] text-lg font-medium">+91 93361 05078</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glass Form Side */}
                <div className="glass-form relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/5 to-[#ffffff]/0 rounded-3xl blur-xl" />

                    <form
                        ref={formRef}
                        className="relative bg-[#0d0d0d]/40 backdrop-blur-xl border border-[#ffffff]/10 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col gap-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[#666] text-xs font-bold uppercase tracking-wider ml-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#1a1a1a]/50 border border-[#333] focus:border-[#eb5939] rounded-xl px-5 py-4 text-[#e6e6e6] placeholder:text-[#4d4d4d] outline-none transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[#666] text-xs font-bold uppercase tracking-wider ml-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-[#1a1a1a]/50 border border-[#333] focus:border-[#eb5939] rounded-xl px-5 py-4 text-[#e6e6e6] placeholder:text-[#4d4d4d] outline-none transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#666] text-xs font-bold uppercase tracking-wider ml-1">Subject</label>
                            <input
                                type="text"
                                placeholder="Project Discussion"
                                className="w-full bg-[#1a1a1a]/50 border border-[#333] focus:border-[#eb5939] rounded-xl px-5 py-4 text-[#e6e6e6] placeholder:text-[#4d4d4d] outline-none transition-all duration-300"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#666] text-xs font-bold uppercase tracking-wider ml-1">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-[#1a1a1a]/50 border border-[#333] focus:border-[#eb5939] rounded-xl px-5 py-4 text-[#e6e6e6] placeholder:text-[#4d4d4d] outline-none resize-none transition-all duration-300"
                            />
                        </div>

                        <div className="mt-4 flex justify-end">
                            <Magnet padding={20} disabled={isMobile} magnetStrength={3}>
                                <button className="group relative px-8 py-4 bg-[#eb5939] text-[#0d0d0d] font-bold rounded-full overflow-hidden transition-all hover:bg-[#d14d31] active:scale-95">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Send Message
                                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </span>
                                </button>
                            </Magnet>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
