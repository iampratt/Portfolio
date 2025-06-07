import {Canvas, useFrame} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import * as THREE from 'three'

function FaceModel() {
    const { scene } = useGLTF('face/Shaded/base_basic_shaded.glb')
    const modelRef = useRef<THREE.Object3D>(null)

    useFrame(() => {
        if (!modelRef.current) return;
        modelRef.current.rotation.y = window.scrollY*0.001
    })

    return <primitive object={scene} ref={modelRef} scale={7} />
}

function Face() {
    return (
        <Canvas camera={{ position: [7, -2, 10] }}>
            <ambientLight />
            <directionalLight position={[3, 3, 0]} />
            <FaceModel />
        </Canvas>
    )
}

export default Face