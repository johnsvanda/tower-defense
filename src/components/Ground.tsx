import { DDSLoader, MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

function Ground({ position = [0, -1, 0], scale = [200, 0, 200] }) {
  const materials = useLoader(MTLLoader, "/terrain/Grass_Flat.mtl");
  const obj = useLoader(OBJLoader, "/terrain/Grass_Flat.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} position={position} scale={scale} />;
}

export default Ground;
