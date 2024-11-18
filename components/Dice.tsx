"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dice(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/dice.glb");
    return (
        <group {...props} dispose={null}>
            <group scale={0.001}>
                <group
                    position={[-162.974, 25, 865.213]}
                    rotation={[-Math.PI, -1.222, -Math.PI / 2]}
                >
                    <group position={[0, 0, -25]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["dice001_Material_#25_0"].geometry}
                            material={materials.Material_25}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["dice001_Material_#26_0"].geometry}
                            material={materials.Material_26}
                        />
                    </group>
                </group>
                <group
                    position={[-145.995, 25, 773.187]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 6]}
                >
                    <group position={[0, 0, -25]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["dice003_Material_#25_0"].geometry}
                            material={materials.Material_25}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["dice003_Material_#26_0"].geometry}
                            material={materials.Material_26}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/dice.glb");
