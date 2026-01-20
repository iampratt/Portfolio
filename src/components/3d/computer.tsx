import { Canvas, useFrame, invalidate } from '@react-three/fiber'
import { useGLTF, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { useRef, useEffect } from 'react';
import * as THREE from 'three'

const MODEL_PATH = 'computer/Shaded/base_basic_shaded.glb';

function ComputerModel() {
    const { scene } = useGLTF(MODEL_PATH)
    const modelRef = useRef<THREE.Object3D>(null)
    const lastScrollY = useRef(0)

    // Trigger re-render on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (Math.abs(window.scrollY - lastScrollY.current) > 2) {
                lastScrollY.current = window.scrollY
                invalidate()
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useFrame(() => {
        if (!modelRef.current) return;
        modelRef.current.rotation.y = -window.scrollY * 0.003
        modelRef.current.rotation.x = -window.scrollY * 0.002
    })

    return <primitive object={scene} position={[0, -10, 40]} rotation={[0, -Math.PI / 5, -Math.PI / 5]} ref={modelRef} scale={20} />
}

function Computer() {
    return (
        <Canvas
            camera={{ position: [-40, 60, 80] }}
            frameloop="demand"
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
        >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <ComputerModel />
        </Canvas>
    )
}

// Preload the model
useGLTF.preload(MODEL_PATH);

export default Computer