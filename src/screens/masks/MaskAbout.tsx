import { useRef } from "react";
import useStore from "../../store/store";

function MaskAbout() {
    const container = useRef(null)

    const setIsHoverT1 = useStore().setIsHoverT1
    const setMaskSize = useStore().setMaskSize

    const handleMouseEnter = () => {
        setIsHoverT1(true);
        setMaskSize(400);
    }

    const handleMouseLeave = () => {
        setIsHoverT1(false);
        setMaskSize(40);
    }

    return (
        <div className='relative w-full h-[100dvh] flex justify-center items-start pt-[33vh]'>
            <div className='flex flex-col gap-6 lg:gap-10 justify-center items-start px-5 lg:px-50 max-w-[100vw] overflow-hidden'>
                <div className='font-bold text-[10px] lg:text-[13.9px] tracking-[4px] lg:tracking-[6.67px] leading-[17.3px]'>ABOUT ME</div>
                <div ref={container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='text-[2rem] md:text-[3em] lg:text-[65px] tracking-[-1px] lg:tracking-[-2.67px] leading-tight lg:leading-[54.7px] font-bold'>
                    A builder of things A.I. can't *yet* automate — writing better code if the use case or the paycheck is worth it.
                </div>
            </div>
        </div>
    )
}

export default MaskAbout