"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ticket(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/ticket.glb");
    return (
        <group {...props} dispose={null}>
            <group scale={10}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes.ticket_admission_base_realistic_lod0.geometry
                    }
                    material={materials.pxrUsdPreviewSurface2SG}
                    scale={0.01}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/ticket.glb");
