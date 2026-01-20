import { Canvas, useFrame, invalidate } from '@react-three/fiber'
import { useGLTF, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { useRef, useEffect } from 'react';
import * as THREE from 'three'

const MODEL_PATH = 'coffee/Shaded/base_basic_shaded.glb';

function CoffeeModel() {
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
        modelRef.current.rotation.x = window.scrollY * 0.005
    })

    return <primitive object={scene} position={[0, -10, 0]} rotation={[0, -Math.PI / 5, -Math.PI / 5]} ref={modelRef} scale={20} />
}

function Coffee() {
    return (
        <Canvas
            camera={{ position: [0, -70, 40] }}
            frameloop="demand"
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
        >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <ambientLight />
            <directionalLight position={[5, 3, 0]} />
            <CoffeeModel />
        </Canvas>
    )
}

// Preload the model
useGLTF.preload(MODEL_PATH);

export default Coffee