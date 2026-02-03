import { MeshDistortMaterial, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface HeroOrbProps {
  color: string;
}

export const HeroOrb = ({ color }: HeroOrbProps) => {
  const meshRef = useRef<Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!meshRef.current) return;
    const offset = scroll.offset;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x = offset * Math.PI * 0.5;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <MeshDistortMaterial color={color} distort={0.35} speed={2} roughness={0.1} />
    </mesh>
  );
};
