import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function Mgss() {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const context = gsap.context( () => {

            const tl = gsap.timeline({

                scrollTrigger: {

                    trigger: '.btemp',

                    start: "top bottom",

                    end: "bottom top",

                    scrub: true,

                },

            })
            .to('.btemp', {y: -500}, 0)
            .to('.btemp2', {y: 100}, 0)
        })
            
            return ()=>context.revert()
        })

  return (
    <>
        <div className="smooth-wrapper relative w-full h-screen bg-[#0d0d0d]">
            <img src="/public/btemp.jpeg" className="smooth-content btemp absolute w-full h-[100vh] top-[500px] object-center" />
            <img src="/public/comp.png" alt="" className="btemp2 h-100 w-100 absolute opacity-50 -rotate-20 -left-50 top-[30%]" />
            <div className="flex flex-col gap-3 mx-auto py-16 items-center justify-center min-h-screen">
                <div className="text-center z-1">
                    <div className="font-bold text-[#b7ab98] text-[13.9px] tracking-[6.67px] leading-[17.3px]">
                        PRATYUSH SRIVASTAVA
                    </div>
                </div>
                <div  className="flex relative items-center justify-center">
                    {/* Making good shit since 0000 */}
                    <div className="flex flex-col gap-3 justify-center items-center mt-24">
                        <div className="font-bold text-[#b7ab98] text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            MAKING
                        </div>
                        <div className="font-b old text-[#eb5939] text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            GOOD
                        </div>
                        <div className="font-bold text-[#eb5939] text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            SH*T
                        </div>
                        <div className="font-bold text-[#b7ab98] text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            SINCE
                        </div>
                        <div className="font-bold text-[#b7ab98] text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            0000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Mgss