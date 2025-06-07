import {Canvas, useFrame} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import * as THREE from 'three'

function ComputerModel() {
    const { scene } = useGLTF('computer/Shaded/base_basic_shaded.glb')
    const modelRef = useRef<THREE.Object3D>(null)

    useFrame(() => {
        if (!modelRef.current) return;
        modelRef.current.rotation.y = -window.scrollY*0.003
        modelRef.current.rotation.x = -window.scrollY*0.002
    })

    return <primitive object={scene} position={[0, -10, 40]} rotation={[0, -Math.PI/5, -Math.PI/5]} ref={modelRef} scale={20}/>
}

function Computer() {
    return (
        <Canvas camera={{ position: [-40, 60, 80] }}>
            <ComputerModel />
        </Canvas>
    )
}

export default Computer