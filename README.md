# Portfolio 2026

[Visit Live Site](https://iampratt.vercel.app/)

A highly interactive, 3D immersive portfolio website built with modern web technologies. This project features advanced animations, smooth scrolling, and a unique masking effect that reveals content based on cursor interaction.


<img width="1470" height="923" alt="Screenshot 2026-01-29 at 10 27 37" src="https://github.com/user-attachments/assets/6676771e-502c-40a5-b28d-c0d4fd009db0" />

## 🌟 Key Features

*   **Immersive 3D Experience**: Integrated 3D models and interactions using **Three.js** and **React Three Fiber**.
*   **Dynamic Masking System**: A custom cursor-based masking effect that acts as a spotlight, revealing hidden layers of the UI as you explore.
*   **Smooth Animations**: Powered by **GSAP** and **Framer Motion** for fluid page transitions, complex sequences, and scroll-linked animations.
*   **Horizontal Scroll Gallery**: A custom "Selected Works" section featuring a horizontal scroll layout implemented with GSAP ScrollTrigger.
*   **Asset Preloading**: A dedicated preloader screen ensures all 3D assets, textures, and media are fully loaded before the experience begins.
*   **Audio Integration**: Background ambience with user controls for an atmospheric experience.
*   **Responsive Design**: Tailored layouts and interactions optimized for both desktop and mobile devices.

## 🛠 Tech Stack

*   **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei)
*   **Animations**: [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)
*   **Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (Smooth scroll)
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
*   **UI Components**: [Radix UI](https://www.radix-ui.com/) + React Icons

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components & 3D models
│   ├── 3d/          # React Three Fiber components (Coffee, Computer, Face, etc.)
│   ├── Navbar.tsx   # Navigation component
│   └── ...
├── screens/         # Main page sections
│   ├── masks/       # Mask layer variants for each section (The "flashlight" reveal content)
│   ├── About.tsx    # "About Me" section
│   ├── Projects.tsx # "Selected Works" section
│   ├── Intro.tsx    # Initial loading screen
│   └── ...
├── store/           # Global state management (Zustand)
├── utils/           # Custom hooks (useAudio, useMousePosition, etc.)
└── App.tsx          # Application entry point
```

## 🎨 Design Philosophy

The design follows a "Cinematic Dark Mode" aesthetic, leveraging glassmorphism and high-contrast typography. 
*   **Inter Font**: Used for clean, modern readability.
*   **Magnetic Cursors**: Buttons and interactive elements utilize magnetic pulls for a tactile feel.
*   **Masking**: The core mechanic involves a top layer and a masked bottom layer, creating a depth effect where the user "discovers" content.
