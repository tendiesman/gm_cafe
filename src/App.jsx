import * as THREE from 'three'
import React, { Fragment, Suspense, useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Reflector, Environment, Loader, OrbitControls, PointerLockControls, KeyboardControls, PositionalAudio } from '@react-three/drei'
import reactLogo from './assets/react.svg'
import './App.css'
import {Model} from './Cafe.jsx'
import { Person } from "./Person"
import { Physics } from "@react-three/rapier"
import Image2 from "/6NFcPEDO39HDxlOid6fh0KsU2bdIfuNnpUB3rlpBFJVbnA_jILc2J6SS4VAdjIZKoGT92t0TJDHxb-lEwYaeR8Iz0422nlPyUJSb.png"

function Image() {

  const texture = useLoader(THREE.TextureLoader, Image2);
  
  return (
    <mesh position={[26, 10, 15]} rotation={[0, -Math.PI / 2, 0]}>

  <planeGeometry attach="geometry" args={[15, 10]} />

  <meshLambertMaterial attach="material" map={texture} />

</mesh>
);

}

export default function App() {


/*   const ref = useRef()
  const snap = useSnapshot(state)
  //const { nodes, materials } = useGLTF("shoe-draco.glb")
  const [hovered, set] = useState(null)

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [hovered]) */

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
    
    <Canvas camera={{ fov: 50 }}>
     
      
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} /> 
      <Model scale={[5,5,5]}/>
      <Image />
      <Physics gravity={[0, 0, 0]}>
      <Person />
      </Physics>
      
      
    <PointerLockControls /> 
    </Canvas>
    </KeyboardControls>
    </div>
  )
}
