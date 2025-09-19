import { create } from "zustand";

interface globalState {
    isHoverT1: boolean,
    setIsHoverT1: (value: boolean) => void,
    isHoverT2: boolean,
    setIsHoverT2: (value: boolean) => void,
    maskSize: number,
    setMaskSize: (value: number) => void,
    isMaskActive: boolean,
    setIsMaskActive: (value: boolean) => void,
    isMobile: boolean;
    setIsMobile: (value: boolean) => void,
    assetsLoading: boolean;
    setAssetsLoading: (value: boolean) => void;
    loadingProgress: number;
    setLoadingProgress: (value: number) => void;
}

const useStore=create<globalState>()((set)=>({
    isHoverT1: false,
    setIsHoverT1: (value: boolean) => set({ isHoverT1: value }),
    isHoverT2: false,
    setIsHoverT2: (value: boolean) => set({ isHoverT2: value }),
    maskSize: 40,
    setMaskSize: (value: number) => set({ maskSize: value}),
    isMaskActive: true,
    setIsMaskActive: (value: boolean) => set({ isMaskActive: value }),
    isMobile: false,
    setIsMobile: (value: boolean) => set({ isMobile: value}),
    assetsLoading: true,
    setAssetsLoading: (value: boolean) => set({ assetsLoading: value }),
    loadingProgress: 0,
    setLoadingProgress: (value: number) => set({ loadingProgress: value })
}))

export default useStore;