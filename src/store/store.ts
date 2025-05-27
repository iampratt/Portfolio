import { create } from "zustand";

interface globalState {
    isHoverT1: boolean;
    setIsHoverT1: (value: boolean) => void;
    isHoverT2: boolean;
    setIsHoverT2: (value: boolean) => void;
    maskSize: number
    setMaskSize: (value: number) => void;
}

const useStore=create<globalState>()((set)=>({
    isHoverT1: false,
    setIsHoverT1: (value: boolean) => set({ isHoverT1: value }),
    isHoverT2: false,
    setIsHoverT2: (value: boolean) => set({ isHoverT2: value }),
    maskSize: 40,
    setMaskSize: (value: number) => set({ maskSize: value})
}))

export default useStore;