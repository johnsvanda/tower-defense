import { DDSLoader, MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const PineTree = () => {
  const materials = useLoader(MTLLoader, "/terrain/Prop_Tree_Pine_1.mtl");
  const obj = useLoader(
    OBJLoader,
    "/terrain/Prop_Tree_Pine_1.obj",
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );

  return <primitive object={obj} position={[10, 0, 0]} scale={[5, 5, 5]} />;
}

export default PineTree;