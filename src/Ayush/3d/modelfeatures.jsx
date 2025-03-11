import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import SpotlightCard from "./SpotlightCard";
import in2 from "../../rishabh/in2.png";
import in3 from "../../rishabh/in3.png";
import in4 from "../../rishabh/in4.png";

function GLBModel1() {
  const meshRef = useRef();
  const { scene } = useGLTF("/tesla.glb");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} position={[0, -2, 0]} scale={[10, 10, 10]} />
      <pointLight position={[0, 10, 10]} intensity={20000} distance={50} decay={2} color="red" />
    </group>
  );
}

function GLBModel2() {
  const meshRef = useRef();
  const { scene } = useGLTF("/cardeck.glb");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} position={[0, -17, 0]} scale={[0.07, 0.07, 0.07]} />
      <pointLight position={[0, 40, 5]} intensity={50000} distance={100} decay={2} color="white" />
    </group>
  );
}

export default function TeslaPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-black w-[100vw] px-8 py-4">
      {/* 3D Model Section */}
      <div className="w-full md:w-1/2 h-[400px] flex justify-center items-center">
        <Canvas
          shadows
          className="w-full h-full"
          camera={{ position: [0, 0, 180], fov: 30 }}
          onCreated={({ gl, scene }) => {
            scene.background = null;
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 40, 100]} castShadow intensity={3} />
          <GLBModel1 />
          <GLBModel2 />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Features Section */}
      <div className="w-full md:w-1/2 space-y-2 max-w-xl mx-auto">
        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="w-[550px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-0 rounded-xl shadow-lg">
            <img src={in2} alt="Stay Connected" className="w-40 h-28 rounded-lg object-cover shadow-md" />
            <div className="text-white max-w-sm">
              <h2 className="text-2xl font-semibold mb-2">Stay Connected</h2>
              <p className="text-gray-400 text-base">
                Instantly connect with multi-device Bluetooth or fast charge devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="w-[550px]">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 p-0 rounded-xl shadow-lg">
            <img src={in3} alt="Immersive Sound" className="w-40 h-28 rounded-lg object-cover shadow-md" />
            <div className="text-white max-w-sm">
              <h2 className="text-2xl font-semibold mb-2">Immersive Sound</h2>
              <p className="text-gray-400 text-base">
                Experience high-quality audio with noise cancellation and immersive sound to enhance your listening experience.
              </p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="w-[550px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-0 rounded-xl shadow-lg">
            <img src={in4} alt="Fast Charging" className="w-40 h-28 rounded-lg object-cover shadow-md" />
            <div className="text-white max-w-sm">
              <h2 className="text-2xl font-semibold mb-2">Fast Charging</h2>
              <p className="text-gray-400 text-base">
                Charge your devices in no time with our advanced 36-watt USB-C charging that supports fast charge modes.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}