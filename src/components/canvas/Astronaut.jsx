import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations} from "@react-three/drei";

import CanvasLoader from "../Loader";

 const Astronaut = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('astronaut1/scene.gltf')
  const { actions } = useAnimations(animations, group)

useEffect(()=>{
console.log(actions)
actions.Animation.play()
},[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={2.25} position-y={-3}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Walking_astronaut_94">
                <group name="Walking_astronaut_Skeleton_93" scale={0.01}>
                  <group name="geo1_0">
                    <group name="astronaut2_1" />
                  </group>
                  <group name="skeletal3_2">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <group name="node3_95_correction">
                        <group name="node3_95" />
                      </group>
                      <group name="node4_96_correction">
                        <group name="node4_96" />
                      </group>
                      <group name="node5_97_correction">
                        <group name="node5_97" />
                      </group>
                      <skinnedMesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.material0} skeleton={nodes.Object_102.skeleton} />
                      <skinnedMesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.material0} skeleton={nodes.Object_103.skeleton} />
                      <skinnedMesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.material1} skeleton={nodes.Object_106.skeleton} />
                      <skinnedMesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials.material2} skeleton={nodes.Object_109.skeleton} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('astronaut1/scene.gltf')

const AstronautCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enabled={false}
          enableRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <spotLight intensity={3} position={[0, 2.5, 0.5]}/>
        <directionalLight intensity={2} position={[0, -0.3, 0.05]} />
        <Astronaut />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AstronautCanvas;