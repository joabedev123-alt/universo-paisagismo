"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";

function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function staggered(t: number, offset: number, span: number) {
  const start = offset;
  const end = offset + span;
  if (t <= start) return 0;
  if (t >= end) return 1;
  return THREE.MathUtils.smootherstep((t - start) / (end - start), 0, 1);
}

function SmoothDriver({
  targetRef,
  smoothRef,
}: {
  targetRef: MutableRefObject<number>;
  smoothRef: MutableRefObject<number>;
}) {
  useFrame(() => {
    smoothRef.current = THREE.MathUtils.lerp(smoothRef.current, targetRef.current, 0.11);
  }, -1);
  return null;
}

function MansionBackdrop() {
  const tex = useTexture("/hero-paisagem.png");
  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
  }, [tex]);

  const w = 13;
  const h = w * (819 / 1024);

  return (
    <mesh position={[0, -0.15, -6.2]} renderOrder={-10}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial map={tex} toneMapped={false} depthWrite />
    </mesh>
  );
}

function GroundPlane({ smoothRef }: { smoothRef: MutableRefObject<number> }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const dead = useMemo(() => new THREE.Color("#aeb5ae"), []);
  const alive = useMemo(() => new THREE.Color("#4d7a55"), []);

  useFrame(() => {
    const m = matRef.current;
    if (!m) return;
    const s = smoothRef.current;
    m.color.copy(dead).lerp(alive, s);
  });

  return (
    <mesh
      position={[0, -2.35, -0.8]}
      rotation={[-0.42, 0, 0]}
      receiveShadow
      castShadow={false}
    >
      <planeGeometry args={[16, 10]} />
      <meshStandardMaterial
        ref={matRef}
        color={dead.clone()}
        roughness={0.92}
        metalness={0.02}
      />
    </mesh>
  );
}

function GrassField({
  count,
  smoothRef,
}: {
  count: number;
  smoothRef: MutableRefObject<number>;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const tmp = useMemo(() => new THREE.Object3D(), []);
  const geo = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#3d6b45",
        roughness: 0.85,
        metalness: 0,
      }),
    []
  );

  const data = useMemo(() => {
    const rows: { x: number; z: number; rot: number; h: number; off: number; sp: number }[] = [];
    for (let i = 0; i < count; i++) {
      const r1 = seeded(i, 1);
      const r2 = seeded(i, 2);
      const r3 = seeded(i, 3);
      rows.push({
        x: (r1 - 0.5) * 11,
        z: -0.5 - r2 * 4.2,
        rot: r3 * Math.PI * 2,
        h: 0.35 + r1 * 0.55,
        off: r2 * 0.35,
        sp: 0.25 + r3 * 0.45,
      });
    }
    return rows;
  }, [count]);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const p = smoothRef.current;
    data.forEach((d, i) => {
      const t = staggered(p, d.off, d.sp);
      tmp.position.set(d.x, -2.32, d.z);
      tmp.rotation.set(0, d.rot, 0);
      tmp.scale.set(0.12 * t + 0.02, d.h * t + 0.03, 0.12 * t + 0.02);
      tmp.updateMatrix();
      mesh.setMatrixAt(i, tmp.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geo, mat, count]} castShadow receiveShadow />
  );
}

const TREE_SPOTS: [number, number, number, number][] = [
  [-4.2, -2.15, -1.9, 0.05],
  [-3.1, -2.12, -2.6, 0.12],
  [-1.8, -2.1, -2.2, 0.08],
  [0.2, -2.08, -2.8, 0.15],
  [2.4, -2.1, -2.4, 0.1],
  [3.8, -2.12, -1.95, 0.07],
  [4.6, -2.14, -2.7, 0.18],
  [-3.6, -2.13, -3.1, 0.2],
  [1.2, -2.09, -3.2, 0.22],
  [3.2, -2.11, -3.0, 0.14],
  [-2.2, -2.11, -1.7, 0.04],
  [2.0, -2.1, -1.65, 0.06],
  [-0.5, -2.1, -2.0, 0.09],
  [5.0, -2.15, -2.5, 0.16],
  [-4.8, -2.14, -2.4, 0.11],
];

function Trees({ smoothRef }: { smoothRef: MutableRefObject<number> }) {
  const groups = useRef<(THREE.Group | null)[]>([]);

  useFrame(() => {
    const p = smoothRef.current;
    TREE_SPOTS.forEach(([x, y, z, off], i) => {
      const g = groups.current[i];
      if (!g) return;
      const t = staggered(p, off, 0.55);
      const s = 0.12 + t * 0.98;
      g.scale.setScalar(s);
      g.position.set(x, y, z);
    });
  });

  return (
    <>
      {TREE_SPOTS.map((_, i) => (
        <group
          key={i}
          ref={(el) => {
            groups.current[i] = el;
          }}
        >
          <mesh position={[0, 0.85, 0]} castShadow>
            <coneGeometry args={[0.45, 1.2, 8]} />
            <meshStandardMaterial color="#2a5238" roughness={0.88} flatShading />
          </mesh>
          <mesh position={[0, 0.2, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.16, 0.5, 6]} />
            <meshStandardMaterial color="#4a3728" roughness={0.95} />
          </mesh>
        </group>
      ))}
    </>
  );
}

