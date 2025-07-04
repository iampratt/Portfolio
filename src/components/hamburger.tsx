import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const BurgerMenu = () => {
  const topRef = useRef<SVGPathElement | null>(null);
  const midRef = useRef<SVGLineElement | null>(null);
  const botRef = useRef<SVGPathElement | null>(null);
  const [isOpen, setIsOpen] = useState(false); // toggle state

  useEffect(() => {
    if (!topRef.current || !midRef.current || !botRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(topRef.current, {
      y: -9,
      duration: 0.2,
      transformOrigin: "50% 50%",
    }, "burg")
    .to(botRef.current, {
      y: 9,
      duration: 0.2,
      transformOrigin: "50% 50%",
    }, "burg")
    .to(midRef.current, {
      scale: 0.1,
      duration: 0.2,
      transformOrigin: "50% 50%",
    }, "burg")
    .add("rotate")
    .to(topRef.current, {
      y: 5,
      rotation: 45,
      duration: 0.2,
      transformOrigin: "50% 50%",
    }, "rotate")
    .to(botRef.current, {
      y: -5,
      rotation: -45,
      duration: 0.2,
      transformOrigin: "50% 50%",
    }, "rotate");

    // Play or reverse timeline based on `isOpen`
    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="border-5 border-white top-10 right-10 h-500 w-500 z-1000 flex items-center justify-center
    ">
        <svg
          id="burger"
          width="30"
          className="openmenu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          onClick={toggleMenu}
          style={{ margin: "55px", perspective: "800px", cursor: "pointer" }}
        >
          <path ref={topRef} d="M0 9h30v2H0z" fill="black" />
          <line
            ref={midRef}
            x1="0"
            y1="15"
            x2="30"
            y2="15"
            stroke="black"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <path ref={botRef} d="M0 19h30v2H0z" fill="black" />
        </svg>
    </div>
  );
};

export default BurgerMenu;