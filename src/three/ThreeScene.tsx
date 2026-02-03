import { Canvas } from "@react-three/fiber";
import { ScrollControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { HeroOrb } from "@three/HeroOrb";

interface ThreeSceneProps {
  color: string;
}

export const ThreeScene = ({ color }: ThreeSceneProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <Suspense fallback={null}>
        <ScrollControls pages={1} damping={0.2}>
          <HeroOrb color={color} />
        </ScrollControls>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 3]} intensity={1} color={color} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};
