import { Canvas, useFrame, invalidate } from '@react-three/fiber'
import { useGLTF, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { useRef, useEffect } from 'react';
import * as THREE from 'three'

const MODEL_PATH = 'face/Shaded/base_basic_shaded.glb';

function FaceModel() {
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
        modelRef.current.rotation.y = window.scrollY * 0.001
    })

    return <primitive object={scene} ref={modelRef} scale={7} />
}

function Face() {
    return (
        <Canvas
            camera={{ position: [7, -2, 10] }}
            frameloop="demand"
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
        >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <ambientLight />
            <directionalLight position={[3, 3, 0]} />
            <FaceModel />
        </Canvas>
    )
}

// Preload the model
useGLTF.preload(MODEL_PATH);

export default Face