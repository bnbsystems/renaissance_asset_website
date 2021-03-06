/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
/* eslint-disable camelcase */

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei/core/useGLTF"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
  nodes: {
    Block_Above: THREE.Mesh
    Logos: THREE.Mesh
    base: THREE.Mesh
    Braces: THREE.Mesh
    base_1: THREE.Mesh
    Database: THREE.Mesh
    base_2: THREE.Mesh
    Triangle1: THREE.Mesh
    Hexagon1: THREE.Mesh
    Rectangle1: THREE.Mesh
    Triangle: THREE.Mesh
    Triangle1_1: THREE.Mesh
    Hexagon1_1: THREE.Mesh
    Rectangle: THREE.Mesh
    ["Rectangle-Base1"]: THREE.Mesh
    Belt_1: THREE.Mesh
    Logo: THREE.Mesh
    Block: THREE.Mesh
    Tubes: THREE.Mesh
  }
  materials: {
    Gray: THREE.MeshStandardMaterial
    Gatsby: THREE.MeshStandardMaterial
    Plurble: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    Magenta: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(`/model/dracoGatsby.gltf`) as unknown as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.21, 8.75, 59.69]}>
        <mesh material={materials.Gray} geometry={nodes.Block_Above.geometry} position={[-0.28, 0.23, 0.6]} />
        <mesh material={materials.Gatsby} geometry={nodes.Logos.geometry} position={[0.28, 5.76, -0.6]} />
        <mesh material={materials.Plurble} geometry={nodes.base.geometry} position={[-0.05, -5.76, 0.01]} />
      </group>
      <group position={[-59.45, 4.97, 0.07]}>
        <mesh material={materials.Green} geometry={nodes.Braces.geometry} position={[0.09, 1.98, 0.07]} />
        <mesh material={materials.Plurble} geometry={nodes.base_1.geometry} position={[-0.09, -1.98, -0.07]} />
      </group>
      <group position={[0.01, 7.39, -59.99]}>
        <mesh material={materials.Orange} geometry={nodes.Database.geometry} position={[-0.15, 4.4, -0.3]} />
        <mesh material={materials.Plurble} geometry={nodes.base_2.geometry} position={[0.15, -4.4, 0.3]} />
      </group>
      <group position={[31.41, 27.55, -1.56]}>
        <group position={[10.82, -19.57, 0]}>
          <group position={[-8.66, 2.1, 0.65]} rotation={[-1.57, 0, 0]}>
            <mesh
              material={materials.Magenta}
              geometry={nodes.Triangle1.geometry}
              position={[11.77, -0.07, -0.03]}
              rotation={[1.57, 0, 0]}
            />
            <mesh
              material={materials.Red}
              geometry={nodes.Hexagon1.geometry}
              position={[0.04, -0.07, -0.03]}
              rotation={[1.57, 0, 0]}
            />
            <mesh
              material={materials.Blue}
              geometry={nodes.Rectangle1.geometry}
              position={[-11.77, 0.07, 0.03]}
              rotation={[1.57, 0, 0]}
            />
          </group>
          <group position={[17.45, 2.37, 0]}>
            <mesh material={materials.Magenta} geometry={nodes.Triangle.geometry} position={[2.72, 0.61, -3.31]} />
            <mesh material={materials.Magenta} geometry={nodes.Triangle1_1.geometry} position={[-2.98, 0.61, 3.31]} />
            <mesh material={materials.Red} geometry={nodes.Hexagon1_1.geometry} position={[2.98, 0.7, 2.26]} />
            <mesh material={materials.Blue} geometry={nodes.Rectangle.geometry} position={[-2.78, 0.67, -2.02]} />
            <mesh material={materials.Gray} geometry={nodes[`Rectangle-Base1`].geometry} position={[0.27, -0.7, 0.5]} />
          </group>
          <mesh material={materials.Plurble} geometry={nodes.Belt_1.geometry} position={[-1.72, -3.07, 0.84]} />
        </group>
        <mesh material={materials.Gatsby} geometry={nodes.Logo.geometry} position={[-30.29, 22.65, 3.11]} />
        <mesh material={materials.Gray} geometry={nodes.Block.geometry} position={[-31.25, -12.06, 1.56]} />
      </group>
      <mesh material={materials.Gray} geometry={nodes.Tubes.geometry} position={[-23.4, 3.04, 0.36]} />
    </group>
  )
}
