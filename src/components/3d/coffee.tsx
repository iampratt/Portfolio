import {Canvas, useFrame} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import * as THREE from 'three'

function CoffeeModel() {
    const { scene } = useGLTF('coffee/Pbr/base_basic_pbr.glb')
    const modelRef = useRef<THREE.Object3D>(null)

    useFrame(() => {
        if (!modelRef.current) return;
        modelRef.current.rotation.x = window.scrollY*0.005
    })

    return <primitive object={scene} position={[0, -10, 0]} rotation={[0, -Math.PI/5, -Math.PI/5]} ref={modelRef} scale={20}/>
}

function Coffee() {
    return (
        <Canvas camera={{ position: [0, -70, 40] }}>
            <ambientLight />
            <directionalLight position={[5, 3, 0]} />
            <CoffeeModel />
        </Canvas>
    )
}

export default Coffee