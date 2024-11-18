import { Dice } from "@/components/Dice";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const ModelContainer = () => {
    return (
        <div>
            <Canvas>
                <Environment preset="city" />
                <OrbitControls />
                <Dice />
            </Canvas>
        </div>
    );
};

export default ModelContainer;
