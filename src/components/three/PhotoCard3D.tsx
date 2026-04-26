// src/components/three/PhotoCard3D.tsx
'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

function Card({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Load texture (in real app, use actual image path)
  // const texture = useTexture(imageUrl);

  useFrame(() => {
    if (meshRef.current) {
      // Smooth rotation based on mouse position
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mousePos.x * 0.3,
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -mousePos.y * 0.3,
        0.1
      );

      // Floating animation
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  const handlePointerMove = (event: any) => {
    const x = (event.point.x / 3) * 2;
    const y = (event.point.y / 3) * 2;
    setMousePos({ x, y });
  };

  return (
    <group>
      {/* Main Card */}
      <mesh
        ref={meshRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => {
          setHovered(false);
          setMousePos({ x: 0, y: 0 });
        }}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.5, 3.5, 0.1]} />
        <meshStandardMaterial
          color={hovered ? '#40a9ff' : '#1890ff'}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Photo Frame */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2.3, 3.3]} />
        <meshBasicMaterial color="#0a0e27" />
      </mesh>

      {/* Photo Placeholder (Replace with actual image texture) */}
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[2.1, 3.1]} />
        <meshStandardMaterial color="#1a1f3a" />
      </mesh>

      {/* Glow effect */}
      {hovered && (
        <pointLight position={[0, 0, 2]} intensity={1} color="#40a9ff" />
      )}

      {/* String/Wire at top */}
      <mesh position={[0, 1.9, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshStandardMaterial color="#69c0ff" metalness={0.9} />
      </mesh>

      {/* Hanging point */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#40a9ff" metalness={1} />
      </mesh>
    </group>
  );
}

export default function PhotoCard3D({ imageUrl = '/images/profile.jpg' }) {
  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        shadows
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#40a9ff" />
        
        <Card imageUrl={imageUrl} />
        
        {/* Environment */}
        <mesh position={[0, 0, -2]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#0a0e27" />
        </mesh>
      </Canvas>
    </div>
  );
}
