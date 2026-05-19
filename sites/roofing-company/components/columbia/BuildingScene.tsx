"use client";

import { useConstructionProgress } from "@/components/columbia/ConstructionProgressProvider";
import { useIsMobile } from "@/hooks/useIsMobile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { images } from "@/lib/site-content";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const STONE = "#d4cfc6";
const CONCRETE = "#9ca3af";
const FRAME = "#6b7280";
const WALL = "#e7e5e4";
const ROOF = "#57534e";
const PAVE = "#292524";
const ACCENT = "#f5b800";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function stageOpacity(progress: number, start: number, end: number) {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

function BuildingModel() {
  const { progressRef } = useConstructionProgress();
  const group = useRef<THREE.Group>(null);
  const smooth = useRef(0);

  useFrame((_, delta) => {
    smooth.current = THREE.MathUtils.damp(
      smooth.current,
      progressRef.current,
      4,
      delta,
    );
    const progress = smooth.current;
    if (group.current) {
      group.current.rotation.y = lerp(-0.08, 0.12, progress);
    }

    const foundation = stageOpacity(progress, 0, 0.18);
    const frame = stageOpacity(progress, 0.12, 0.38);
    const walls = stageOpacity(progress, 0.32, 0.58);
    const roof = stageOpacity(progress, 0.52, 0.78);
    const paving = stageOpacity(progress, 0.68, 1);

    const children = group.current?.children;
    if (!children) return;

    const setScale = (index: number, s: number) => {
      const child = children[index];
      if (child) child.scale.setScalar(Math.max(s, 0.001));
    };

    setScale(1, foundation);
    setScale(2, frame);
    setScale(3, walls);
    setScale(4, roof);
    setScale(5, paving);
    setScale(6, paving * 0.6);
    setScale(7, paving * 0.5);
  });

  return (
    <group ref={group} position={[0, -0.35, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color={STONE} />
      </mesh>

      <mesh position={[0, 0.06, 0]} scale={[0.001, 0.001, 0.001]}>
        <boxGeometry args={[2.4, 0.12, 1.8]} />
        <meshStandardMaterial color={CONCRETE} />
      </mesh>

      <group scale={[0.001, 0.001, 0.001]}>
        {(
          [
            [-0.9, 0.55, -0.55],
            [0.9, 0.55, -0.55],
            [-0.9, 0.55, 0.55],
            [0.9, 0.55, 0.55],
          ] as const
        ).map((pos, i) => (
          <mesh key={i} position={[...pos]}>
            <boxGeometry args={[0.08, 1.1, 0.08]} />
            <meshStandardMaterial color={FRAME} metalness={0.2} roughness={0.6} />
          </mesh>
        ))}
        <mesh position={[0, 1.05, 0]}>
          <boxGeometry args={[2, 0.06, 1.4]} />
          <meshStandardMaterial color={FRAME} />
        </mesh>
      </group>

      <group scale={[0.001, 0.001, 0.001]}>
        <mesh position={[0, 0.62, 0]}>
          <boxGeometry args={[1.85, 0.95, 1.25]} />
          <meshStandardMaterial color={WALL} />
        </mesh>
        <mesh position={[0, 0.45, 0.64]}>
          <boxGeometry args={[0.5, 0.55, 0.04]} />
          <meshStandardMaterial color="#44403c" />
        </mesh>
        <mesh position={[-0.55, 0.72, 0]}>
          <boxGeometry args={[0.35, 0.35, 0.04]} />
          <meshStandardMaterial color="#78716c" />
        </mesh>
      </group>

      <group scale={[0.001, 0.001, 0.001]} position={[0, 1.05, 0]}>
        <mesh>
          <boxGeometry args={[2.1, 0.1, 1.45]} />
          <meshStandardMaterial color={ROOF} />
        </mesh>
        <mesh position={[0, 0.18, 0]}>
          <boxGeometry args={[2.05, 0.06, 1.4]} />
          <meshStandardMaterial color={ACCENT} />
        </mesh>
      </group>

      <mesh
        position={[0, 0.04, 1.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.001, 0.001, 0.001]}
      >
        <planeGeometry args={[1.6, 2.2]} />
        <meshStandardMaterial color={PAVE} roughness={0.85} />
      </mesh>

      <mesh position={[-1.4, 0.15, 0.8]} scale={[0.001, 0.001, 0.001]}>
        <coneGeometry args={[0.18, 0.45, 6]} />
        <meshStandardMaterial color="#4d7c0f" />
      </mesh>
      <mesh position={[1.35, 0.15, -0.6]} scale={[0.001, 0.001, 0.001]}>
        <coneGeometry args={[0.14, 0.38, 6]} />
        <meshStandardMaterial color="#3f6212" />
      </mesh>
    </group>
  );
}

function SceneLights({ simplified }: { simplified: boolean }) {
  return (
    <>
      <ambientLight intensity={simplified ? 0.85 : 0.55} />
      <directionalLight position={[4, 6, 3]} intensity={simplified ? 0.9 : 1.2} />
      <directionalLight position={[-3, 4, -2]} intensity={0.35} />
    </>
  );
}

function HeroPoster({ className }: { className: string }) {
  return (
    <div
      className={`relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-border bg-asphalt/5 ${className}`}
    >
      <Image
        src={images.heroPoster}
        alt="Commercial paving crew working on an asphalt surface"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone/70 via-transparent to-stone/10" />
    </div>
  );
}

type BuildingSceneProps = {
  className?: string;
};

export default function BuildingScene({ className = "" }: BuildingSceneProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reducedMotion) {
    return <HeroPoster className={className} />;
  }

  const simplified = isMobile;

  return (
    <div
      className={`relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-border bg-asphalt/5 ${className}`}
    >
      <Canvas
        className="pointer-events-none !h-full !w-full"
        camera={{ position: [3.2, 2.4, 3.8], fov: 42 }}
        dpr={simplified ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !simplified, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor("#e8ebf0", 1);
        }}
      >
        <SceneLights simplified={simplified} />
        <BuildingModel />
      </Canvas>
    </div>
  );
}
