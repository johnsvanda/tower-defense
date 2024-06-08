import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Ground from "@/components/Ground";
import PineTree from "./components/PineTree";
import React from "react";

export default function App() {
  return (
    <div className="viewer">
      <Canvas  id="canvas">
          <ambientLight intensity={Math.PI / 2} />
        <React.Suspense fallback={null} key="ground">
          <Ground />
        </React.Suspense>
        <React.Suspense fallback={null} key="pinetree">
          <PineTree />
        </React.Suspense>
          <OrbitControls />
      </Canvas>
    </div>
  );
}
