import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import React from "react";

function Tree() {
    const materials = useLoader(MTLLoader, "/terrain/Prop_Tree_Oak_3.mtl");
    const obj = useLoader(OBJLoader, "/terrain/Prop_Tree_Oak_3.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    })

  return (
      <primitive object={obj} position={[10, 0, 0]} scale={[20, 10, 20]} />
  );
}

export default Tree;
