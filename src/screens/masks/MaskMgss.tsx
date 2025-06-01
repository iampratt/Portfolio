import useStore from "../../store/store"

function MaskMgss() {
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
    <>
        <div className="relative w-full h-screen">
            <div className="flex flex-col gap-3 mx-auto py-16 items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="font-bold text-[13.9px] tracking-[6.67px] leading-[17.3px] text-[#0d0d0d]">
                        PRATYUSH SRIVASTAVA
                    </div>
                </div>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex relative items-center justify-center">
                    {/* Hiding bad shit since 0000 */}
                    <div className="flex flex-col gap-3 justify-center items-center mt-24">
                        <div className="font-bold text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            HIDING
                        </div>
                        <div className="font-bold text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            BAD
                        </div>
                        <div className="font-bold text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            SH*T
                        </div>
                        <div className="font-bold text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            SINCE
                        </div>
                        <div className="font-bold text-[138.1px] tracking-[-5.83px] leading-[98px]">
                            0000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MaskMgss