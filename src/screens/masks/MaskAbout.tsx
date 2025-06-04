import { useRef } from "react";
import useStore from "../../store/store";

function MaskAbout() {
    const container=useRef(null)

    const setIsHoverT1= useStore().setIsHoverT1
    const setMaskSize= useStore().setMaskSize

    const handleMouseEnter=()=>{
        setIsHoverT1(true);
        setMaskSize(400);
    }

    const handleMouseLeave=()=>{
        setIsHoverT1(false);
        setMaskSize(40);
    }

  return (
    <div className='relative w-full h-[100dvh] flex justify-center items-center'>
        <div className='flex flex-col gap-10 justify-center items-start px-10 lg:px-50'>
            <div className='font-bold lg:text-[13.9px] tracking-[6.67px] leading-[17.3px]'>ABOUT ME</div>
            <div ref={container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='text-[3em] lg:text-[65px] tracking-[-2.67px] leading-[54.7px] font-bold'>
                A visual designer qith skills thathave'nt been replaced by A.I yet - making good shit only if the paycheck is equally good   
            </div>
        </div>
    </div>
  )
}

export default MaskAbout