const BOULDER_POS: [number, number, number][] = [
  [-2.8, -2.28, -1.4],
  [1.5, -2.26, -1.35],
  [4.0, -2.27, -1.5],
  [-1.0, -2.25, -1.25],
];

function Boulders({ smoothRef }: { smoothRef: MutableRefObject<number> }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(() => {
    const p = smoothRef.current;
    const shrink = 1 - p * 0.88;
    refs.current.forEach((m, i) => {
      if (!m) return;
      const [x, y, z] = BOULDER_POS[i];
      m.position.set(x, y, z);
      const s = (0.35 + seeded(i, 9) * 0.25) * shrink;
      m.scale.setScalar(s);
    });
  });

  return (
    <>
      {BOULDER_POS.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          castShadow
        >
          <dodecahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#9aa3a0" roughness={0.9} flatShading />
        </mesh>
      ))}
    </>
  );
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.38} />
      <directionalLight
        position={[6, 14, 8]}
        intensity={1.15}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={40}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-4, 6, 2]} intensity={0.25} color="#cfe8ff" />
    </>
  );
}

function LoaderFallback() {
  return (
    <mesh position={[0, 0, -4]}>
      <planeGeometry args={[10, 7]} />
      <meshBasicMaterial color="#d8e3dc" />
    </mesh>
  );
}

function LandscapeScene({
  targetRef,
  grassCount,
}: {
  targetRef: MutableRefObject<number>;
  grassCount: number;
}) {
  const smoothRef = useRef(0);

  return (
    <>
      <SmoothDriver targetRef={targetRef} smoothRef={smoothRef} />
      <SceneLighting />
      <MansionBackdrop />
      <GroundPlane smoothRef={smoothRef} />
      <Boulders smoothRef={smoothRef} />
      <GrassField count={grassCount} smoothRef={smoothRef} />
      <Trees smoothRef={smoothRef} />
    </>
  );
}

type HeroLandscape3DProps = {
  children: ReactNode;
  className?: string;
};

export function HeroLandscape3D({ children, className = "" }: HeroLandscape3DProps) {
  const trackRef = useRef<HTMLElement>(null);
  const targetRef = useRef(0);
  const rafRef = useRef(0);
  const [grassCount, setGrassCount] = useState(130);
  const [barProgress, setBarProgress] = useState(0);

  useEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    setGrassCount(w < 768 ? 55 : w < 1100 ? 90 : 130);
  }, []);

  const syncProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollable = track.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const rect = track.getBoundingClientRect();
    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    const p = scrolled / scrollable;
    targetRef.current = p;
    setBarProgress(p);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        syncProgress();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [syncProgress]);

  return (
    <section
      ref={trackRef}
      className={`relative h-[240vh] min-h-[200dvh] border-b border-line md:h-[280vh] ${className}`}
      aria-label="Cena 3D: paisagismo reconstruído ao rolar"
    >
      <div className="sticky top-0 flex min-h-[100dvh] flex-col justify-center py-6 md:py-10">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-4 md:grid-cols-12 md:items-stretch md:gap-10 md:px-8 lg:gap-14">
          <div className="flex flex-col justify-center md:col-span-4 lg:col-span-4">
            {children}
          </div>
          <div className="md:col-span-8 lg:col-span-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-line shadow-[0_8px_40px_rgba(61,111,86,0.12)]">
              <div className="relative h-[56dvh] w-full md:h-[min(85dvh,940px)]">
                <Canvas
                  className="!h-full !w-full touch-none"
                  shadows
                  dpr={[1, 1.75]}
                  gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance",
                  }}
                  onCreated={({ gl, scene }) => {
                    gl.setClearColor("#e8efe9");
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                    gl.toneMapping = THREE.ACESFilmicToneMapping;
                    gl.toneMappingExposure = 1.05;
                    scene.fog = new THREE.Fog("#e8efe9", 12, 26);
                  }}
                  camera={{ position: [0, 1.4, 8.2], fov: 38, near: 0.1, far: 60 }}
                >
                  <Suspense fallback={<LoaderFallback />}>
                    <LandscapeScene targetRef={targetRef} grassCount={grassCount} />
                  </Suspense>
                </Canvas>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1 bg-black/10"
                  aria-hidden
                >
                  <div
                    className="h-full bg-brand transition-[width] duration-75 ease-out"
                    style={{ width: `${barProgress * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
