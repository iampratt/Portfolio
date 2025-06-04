import {Canvas, useFrame} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import * as THREE from 'three'

function FaceModel() {
    const { scene } = useGLTF('/Shaded/base_basic_shaded.glb')
    const modelRef = useRef<THREE.Object3D>(null)

    useFrame(({ clock }) => {
        if (!modelRef.current) return;
        modelRef.current.rotation.y = clock.elapsedTime*0.5
    })

    return <primitive object={scene} ref={modelRef} scale={5} />
}

function Face() {
    return (
        <Canvas camera={{ position: [0, -2, 10] }}>
            <ambientLight />
            <directionalLight position={[3, 3, 0]} />
            <FaceModel />
        </Canvas>
    )
}

export default Face