import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import useStore from "../store/store";

export default function MobileNotice() {
    const isMobile = useStore((state) => state.isMobile);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isMobile) {
            // Small delay to not be too intrusive immediately
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [isMobile]);

    if (!isVisible || !isMobile) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className="bg-[#1a1a1a] border border-[#b7ab98]/20 rounded-lg p-4 shadow-2xl flex items-start gap-3 backdrop-blur-md">
                <div className="flex-1">
                    <h3 className="text-[#eb5939] font-bold text-sm mb-1 uppercase tracking-wider">
                        Best Viewed on Desktop
                    </h3>
                    <p className="text-[#b7ab98] text-xs leading-relaxed">
                        For the full immersive experience with 3D interactions and animations, we recommend switching to a larger screen.
                    </p>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-[#b7ab98] hover:text-[#eb5939] transition-colors p-1"
                    aria-label="Dismiss"
                >
                    <FaTimes size={14} />
                </button>
            </div>
        </div>
    );
}
