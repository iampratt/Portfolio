import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { DAELoader } from 'three/addons/loaders/DAELoader.js'
import * as THREE from 'three'

function CoffeeModel() {
    const modelRef = useRef<THREE.Object3D>(null)

    const materials = useLoader(MTLLoader, 'Coffee cup/obj/coffee cup.mtl')
    const obj = useLoader(OBJLoader, 'Coffee cup/obj/coffee cup.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

    useFrame(({ clock }) => {
        if (!modelRef.current) return;
        modelRef.current.rotation.y = clock.elapsedTime*0.5
    })

    return <primitive object={obj} ref={modelRef} scale={1} />
}

function Coffee() {
    return (
        <Canvas camera={{ position: [0, -2, 10] }}>
            <ambientLight />
            <directionalLight position={[3, 3, 0]} />
            <CoffeeModel />
        </Canvas>
    )
}

export default Coffee