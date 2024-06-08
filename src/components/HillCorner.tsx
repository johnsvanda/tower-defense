import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import React from "react";

function Ground() {
    const materials = useLoader(MTLLoader, "/terrain/Hill_Corner_Inner_2x2.mtl");
    const obj = useLoader(OBJLoader, "/terrain/Hill_Corner_Inner_2x2.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    })

  return (
    <React.Suspense fallback={null}>
      <primitive object={obj} position={[10, 0, 10]} scale={[100, 1, 100]} />
    </React.Suspense>
  );
}

export default Ground;
