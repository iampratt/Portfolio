import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Suspense } from "react"
import { Coffee, Computer } from "../components/3d"
import CountUp from "../components/CountUp"

function LoadingSpinner() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#eb5939]"/>
        </div>
    );
}

function Mgss() {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const context = gsap.context( () => {
            gsap.timeline({
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
        <div id="mgss" className="smooth-wrapper relative w-full h-[100dvh] bg-[#0d0d0d]">
            <div className="absolute -left-[330px] lg:-left-[45.2em] top-50 lg:top-[200px] h-screen w-[170vw] lg:w-screen opacity-20">
                <Suspense fallback={<LoadingSpinner />}>
                    <Coffee />
                </Suspense>
            </div>
            <div className="absolute -right-[10em] lg:-right-[30em] -top-50 lg:-top-[17em] h-screen w-[170vw] lg:w-screen opacity-20">
                <Suspense fallback={<LoadingSpinner />}>
                    <Computer />
                </Suspense>
            </div>
            
            <div className="flex flex-col lg:gap-3 mx-auto py-16 items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="font-bold text-[#b7ab98] text-[13.9px] tracking-[6.67px] leading-[17.3px]">
                        PRATYUSH SRIVASTAVA
                    </div>
                </div>
                <div  className="flex relative items-center justify-center">
                    {/* Making good shit since 0000 */}
                    <div className="flex flex-col lg:gap-3 justify-center items-center mt-15 lg:mt-24">
                        <div className="font-bold text-[#b7ab98] text-[4.5em] -mb-5 lg:mb-0 lg:text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            MAKING
                        </div>
                        <div className="font-bold text-[#eb5939] text-[4.5em] -mb-5 lg:mb-0 lg:text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            GOOD
                        </div>
                        <div className="font-bold text-[#eb5939] text-[4.5em] -mb-5 lg:mb-0 lg:text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            THINGS
                        </div>
                        <div className="font-bold text-[#b7ab98] text-[4.5em] -mb-5 lg:mb-0 lg:text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            SINCE
                        </div>
                        <div className="font-bold text-[#b7ab98] text-[4.5em] -mb-5 lg:mb-0 lg:text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            <CountUp
                                from={1970}
                                to={2023}
                                separator=""
                                direction="up"
                                duration={1.2}
                                className="count-up-text"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Mgss