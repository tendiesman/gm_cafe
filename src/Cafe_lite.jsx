import React, { useRef, useState } from 'react'
import { useGLTF, PositionalAudio } from '@react-three/drei'

export function Litemodel(props) {
  const { nodes, materials } = useGLTF('./.gltf/Coffee_Shop-transformed.glb')
  const [clicked, setClicked] = useState(false)
  return (
    <group {...props} dispose={null}>
      <group position={[-0.35, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[319.2, 381.8, -301.9]}>
          <mesh geometry={nodes.AC_1_1.geometry} material={materials.AC_1} />
        </group>
        <group position={[-215.7, 157.6, -301.9]}>
          <mesh geometry={nodes.AC_1_2.geometry} material={materials.AC_1} />
        </group>
        <group position={[-66.1, -327, -301.9]}>
          <mesh geometry={nodes.AC_1_3.geometry} material={materials.AC_1} />
        </group>
        <group position={[-264.5, -163.75, 0]}>
          <mesh geometry={nodes.bar_table_1.geometry} material={materials.bar_table} position={[-2.5, 2.5, 0]} />
          <mesh geometry={nodes.bar_table_2.geometry} material={materials.bar_table} position={[0, 222.5, 0]} />
          <group position={[-8, 130, -60]}>
            <mesh geometry={nodes.Scene040.geometry} material={materials.bar_table} />
            <mesh geometry={nodes.Scene040_1.geometry} material={materials.bar_table_glass} />
            <group position={[-17.37, -0.09, -47.92]}>
              <mesh geometry={nodes.Scene041.geometry} material={materials.bar_table_glass} />
              <mesh geometry={nodes.Scene041_1.geometry} material={materials.bar_table} />
            </group>
          </group>
          <mesh geometry={nodes.bar_table_sink.geometry} material={materials.bar_table} position={[0, -162.5, -80.04]}>
            <mesh geometry={nodes.bar_table_sink_1.geometry} material={materials.bar_table} position={[6, 0, -11.99]} />
          </mesh>
          <mesh geometry={nodes.bar_table_sink__1_.geometry} material={materials.bar_table} position={[-123.9, 176, -60.04]} rotation={[0, 0, Math.PI / 2]}>
            <mesh geometry={nodes.bar_table_sink_1_1.geometry} material={materials.bar_table} position={[6, 0, -11.99]} />
          </mesh>
        </group>
        <group position={[-270.9, -152.25, -80]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.cashier.geometry} material={materials.cashier}>
            <mesh geometry={nodes.screen.geometry} material={materials.screen} />
            <mesh geometry={nodes.screen_2.geometry} material={materials.screen_2} />
          </mesh>
        </group>
        <group position={[-267, -346.65, -80]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Circle_005.geometry} material={materials.grinder} position={[0, 3.64, -25.59]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.grinder.geometry} material={materials.grinder} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.grinder_1.geometry} material={materials.grinder} position={[0, 15.36, -17.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.grinder_2.geometry} material={materials.grinder} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.grinder_glass.geometry} material={materials.grinder_glass} position={[0, 3.64, -1.42]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.grinder_glass_2.geometry} material={materials.grinder_glass} position={[0, 3.64, -25.41]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.grinder_glass_2_cap.geometry} material={materials.grinder} position={[0, 3.64, -32.8]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </group>
        <group position={[-270.7, -263.18, -80]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.coffee_machine_001.geometry} material={materials.coffee_machine_screen} />
          <mesh geometry={nodes.coffee_machine_002.geometry} material={materials.coffee_machine_screen} />
          <mesh geometry={nodes.Scene059.geometry} material={materials.coffee_machine} />
          <mesh geometry={nodes.Scene059_1.geometry} material={materials.glass} />
          <mesh geometry={nodes.coffee_machine_1001.geometry} material={materials.coffee_machine} position={[30, 10.65, -36.68]} />
          <mesh geometry={nodes.coffee_machine_2.geometry} material={materials.coffee_machine} position={[-30, 10.65, -36.68]} />
          <mesh geometry={nodes.coffee_machine_arrow.geometry} material={materials.coffee_machine} position={[-21.82, 8.01, -18.41]} />
          <mesh geometry={nodes.coffee_machine_bowl_1.geometry} material={materials.coffee_machine} position={[-15, 17.89, -34.03]} />
          <mesh geometry={nodes.coffee_machine_bowl_2.geometry} material={materials.coffee_machine} position={[15, 17.89, -34.03]} />
          <mesh geometry={nodes.coffee_machine_key_1.geometry} material={materials.coffee_machine_key} position={[21.97, 9.21, -28.35]} />
          <mesh geometry={nodes.coffee_machine_key_2.geometry} material={materials.coffee_machine_key} position={[0, 27.93, -40]} />
          <mesh geometry={nodes.coffee_machine_scale.geometry} material={materials.coffee_machine_scale} />
          <mesh geometry={nodes.coffee_machine_turn_1.geometry} material={materials.coffee_machine} position={[0, -20, 0]} />
          <mesh geometry={nodes.coffee_machine_turn_2.geometry} material={materials.coffee_machine} position={[-30, 27.72, -40]} />
        </group>
        <group position={[-461, -111.35, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.fridge.geometry} material={materials.fridge} position={[0, 0, 2.39]} />
          <group position={[0, 0, 2.39]}>
            <mesh geometry={nodes.Scene075.geometry} material={materials.fridge} />
            <mesh geometry={nodes.Scene075_1.geometry} material={materials.fridge} />
          </group>
          <group position={[0, -2, 2.39]}>
            <mesh geometry={nodes.Scene076.geometry} material={materials.fridge} />
            <mesh geometry={nodes.Scene076_1.geometry} material={materials.fridge} />
          </group>
          <mesh geometry={nodes.fridge_part__1_.geometry} material={materials.fridge} position={[0, 0, 32.39]} />
          <mesh geometry={nodes.fridge_part__2_.geometry} material={materials.fridge} position={[0, 0, 62.39]} />
          <mesh geometry={nodes.fridge_part__3_.geometry} material={materials.fridge} position={[0, 0, -27.61]} />
        </group>
        <group position={[-235.24, 260.8, -80]}>
          <mesh geometry={nodes.napkin_1.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1001.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1_.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2_.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3_.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4_.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5_.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6_.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7_.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-496.8, 196.15, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_12.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_11.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__11.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__11.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__11.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__11.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__11.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__11.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__11.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-496.8, 158.85, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_10.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_9.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__9.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__9.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__9.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__9.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__9.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__9.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__9.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-439.59, 54.07, -80]}>
          <mesh geometry={nodes.napkin_11.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_10.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__10.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__10.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__10.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__10.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__10.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__10.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__10.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-263.48, 61.58, -72.93]} rotation={[0, 0, 0.66]}>
          <mesh geometry={nodes.napkin_14.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_13.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__13.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__13.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__13.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__13.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__13.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__13.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__13.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-263.48, 46.55, -72.93]} rotation={[0, 0, 0.66]}>
          <mesh geometry={nodes.napkin_15.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_14.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__14.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__14.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__14.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__14.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__14.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__14.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__14.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-347.73, 413.3, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_2.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_1.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__1.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__1.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__1.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__1.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__1.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__1.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__1.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-114.8, 406.3, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_3.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_2.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__2.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__2.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__2.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__2.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__2.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__2.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__2.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[184.31, 413.3, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_4.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_3.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__3.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__3.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__3.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__3.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__3.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__3.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__3.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[426.7, 395.64, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_5.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_4.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__4.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__4.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__4.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__4.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__4.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__4.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__4.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[297.61, 179.82, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_6.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_5.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__5.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__5.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__5.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__5.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__5.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__5.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__5.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[23.63, -4.36, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_7.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_6.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__6.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__6.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__6.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__6.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__6.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__6.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__6.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[24.41, -304.71, -80]} rotation={[0, 0, 1.54]}>
          <mesh geometry={nodes.napkin_8.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_7.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__7.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__7.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__7.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__7.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__7.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__7.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__7.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-69.6, -20.7, -80]} rotation={[0, 0, -1.62]}>
          <mesh geometry={nodes.napkin_9.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_8.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__8.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__8.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__8.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__8.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__8.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__8.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__8.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-261.64, 78.93, -72.93]}>
          <mesh geometry={nodes.napkin_13.geometry} material={materials.napkin} />
          <mesh geometry={nodes.napkin_1_12.geometry} material={materials.napkin} position={[0.18, -1.25, 0]} />
          <mesh geometry={nodes.napkin_1__1__12.geometry} material={materials.napkin} position={[0, -0.92, 0]} />
          <mesh geometry={nodes.napkin_1__2__12.geometry} material={materials.napkin} position={[0, -0.59, 0]} />
          <mesh geometry={nodes.napkin_1__3__12.geometry} material={materials.napkin} position={[-0.32, -0.28, 0]} />
          <mesh geometry={nodes.napkin_1__4__12.geometry} material={materials.napkin} position={[0, 0.05, 0]} />
          <mesh geometry={nodes.napkin_1__5__12.geometry} material={materials.napkin} position={[0, 0.38, 0]} />
          <mesh geometry={nodes.napkin_1__6__12.geometry} material={materials.napkin} position={[0.29, 0.7, 0]} />
          <mesh geometry={nodes.napkin_1__7__12.geometry} material={materials.napkin} position={[0, 1.01, 0]} />
        </group>
        <group position={[-257.3, 185.5, -80]} rotation={[0, 0, -0.34]}>
          <mesh geometry={nodes.Tableware_1.geometry} material={materials.Tableware_1} />
          <mesh geometry={nodes.Tableware_1_1.geometry} material={materials.Tableware_1} position={[0, -0.25, -14.81]} />
          <mesh geometry={nodes.Tableware_1_fork.geometry} material={materials.Tableware_1} position={[2.77, 4.16, -0.17]} />
          <mesh geometry={nodes.Tableware_1_fork__1_.geometry} material={materials.Tableware_1} position={[2.77, 2.55, -0.17]} rotation={[0.07, -0.13, 0.01]} />
          <mesh geometry={nodes.Tableware_1_fork__2_.geometry} material={materials.Tableware_1} position={[2.77, 0.98, -0.17]} />
          <mesh geometry={nodes.Tableware_1_knife.geometry} material={materials.Tableware_1} position={[-7.16, 2.58, -1.74]} />
          <mesh geometry={nodes.Tableware_1_knife__1_.geometry} material={materials.Tableware_1} position={[-7.16, 0.97, -1.74]} rotation={[0, 0.24, 0]} />
          <mesh geometry={nodes.Tableware_1_knife__2_.geometry} material={materials.Tableware_1} position={[-7.16, -0.6, -1.74]} rotation={[0, 0.17, 0]} />
          <mesh geometry={nodes.Tableware_1_napkin.geometry} material={materials.Tableware_1} position={[-0.08, -4.23, -0.68]} />
          <mesh geometry={nodes.Tableware_1_spoon.geometry} material={materials.Tableware_1} position={[9.71, 5.11, -0.48]} />
          <mesh geometry={nodes.Tableware_1_spoon__1_.geometry} material={materials.Tableware_1} position={[9.71, 3.5, -0.48]} rotation={[0, -0.11, 0]} />
          <mesh geometry={nodes.Tableware_1_spoon__2_.geometry} material={materials.Tableware_1} position={[9.71, 1.93, -0.48]} rotation={[0.04, 0.11, 0]} />
        </group>
        <group position={[191.5, 183.1, -80]}>
          <mesh geometry={nodes.Tableware_1_1001.geometry} material={materials.Tableware_1} />
          <mesh geometry={nodes.Tableware_1_1_1.geometry} material={materials.Tableware_1} position={[0, -0.25, -14.81]} />
          <mesh geometry={nodes.Tableware_1_fork_1.geometry} material={materials.Tableware_1} position={[2.77, 4.16, -0.17]} />
          <mesh geometry={nodes.Tableware_1_fork__1__1.geometry} material={materials.Tableware_1} position={[2.77, 2.55, -0.17]} rotation={[0.07, -0.13, 0.01]} />
          <mesh geometry={nodes.Tableware_1_fork__2__1.geometry} material={materials.Tableware_1} position={[2.77, 0.98, -0.17]} />
          <mesh geometry={nodes.Tableware_1_knife_1.geometry} material={materials.Tableware_1} position={[-7.16, 2.58, -1.74]} />
          <mesh geometry={nodes.Tableware_1_knife__1__1.geometry} material={materials.Tableware_1} position={[-7.16, 0.97, -1.74]} rotation={[0, 0.24, 0]} />
          <mesh geometry={nodes.Tableware_1_knife__2__1.geometry} material={materials.Tableware_1} position={[-7.16, -0.6, -1.74]} rotation={[0, 0.17, 0]} />
          <mesh geometry={nodes.Tableware_1_napkin_1.geometry} material={materials.Tableware_1} position={[-0.08, -4.23, -0.68]} />
          <mesh geometry={nodes.Tableware_1_spoon_1.geometry} material={materials.Tableware_1} position={[9.71, 5.11, -0.48]} />
          <mesh geometry={nodes.Tableware_1_spoon__1__1.geometry} material={materials.Tableware_1} position={[9.71, 3.5, -0.48]} rotation={[0, -0.11, 0]} />
          <mesh geometry={nodes.Tableware_1_spoon__2__1.geometry} material={materials.Tableware_1} position={[9.71, 1.93, -0.48]} rotation={[0.04, 0.11, 0]} />
        </group>
        <group position={[332.5, 175.4, -80]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Tableware_1_2.geometry} material={materials.Tableware_1} />
          <mesh geometry={nodes.Tableware_1_1_2.geometry} material={materials.Tableware_1} position={[0, -0.25, -14.81]} />
          <mesh geometry={nodes.Tableware_1_fork_2.geometry} material={materials.Tableware_1} position={[2.77, 4.16, -0.17]} />
          <mesh geometry={nodes.Tableware_1_fork__1__2.geometry} material={materials.Tableware_1} position={[2.77, 2.55, -0.17]} rotation={[0.07, -0.13, 0.01]} />
          <mesh geometry={nodes.Tableware_1_fork__2__2.geometry} material={materials.Tableware_1} position={[2.77, 0.98, -0.17]} />
          <mesh geometry={nodes.Tableware_1_knife_2.geometry} material={materials.Tableware_1} position={[-7.16, 2.58, -1.74]} />
          <mesh geometry={nodes.Tableware_1_knife__1__2.geometry} material={materials.Tableware_1} position={[-7.16, 0.97, -1.74]} rotation={[0, 0.24, 0]} />
          <mesh geometry={nodes.Tableware_1_knife__2__2.geometry} material={materials.Tableware_1} position={[-7.16, -0.6, -1.74]} rotation={[0, 0.17, 0]} />
          <mesh geometry={nodes.Tableware_1_napkin_2.geometry} material={materials.Tableware_1} position={[-0.08, -4.23, -0.68]} />
          <mesh geometry={nodes.Tableware_1_spoon_2.geometry} material={materials.Tableware_1} position={[9.71, 5.11, -0.48]} />
          <mesh geometry={nodes.Tableware_1_spoon__1__2.geometry} material={materials.Tableware_1} position={[9.71, 3.5, -0.48]} rotation={[0, -0.11, 0]} />
          <mesh geometry={nodes.Tableware_1_spoon__2__2.geometry} material={materials.Tableware_1} position={[9.71, 1.93, -0.48]} rotation={[0.04, 0.11, 0]} />
        </group>
        <group position={[-1.2, 60.7, -100]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Tableware_1_3.geometry} material={materials.Tableware_1} />
          <mesh geometry={nodes.Tableware_1_1_3.geometry} material={materials.Tableware_1} position={[0, -0.25, -14.81]} />
          <mesh geometry={nodes.Tableware_1_fork_3.geometry} material={materials.Tableware_1} position={[2.77, 4.16, -0.17]} />
          <mesh geometry={nodes.Tableware_1_fork__1__3.geometry} material={materials.Tableware_1} position={[2.77, 2.55, -0.17]} rotation={[0.07, -0.13, 0.01]} />
          <mesh geometry={nodes.Tableware_1_fork__2__3.geometry} material={materials.Tableware_1} position={[2.77, 0.98, -0.17]} />
          <mesh geometry={nodes.Tableware_1_knife_3.geometry} material={materials.Tableware_1} position={[-7.16, 2.58, -1.74]} />
          <mesh geometry={nodes.Tableware_1_knife__1__3.geometry} material={materials.Tableware_1} position={[-7.16, 0.97, -1.74]} rotation={[0, 0.24, 0]} />
          <mesh geometry={nodes.Tableware_1_knife__2__3.geometry} material={materials.Tableware_1} position={[-7.16, -0.6, -1.74]} rotation={[0, 0.17, 0]} />
          <mesh geometry={nodes.Tableware_1_napkin_3.geometry} material={materials.Tableware_1} position={[-0.08, -4.23, -0.68]} />
          <mesh geometry={nodes.Tableware_1_spoon_3.geometry} material={materials.Tableware_1} position={[9.71, 5.11, -0.48]} />
          <mesh geometry={nodes.Tableware_1_spoon__1__3.geometry} material={materials.Tableware_1} position={[9.71, 3.5, -0.48]} rotation={[0, -0.11, 0]} />
          <mesh geometry={nodes.Tableware_1_spoon__2__3.geometry} material={materials.Tableware_1} position={[9.71, 1.93, -0.48]} rotation={[0.04, 0.11, 0]} />
        </group>
        <group position={[-84.05, -303.2, -80]} rotation={[0, 0, 0.07]}>
          <mesh geometry={nodes.Tableware_1_4.geometry} material={materials.Tableware_1} />
          <mesh geometry={nodes.Tableware_1_1_4.geometry} material={materials.Tableware_1} position={[0, -0.25, -14.81]} />
          <mesh geometry={nodes.Tableware_1_fork_4.geometry} material={materials.Tableware_1} position={[2.77, 4.16, -0.17]} />
          <mesh geometry={nodes.Tableware_1_fork__1__4.geometry} material={materials.Tableware_1} position={[2.77, 2.55, -0.17]} rotation={[0.07, -0.13, 0.01]} />
          <mesh geometry={nodes.Tableware_1_fork__2__4.geometry} material={materials.Tableware_1} position={[2.77, 0.98, -0.17]} />
          <mesh geometry={nodes.Tableware_1_knife_4.geometry} material={materials.Tableware_1} position={[-7.16, 2.58, -1.74]} />
          <mesh geometry={nodes.Tableware_1_knife__1__4.geometry} material={materials.Tableware_1} position={[-7.16, 0.97, -1.74]} rotation={[0, 0.24, 0]} />
          <mesh geometry={nodes.Tableware_1_knife__2__4.geometry} material={materials.Tableware_1} position={[-7.16, -0.6, -1.74]} rotation={[0, 0.17, 0]} />
          <mesh geometry={nodes.Tableware_1_napkin_4.geometry} material={materials.Tableware_1} position={[-0.08, -4.23, -0.68]} />
          <mesh geometry={nodes.Tableware_1_spoon_4.geometry} material={materials.Tableware_1} position={[9.71, 5.11, -0.48]} />
          <mesh geometry={nodes.Tableware_1_spoon__1__4.geometry} material={materials.Tableware_1} position={[9.71, 3.5, -0.48]} rotation={[0, -0.11, 0]} />
          <mesh geometry={nodes.Tableware_1_spoon__2__4.geometry} material={materials.Tableware_1} position={[9.71, 1.93, -0.48]} rotation={[0.04, 0.11, 0]} />
        </group>
        <group position={[-241, -234.05, -50.8]}>
          <mesh geometry={nodes.text_c.geometry} material={materials.text} position={[0, 40, 0.31]} />
          <mesh geometry={nodes.text_e.geometry} material={materials.text} position={[0, -60, 1.4]} />
          <mesh geometry={nodes.text_e__1_.geometry} material={materials.text} position={[0, -40, 1.4]} />
          <mesh geometry={nodes.text_f.geometry} material={materials.text} position={[0, -20, 0]} />
          <mesh geometry={nodes.text_f__1_.geometry} material={materials.text} />
          <mesh geometry={nodes.text_o.geometry} material={materials.text} position={[0, 20, 0.8]} />
        </group>
        <group position={[-365.3, -501.2, -213.1]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.text_c_1.geometry} material={materials.text} position={[0, 40, 0.31]} />
          <mesh geometry={nodes.text_e_1.geometry} material={materials.text} position={[0, -60, 1.4]} />
          <mesh geometry={nodes.text_e__1__1.geometry} material={materials.text} position={[0, -40, 1.4]} />
          <mesh geometry={nodes.text_f_1.geometry} material={materials.text} position={[0, -20, 0]} />
          <mesh geometry={nodes.text_f__1__1.geometry} material={materials.text} />
          <mesh geometry={nodes.text_o_1.geometry} material={materials.text} position={[0, 20, 0.8]} />
        </group>
        <group position={[-400, -504.9, -282.9]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.vent_1.geometry} material={materials.vent} position={[40, -100, 0]} />
          <mesh geometry={nodes.vent_2.geometry} material={materials.vent} position={[40, -100, 0]} />
          <mesh geometry={nodes.vent_2__1_.geometry} material={materials.vent} position={[40, -200, 0]} />
          <mesh geometry={nodes.vent_2__2_.geometry} material={materials.vent} position={[40, -300, 0]} />
          <mesh geometry={nodes.vent_2__3_.geometry} material={materials.vent} position={[40, -400, 0]} />
          <mesh geometry={nodes.vent_2__4_.geometry} material={materials.vent} position={[40, -500, 0]} />
          <mesh geometry={nodes.vent_2__5_.geometry} material={materials.vent} position={[40, -600, 0]} />
          <mesh geometry={nodes.vent_3.geometry} material={materials.vent} position={[48, -50, 0]} />
          <mesh geometry={nodes.vent_3__1_.geometry} material={materials.vent} position={[48, -250, 0]} />
          <mesh geometry={nodes.vent_3__2_.geometry} material={materials.vent} position={[48, -450, 0]} />
        </group>
        <group position={[585.7, 451.9, -282.9]} rotation={[-Math.PI, 0, 0]} scale={-1}>
          <mesh geometry={nodes.vent_1_1.geometry} material={materials.vent} position={[40, -100, 0]} />
          <mesh geometry={nodes.vent_2_1.geometry} material={materials.vent} position={[40, -100, 0]} />
          <mesh geometry={nodes.vent_2__1__1.geometry} material={materials.vent} position={[40, -200, 0]} />
          <mesh geometry={nodes.vent_2__2__1.geometry} material={materials.vent} position={[40, -300, 0]} />
          <mesh geometry={nodes.vent_2__3__1.geometry} material={materials.vent} position={[40, -400, 0]} />
          <mesh geometry={nodes.vent_2__4__1.geometry} material={materials.vent} position={[40, -500, 0]} />
          <mesh geometry={nodes.vent_2__5__1.geometry} material={materials.vent} position={[40, -600, 0]} />
          <mesh geometry={nodes.vent_2__6_.geometry} material={materials.vent} position={[40, -700, 0]} />
          <mesh geometry={nodes.vent_2__7_.geometry} material={materials.vent} position={[40, -800, 0]} />
          <mesh geometry={nodes.vent_2__8_.geometry} material={materials.vent} position={[40, -900, 0]} scale={[1, 0.9, 1]} />
          <mesh geometry={nodes.vent_3_1.geometry} material={materials.vent} position={[48, -50, 0]} />
          <mesh geometry={nodes.vent_3__1__1.geometry} material={materials.vent} position={[48, -250, 0]} />
          <mesh geometry={nodes.vent_3__2__1.geometry} material={materials.vent} position={[48, -418.6, 0]} />
          <mesh geometry={nodes.vent_3__3_.geometry} material={materials.vent} position={[48, -526, 0]} />
          <mesh geometry={nodes.vent_3__4_.geometry} material={materials.vent} position={[48, -902.2, 0]} />
        </group>
        <mesh geometry={nodes.Bag_1.geometry} material={materials.Coffe_bags} position={[-449.6, -424.6, 0]} />
        <mesh geometry={nodes.Bag_1__1_.geometry} material={materials.Coffe_bags} position={[-406.2, -442.9, 0]} rotation={[0, 0, 2.21]} />
        <mesh geometry={nodes.Bag_1__2_.geometry} material={materials.Coffe_bags} position={[-476.7, -331.9, 0]} rotation={[0, 0, -1.92]} />
        <mesh geometry={nodes.Bag_1__3_.geometry} material={materials.Coffe_bags} position={[-476.7, -374.3, 0]} rotation={[0, 0, -1.29]} />
        <mesh geometry={nodes.Bag_1__4_.geometry} material={materials.Coffe_bags} position={[218.6, -466.1, 0]} />
        <mesh geometry={nodes.Bag_1__5_.geometry} material={materials.Coffe_bags} position={[262.2, -413.8, 0]} rotation={[0, 0, 2.21]} />
        <mesh geometry={nodes.Bag_2.geometry} material={materials.Coffe_bags} position={[-443.5, -473.1, 0]} />
        <mesh geometry={nodes.Bag_2__1_.geometry} material={materials.Coffe_bags} position={[256.5, -449.6, 0]} />
        <mesh geometry={nodes.bin.geometry} material={materials.rack} position={[-328, -18.6, 0]} />
        <mesh geometry={nodes.Birds.geometry} material={materials.Birds} position={[259.5, -226.6, -80.75]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Birds__1_.geometry} material={materials.Birds} position={[259.5, -328.1, -180.8]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Board__1_.geometry} material={materials.Board} position={[-478.7, -249.9, -133.6]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Book_01.geometry} material={materials.Books} position={[260.2, -207.8, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_01__1_.geometry} material={materials.Books} position={[260.2, -239.8, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_01__2_.geometry} material={materials.Books} position={[260.2, -262.4, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_02.geometry} material={materials.Books} position={[260.2, -211.7, -130.6]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_02__1_.geometry} material={materials.Books} position={[260.2, -243.7, -130.6]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_02__2_.geometry} material={materials.Books} position={[260.2, -266.3, -130.6]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_02__3_.geometry} material={materials.Books} position={[-137.3, 504.82, -47]} rotation={[0, 0, -1.9]} />
        <mesh geometry={nodes.Book_03.geometry} material={materials.Books} position={[260.2, -195.1, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_03__1_.geometry} material={materials.Books} position={[260.2, -227.1, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_04.geometry} material={materials.Books} position={[260.2, -215.29, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_04__1_.geometry} material={materials.Books} position={[260.2, -247.29, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_04__2_.geometry} material={materials.Books} position={[260.2, -269.89, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_05.geometry} material={materials.Books} position={[260.2, -213.3, -130.76]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_05__1_.geometry} material={materials.Books} position={[260.2, -245.3, -130.76]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_05__2_.geometry} material={materials.Books} position={[260.2, -267.9, -130.76]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_06.geometry} material={materials.Books} position={[260.2, -190.6, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_06__1_.geometry} material={materials.Books} position={[260.2, -222.6, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_06__2_.geometry} material={materials.Books} position={[208.5, 518.9, -47]} rotation={[0, 0, 1.62]} />
        <mesh geometry={nodes.Book_07.geometry} material={materials.Books} position={[263, -209.8, -130.95]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_07__1_.geometry} material={materials.Books} position={[263, -241.8, -130.95]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_07__2_.geometry} material={materials.Books} position={[263, -264.4, -130.95]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_08.geometry} material={materials.Books} position={[260.2, -199.7, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_08__1_.geometry} material={materials.Books} position={[260.2, -231.7, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_08__2_.geometry} material={materials.Books} position={[260.2, -254.3, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_09.geometry} material={materials.Books} position={[260.2, -217.19, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_09__1_.geometry} material={materials.Books} position={[260.2, -249.19, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_09__2_.geometry} material={materials.Books} position={[260.2, -271.79, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_10.geometry} material={materials.Books} position={[260.2, -204.4, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_10__1_.geometry} material={materials.Books} position={[260.2, -236.4, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Book_10__2_.geometry} material={materials.Books} position={[260.2, -259, -130.93]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Box.geometry} material={materials.Box} position={[-485.6, -320.5, -131.04]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_1.geometry} material={materials.Box} position={[0, -5.65, -12.47]} rotation={[-0.96, 0, 0]} />
        </mesh>
        <mesh geometry={nodes.Box_2.geometry} material={materials.Box} position={[-485.6, -479.8, -131.04]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__10_.geometry} material={materials.Box} position={[-485.6, -439.2, -180.82]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_3.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__11_.geometry} material={materials.Box} position={[259.6, -455.2, -131.04]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_5.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__12_.geometry} material={materials.Box} position={[259.6, -441.4, -131.04]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_6.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__13_.geometry} material={materials.Box} position={[259.6, -411.7, -131.04]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_7.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__14_.geometry} material={materials.Box} position={[259.6, -359.6, -80.64]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_8.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__15_.geometry} material={materials.Box} position={[259.6, -291.8, -80.64]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_9.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__16_.geometry} material={materials.Box} position={[259.6, -342.1, -80.64]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_10.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__17_.geometry} material={materials.Box} position={[259.6, -306.3, -80.64]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_11.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box_2__9_.geometry} material={materials.Box} position={[-485.6, -470.93, -180.82]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_2.geometry} material={materials.Box} position={[0, -5.65, -12.47]} />
        </mesh>
        <mesh geometry={nodes.Box__3_.geometry} material={materials.Box} position={[259.6, -426.4, -131.04]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Box_1_1_4.geometry} material={materials.Box} position={[0, -5.65, -12.47]} rotation={[-0.96, 0, 0]} />
        </mesh>
        <mesh geometry={nodes.C_Cup.geometry} material={materials.C_Cup} position={[-487.23, -415.8, -130.84]}>
          <mesh geometry={nodes.C_Cup_1_1.geometry} material={materials.C_Cup} position={[0, 0, -11.41]} />
        </mesh>
        <mesh geometry={nodes.C_Cup_2.geometry} material={materials.C_Cup} position={[-487.23, -426.9, -130.84]} />
        <mesh geometry={nodes.C_Cup_2__10_.geometry} material={materials.C_Cup} position={[-487.23, -374.82, -202.76]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__11_.geometry} material={materials.C_Cup} position={[-487.23, -364.67, -202.76]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__12_.geometry} material={materials.C_Cup} position={[-487.23, -354.3, -202.76]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__13_.geometry} material={materials.C_Cup} position={[-487.23, -344.38, -202.76]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__14_.geometry} material={materials.C_Cup} position={[-487.23, -334.54, -202.76]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__15_.geometry} material={materials.C_Cup} position={[-487.23, -324.56, -202.76]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__16_.geometry} material={materials.C_Cup} position={[-487.23, -328.98, -213.59]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__17_.geometry} material={materials.C_Cup} position={[-487.23, -339.05, -213.59]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__18_.geometry} material={materials.C_Cup} position={[-487.23, -348.93, -213.59]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__19_.geometry} material={materials.C_Cup} position={[-487.23, -359.04, -213.59]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__1_.geometry} material={materials.C_Cup} position={[-487.23, -320.4, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__20_.geometry} material={materials.C_Cup} position={[-487.23, -369.19, -213.59]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__21_.geometry} material={materials.C_Cup} position={[-487.23, -379.19, -213.59]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__22_.geometry} material={materials.C_Cup} position={[-487.23, -374.2, -224.39]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__23_.geometry} material={materials.C_Cup} position={[-487.23, -364.25, -224.39]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__24_.geometry} material={materials.C_Cup} position={[-487.23, -354.27, -224.39]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__25_.geometry} material={materials.C_Cup} position={[-487.23, -344.1, -224.39]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__26_.geometry} material={materials.C_Cup} position={[-487.23, -333.77, -224.39]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__27_.geometry} material={materials.C_Cup} position={[-273.8, -54.15, -110]} />
        <mesh geometry={nodes.C_Cup_2__28_.geometry} material={materials.C_Cup} position={[-273.8, -68.96, -110]} />
        <mesh geometry={nodes.C_Cup_2__29_.geometry} material={materials.C_Cup} position={[-273.8, -80.1, -110]} />
        <mesh geometry={nodes.C_Cup_2__2_.geometry} material={materials.C_Cup} position={[-487.23, -330.21, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__30_.geometry} material={materials.C_Cup} position={[-273.8, -41.45, -110]} scale={1.1} />
        <mesh geometry={nodes.C_Cup_2__31_.geometry} material={materials.C_Cup} position={[-273.8, -29.55, -110]} scale={1.2} />
        <mesh geometry={nodes.C_Cup_2__32_.geometry} material={materials.C_Cup} position={[-253.9, 54.9, -99.7]} scale={1.2} />
        <mesh geometry={nodes.C_Cup_2__3_.geometry} material={materials.C_Cup} position={[-487.23, -340.2, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__4_.geometry} material={materials.C_Cup} position={[-487.23, -350.29, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__5_.geometry} material={materials.C_Cup} position={[-487.23, -360.17, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__6_.geometry} material={materials.C_Cup} position={[-487.23, -370.14, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__7_.geometry} material={materials.C_Cup} position={[-487.23, -380.05, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__8_.geometry} material={materials.C_Cup} position={[-487.23, -390.2, -191.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup_2__9_.geometry} material={materials.C_Cup} position={[-487.23, -385.07, -202.76]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.C_Cup__1_.geometry} material={materials.C_Cup} position={[-273.8, -93.15, -110]}>
          <mesh geometry={nodes.C_Cup_1_1_1.geometry} material={materials.C_Cup} position={[0, 0, -11.41]} />
        </mesh>
        <mesh geometry={nodes.cake_3__1_.geometry} material={materials.cake_3} position={[-269.17, 6.77, -62.55]} rotation={[0, 0, 1.91]} scale={0.81} />
        <mesh geometry={nodes.cake_3__2__2.geometry} material={materials.cake_3} position={[-329.3, 387.28, -80.25]} rotation={[0, 0, 1.91]} scale={0.81} />
        <mesh geometry={nodes.cake_4__1_.geometry} material={materials.cake_4} position={[-275.59, -11.36, -90.77]} rotation={[0, 0, -1.8]}>
          <mesh geometry={nodes.Tableware_2_3__1__1.geometry} material={materials.Tableware_2} position={[6.04, 0.06, -0.13]} />
        </mesh>
        <mesh geometry={nodes.cake_4__2_.geometry} material={materials.cake_4} position={[-278.26, -95.71, -61.97]} rotation={[0, 0, 1.34]}>
          <mesh geometry={nodes.Tableware_2_3__2__1.geometry} material={materials.Tableware_2} position={[6.04, 0.06, -0.13]} />
        </mesh>
        <mesh geometry={nodes.cash__1_.geometry} material={materials.cash} position={[-252.66, -186.68, -80]}>
          <mesh geometry={nodes.cash_1.geometry} material={materials.cash} position={[0, 0, -11.56]} rotation={[0, -0.37, 0]}>
            <mesh geometry={nodes.cash_2.geometry} material={materials.cash} position={[2.53, 0, -0.62]} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.cash_box.geometry} material={materials.cashier} position={[-268, -121.35, -80]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.cash_box_1.geometry} material={materials.cash_box_1} position={[2.09, 5.26, -0.98]} />
          <mesh geometry={nodes.Cube_000.geometry} material={materials.check} position={[-1.06, 3.05, -7.39]} />
        </mesh>
        <mesh geometry={nodes.Chair.geometry} material={materials.chair} position={[-91.3, -74.4, 0]} />
        <mesh geometry={nodes.Chair__1_.geometry} material={materials.chair} position={[-91.3, -382.1, 0]} />
        <mesh geometry={nodes.Chair__2_.geometry} material={materials.chair} position={[-91.3, -245.4, 0]} rotation={[0, 0, 3.02]} />
        <mesh geometry={nodes.Chair__3_.geometry} material={materials.chair} position={[130.1, 400, 0]} rotation={[0, 0, -1.68]} />
        <mesh geometry={nodes.Chair__4_.geometry} material={materials.chair} position={[273.1, 400, 0]} rotation={[0, 0, 1.66]} />
        <mesh geometry={nodes.Chair__5_.geometry} material={materials.chair} position={[209.6, 321.6, 0]} rotation={[0, 0, -0.01]} />
        <mesh geometry={nodes.Chair_2.geometry} material={materials.chair_2} position={[-98.3, 70.6, 0]} rotation={[0, 0, -3.02]} />
        <mesh geometry={nodes.Chair_2__1_.geometry} material={materials.chair_2} position={[-181.1, 220.4, 0]} rotation={[0, 0, 1.69]} />
        <mesh geometry={nodes.Chair_2__2_.geometry} material={materials.chair_2} position={[501.4, 398.9, 0]} rotation={[0, 0, 1.51]} />
        <mesh geometry={nodes.Chair_2__3_.geometry} material={materials.chair_2} position={[420.3, 321.1, 0]} rotation={[0, 0, -0.07]} />
        <mesh geometry={nodes.Chair_2__4_.geometry} material={materials.chair_2} position={[353.3, 401.6, 0]} rotation={[0, 0, -1.54]} />
        <mesh geometry={nodes.chair_cafe.geometry} material={materials.chair_cafe} position={[-308.9, 211.4, 0]} />
        <mesh geometry={nodes.chair_cafe__10_.geometry} material={materials.chair_cafe} position={[316.4, 119.8, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__11_.geometry} material={materials.chair_cafe} position={[256.9, 112.1, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__12_.geometry} material={materials.chair_cafe} position={[209.7, 116.4, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__13_.geometry} material={materials.chair_cafe} position={[209.7, 223.3, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__14_.geometry} material={materials.chair_cafe} position={[259.8, 232.9, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__15_.geometry} material={materials.chair_cafe} position={[318, 206.2, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__16_.geometry} material={materials.chair_cafe} position={[375.8, 219.7, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__1_.geometry} material={materials.chair_cafe} position={[-414.4, 416.1, 0]} />
        <mesh geometry={nodes.chair_cafe__2_.geometry} material={materials.chair_cafe} position={[-196.3, 416.1, 0]} />
        <mesh geometry={nodes.chair_cafe__3_.geometry} material={materials.chair_cafe} position={[-268.3, 416.1, 0]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.chair_cafe__4_.geometry} material={materials.chair_cafe} position={[-70.4, 416.1, 0]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.chair_cafe__5_.geometry} material={materials.chair_cafe} position={[-356.8, 366.2, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__6_.geometry} material={materials.chair_cafe} position={[-130.7, 366.2, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.chair_cafe__7_.geometry} material={materials.chair_cafe} position={[157.4, 174, 0]} />
        <mesh geometry={nodes.chair_cafe__8_.geometry} material={materials.chair_cafe} position={[426.3, 174, 0]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.chair_cafe__9_.geometry} material={materials.chair_cafe} position={[372.5, 119.8, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Clock_1.geometry} material={materials.Clock_1} position={[412, -0.7, -219.7]} scale={2}>
          <mesh geometry={nodes.Clock_1_1.geometry} material={materials.Clock_1} position={[0, 5.13, 0]} rotation={[0, -0.77, 0]} />
          <mesh geometry={nodes.Clock_1_2.geometry} material={materials.Clock_1} position={[0, 5.3, 0]} rotation={[-Math.PI, 0.66, -Math.PI]} />
          <mesh geometry={nodes.Clock_1_3.geometry} material={materials.Clock_1} position={[0, 5.43, 0]} rotation={[Math.PI, -0.23, Math.PI]} />
        </mesh>
        <mesh geometry={nodes.Clock_1__1_.geometry} material={materials.Clock_1} position={[-503.7, -0.7, -219.7]} rotation={[0, 0, -Math.PI / 2]} scale={2}>
          <mesh geometry={nodes.Clock_1_1_1.geometry} material={materials.Clock_1} position={[0, 5.13, 0]} rotation={[0, -0.77, 0]} />
          <mesh geometry={nodes.Clock_1_2_1.geometry} material={materials.Clock_1} position={[0, 5.3, 0]} rotation={[-Math.PI, 0.66, -Math.PI]} />
          <mesh geometry={nodes.Clock_1_3_1.geometry} material={materials.Clock_1} position={[0, 5.43, 0]} rotation={[Math.PI, -0.23, Math.PI]} />
        </mesh>
        <mesh geometry={nodes.Coffe.geometry} material={materials.Coffe} position={[-487.23, -449.8, -130.84]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__11_.geometry} material={materials.Coffe} position={[257.97, -394.9, -130.84]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__17_.geometry} material={materials.Coffe} position={[257.97, -323.3, -80.5]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__1_.geometry} material={materials.Coffe} position={[-487.23, -465, -130.84]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__2_.geometry} material={materials.Coffe} position={[-487.23, -336.4, -130.84]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__3_.geometry} material={materials.Coffe} position={[-487.23, -354, -130.84]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__4_.geometry} material={materials.Coffe} position={[-487.23, -369.8, -130.84]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__5_.geometry} material={materials.Coffe} position={[-487.23, -387, -130.84]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__7_.geometry} material={materials.Coffe} position={[-487.23, -453.6, -181.8]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Coffe__8_.geometry} material={materials.Coffe} position={[-487.23, -422.9, -181.8]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.croissant_1.geometry} material={materials.croissant} position={[-265.4, 63.65, -100]} />
        <mesh geometry={nodes.croissant_1__1_.geometry} material={materials.croissant} position={[-117.86, 8.27, -80]} />
        <mesh geometry={nodes.croissant_1__2_.geometry} material={materials.croissant} position={[-276.89, -63.72, -91.07]} scale={0.71} />
        <mesh geometry={nodes.croissant_1__3_.geometry} material={materials.croissant} position={[-277.29, -39.3, -91.07]} rotation={[0, 0, 0.74]} scale={0.71} />
        <mesh geometry={nodes.croissant_1__4_.geometry} material={materials.croissant} position={[-270.54, 21.26, -110.6]} rotation={[0, 0, -0.74]} scale={0.71} />
        <mesh geometry={nodes.croissant_1__5_.geometry} material={materials.croissant} position={[-266.6, -66.5, -62.1]} rotation={[0, 0, 0.74]} scale={0.71} />
        <mesh geometry={nodes.Cup_pot.geometry} material={materials.Cup_pot} position={[-336.67, 427.73, -80]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Cup_leaves.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__10_.geometry} material={materials.Cup_pot} position={[2, -309.3, -100]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_15.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__11_.geometry} material={materials.Cup_pot} position={[-3.8, -63.2, -100]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_10.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__12_.geometry} material={materials.Cup_pot} position={[-3.8, 87, -100]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_11.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__13_.geometry} material={materials.Cup_pot} position={[-165, 286.3, -100]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_16.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__14_.geometry} material={materials.Cup_pot} position={[-254.3, 286.3, -100]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_12.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__15_.geometry} material={materials.Cup_pot} position={[-331.3, 286.3, -100]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_13.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__16_.geometry} material={materials.Cup_pot} position={[-258.6, 258.5, -80]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Cup_leaves_14.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__1_.geometry} material={materials.Cup_pot} position={[-141.6, 427.73, -80]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Cup_leaves_1.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__2_.geometry} material={materials.Cup_pot} position={[216.8, 427.73, -80]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Cup_leaves_2.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__3_.geometry} material={materials.Cup_pot} position={[414.1, 422.5, -80]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Cup_leaves_3.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__4_.geometry} material={materials.Cup_pot} position={[246.83, 175.4, -80]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Cup_leaves_4.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__5_.geometry} material={materials.Cup_pot} position={[314.6, 167.5, -80]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Cup_leaves_5.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__6_.geometry} material={materials.Cup_pot} position={[25.6, 23.4, -80]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_6.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__7_.geometry} material={materials.Cup_pot} position={[25.6, -330.7, -80]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_7.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__8_.geometry} material={materials.Cup_pot} position={[-52.5, -307.7, -80]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_8.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cup_pot__9_.geometry} material={materials.Cup_pot} position={[-65.1, 2.5, -80]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Cup_leaves_9.geometry} material={materials.Cup_leave} />
        </mesh>
        <mesh geometry={nodes.Cutting_board_1.geometry} material={materials.Cutting_board} position={[-272.3, -300.1, -46]} rotation={[0, 0, 0.63]} />
        <mesh geometry={nodes.Cutting_board_2.geometry} material={materials.Cutting_board} position={[-357.1, 2.3, -60]} />
        <mesh geometry={nodes.Cutting_board_3.geometry} material={materials.Cutting_board} position={[-272.3, -245.78, -46]} rotation={[0, 0, 0.63]} />
        <mesh geometry={nodes.Elephant.geometry} material={materials.Elephant} position={[259.5, -226.6, -180.78]} rotation={[0, 0, 1.15]} />
        <mesh geometry={nodes.Elephant__1_.geometry} material={materials.Elephant} position={[259.5, -420.9, -180.78]} rotation={[-Math.PI, 0, -1.97]} scale={-1} />
        <mesh geometry={nodes.Hanger.geometry} material={materials.Hanger} position={[423.5, 0, -159.42]} />
        <mesh geometry={nodes.Hanger__1_.geometry} material={materials.Hanger} position={[-500, 378.9, -159.42]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh onClick={(e) => (e.stopPropagation(), setClicked(!clicked), console.log("clicked"))} geometry={nodes.Laptop_1.geometry} material={materials.Laptop} position={[-233.4, 230.3, -80]} rotation={[0, 0, -Math.PI / 2]}>
          <group position={[-0.93, -11.24, -2.08]} rotation={[-0.15, 0, 0]}>
            <mesh geometry={nodes.Scene087.geometry} material={materials.Laptop} />
            <mesh geometry={nodes.Scene087_1.geometry} material={materials.Laptop_screen} />
            {clicked === true && <PositionalAudio autoplay loop url="/sunsetvibes.mp3" distance={30}/>}
          </group>
        </mesh>
        <mesh geometry={nodes.Laptop_1__1_.geometry} material={materials.Laptop} position={[-320.2, -10.1, -60]} rotation={[0, 0, 2.86]}>
          <group position={[-0.93, -11.24, -2.08]}>
            <mesh geometry={nodes.Scene087.geometry} material={materials.Laptop} />
            <mesh geometry={nodes.Scene087_1.geometry} material={materials.Laptop_screen} />
          </group>
        </mesh>
        <mesh geometry={nodes.Leaf.geometry} material={materials.Leaf} position={[259.5, -422.7, -80.75]} rotation={[0, 0, 0.97]} />
        <mesh geometry={nodes.Menu.geometry} material={materials.Menu} position={[373, 172.2, -80]} rotation={[0.02, 0, 0]} />
        <mesh geometry={nodes.Menu__1_.geometry} material={materials.Menu} position={[-133.4, 405.6, -80]} rotation={[-0.02, 0, Math.PI]} />
        <mesh geometry={nodes.Menu__2_.geometry} material={materials.Menu} position={[-372.1, 417.5, -80]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Menu__3_.geometry} material={materials.Menu} position={[0.9, 26.3, -100]} rotation={[0.02, 0, 0.26]} />
        <mesh geometry={nodes.Menu__4_.geometry} material={materials.Menu} position={[0.9, -14, -100]} rotation={[0.02, 0, -0.14]} />
        <mesh geometry={nodes.Menu__5_.geometry} material={materials.Menu} position={[-92.3, -14, -80]} rotation={[0.02, 0, -0.14]} />
        <mesh geometry={nodes.Menu__6_.geometry} material={materials.Menu} position={[100.7, -316.4, -80]} rotation={[0.02, 0, -0.14]} />
        <mesh geometry={nodes.Microwave.geometry} material={materials.Microwave_1} position={[-474.7, 5.5, -60]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Mocrowave_1_1.geometry} material={materials.Microwave_1} position={[-24.32, 17.21, 0]} />
        </mesh>
        <mesh geometry={nodes.Milk_box.geometry} material={materials.Milk_box} position={[-432.2, -149.4, -151.35]} />
        <mesh geometry={nodes.Milk_box__10_.geometry} material={materials.Milk_box} position={[-452.8, -122.3, -151.35]} />
        <mesh geometry={nodes.Milk_box__11_.geometry} material={materials.Milk_box} position={[-462.9, -122.3, -151.35]} />
        <mesh geometry={nodes.Milk_box__12_.geometry} material={materials.Milk_box} position={[-432.2, -107.6, -151.35]} />
        <mesh geometry={nodes.Milk_box__13_.geometry} material={materials.Milk_box} position={[-442.8, -107.6, -151.35]} />
        <mesh geometry={nodes.Milk_box__14_.geometry} material={materials.Milk_box} position={[-452.8, -107.6, -151.35]} />
        <mesh geometry={nodes.Milk_box__15_.geometry} material={materials.Milk_box} position={[-462.9, -107.6, -151.35]} />
        <mesh geometry={nodes.Milk_box__16_.geometry} material={materials.Milk_box} position={[-432.2, -95.3, -151.35]} />
        <mesh geometry={nodes.Milk_box__17_.geometry} material={materials.Milk_box} position={[-442.8, -95.3, -151.35]} />
        <mesh geometry={nodes.Milk_box__18_.geometry} material={materials.Milk_box} position={[-452.8, -95.3, -151.35]} />
        <mesh geometry={nodes.Milk_box__19_.geometry} material={materials.Milk_box} position={[-462.9, -95.3, -151.35]} />
        <mesh geometry={nodes.Milk_box__1_.geometry} material={materials.Milk_box} position={[-442.8, -149.4, -151.35]} />
        <mesh geometry={nodes.Milk_box__20_.geometry} material={materials.Milk_box} position={[-432.2, -83.9, -151.35]} />
        <mesh geometry={nodes.Milk_box__21_.geometry} material={materials.Milk_box} position={[-442.8, -83.9, -151.35]} />
        <mesh geometry={nodes.Milk_box__22_.geometry} material={materials.Milk_box} position={[-452.8, -83.9, -151.35]} />
        <mesh geometry={nodes.Milk_box__23_.geometry} material={materials.Milk_box} position={[-462.9, -83.9, -151.35]} />
        <mesh geometry={nodes.Milk_box__24_.geometry} material={materials.Milk_box} position={[-432.2, -72.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__25_.geometry} material={materials.Milk_box} position={[-442.8, -72.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__26_.geometry} material={materials.Milk_box} position={[-452.8, -72.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__27_.geometry} material={materials.Milk_box} position={[-462.9, -72.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__28_.geometry} material={materials.Milk_box} position={[-432.2, -59.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__29_.geometry} material={materials.Milk_box} position={[-442.8, -59.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__2_.geometry} material={materials.Milk_box} position={[-452.8, -149.4, -151.35]} />
        <mesh geometry={nodes.Milk_box__30_.geometry} material={materials.Milk_box} position={[-452.8, -59.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__31_.geometry} material={materials.Milk_box} position={[-462.9, -59.5, -151.35]} />
        <mesh geometry={nodes.Milk_box__32_.geometry} material={materials.Milk_box} position={[-432.2, -162.1, -151.35]} />
        <mesh geometry={nodes.Milk_box__33_.geometry} material={materials.Milk_box} position={[-442.8, -162.1, -151.35]} />
        <mesh geometry={nodes.Milk_box__34_.geometry} material={materials.Milk_box} position={[-452.8, -162.1, -151.35]} />
        <mesh geometry={nodes.Milk_box__35_.geometry} material={materials.Milk_box} position={[-462.9, -162.1, -151.35]} />
        <mesh geometry={nodes.Milk_box__3_.geometry} material={materials.Milk_box} position={[-462.9, -149.4, -151.35]} />
        <mesh geometry={nodes.Milk_box__4_.geometry} material={materials.Milk_box} position={[-432.2, -136.2, -151.35]} />
        <mesh geometry={nodes.Milk_box__5_.geometry} material={materials.Milk_box} position={[-442.8, -136.2, -151.35]} />
        <mesh geometry={nodes.Milk_box__6_.geometry} material={materials.Milk_box} position={[-452.8, -136.2, -151.35]} />
        <mesh geometry={nodes.Milk_box__7_.geometry} material={materials.Milk_box} position={[-462.9, -136.2, -151.35]} />
        <mesh geometry={nodes.Milk_box__8_.geometry} material={materials.Milk_box} position={[-432.2, -122.3, -151.35]} />
        <mesh geometry={nodes.Milk_box__9_.geometry} material={materials.Milk_box} position={[-442.8, -122.3, -151.35]} />
        <group position={[-110.4, -499.9, -163.2]}>
          <mesh geometry={nodes.Scene008.geometry} material={materials.picture} />
          <mesh geometry={nodes.Scene008_1.geometry} material={materials.picture_glass} />
        </group>
        <group position={[87.4, -499.9, -163.2]}>
          <mesh geometry={nodes.Scene009.geometry} material={materials.picture} />
          <mesh geometry={nodes.Scene009_1.geometry} material={materials.picture_glass} />
        </group>
        <group position={[191, -499.9, -163.2]}>
          <mesh geometry={nodes.Scene010.geometry} material={materials.picture} />
          <mesh geometry={nodes.Scene010_1.geometry} material={materials.picture_glass} />
        </group>
        <group position={[-9.7, -499.9, -163.2]}>
          <mesh geometry={nodes.Scene011.geometry} material={materials.picture} />
          <mesh geometry={nodes.Scene011_1.geometry} material={materials.picture_glass} />
        </group>
        <group position={[-499.3, 125.05, -163.2]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene011.geometry} material={materials.picture} />
          <mesh geometry={nodes.Scene011_1.geometry} material={materials.picture_glass} />
        </group>
        <group position={[-210, -499.9, -163.2]}>
          <mesh geometry={nodes.Scene012.geometry} material={materials.picture} />
          <mesh geometry={nodes.Scene012_1.geometry} material={materials.picture_glass} />
        </group>
        <group position={[-499.3, 229.85, -163.2]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene012.geometry} material={materials.picture} />
          <mesh geometry={nodes.Scene012_1.geometry} material={materials.picture_glass} />
        </group>
        <mesh geometry={nodes.Pillow_1_1.geometry} material={materials.Pillow_1} position={[269.7, 505.51, -42.1]} />
        <mesh geometry={nodes.Pillow_1_1__1_.geometry} material={materials.Pillow_1} position={[-269, 506, -42.1]} rotation={[0, 0, 0.4]} />
        <mesh geometry={nodes.Pillow_1_1__2_.geometry} material={materials.Pillow_1} position={[-357.5, 506, -42.1]} />
        <mesh geometry={nodes.Pillow_1_2.geometry} material={materials.Pillow_1} position={[485.6, 515.75, -46.3]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Pillow_1_2__1_.geometry} material={materials.Pillow_1} position={[-116.6, 508.8, -46.3]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Pillow_1_3.geometry} material={materials.Pillow_1} position={[379, 521.8, -45.3]} rotation={[0, 0, 2.85]} />
        <mesh geometry={nodes.Pillow_1_3__1_.geometry} material={materials.Pillow_1} position={[-195.8, 519.3, -45.3]} rotation={[0, 0, 3.02]} />
        <mesh geometry={nodes.Pillow_1_4.geometry} material={materials.Pillow_1} position={[171.9, 507.1, -45]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Pillow_1_4__1_.geometry} material={materials.Pillow_1} position={[-428.35, 502, -45]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.rack.geometry} material={materials.rack} position={[249, -183.1, 0]}>
          <mesh geometry={nodes.rack_1_6.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1__6.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2__6.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3__6.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.rack_1__1__7.geometry} material={materials.rack} position={[-477.3, 279.05, 0]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.rack_1__2__7.geometry} material={materials.rack} position={[-477.3, 179.05, 0]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.rack_1__3__7.geometry} material={materials.rack} position={[-477.3, 79.05, 0]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.rack_1__4_.geometry} material={materials.rack} position={[-165.3, -477.3, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.rack_1__5_.geometry} material={materials.rack} position={[-65.3, -477.3, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.rack_1__6_.geometry} material={materials.rack} position={[34.7, -477.3, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.rack_1__7_.geometry} material={materials.rack} position={[134.7, -477.3, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.rack_1__8_.geometry} material={materials.rack} position={[234.7, -477.3, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.rack_1__9_.geometry} material={materials.rack} position={[-265.3, -477.3, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.rack__1_.geometry} material={materials.rack} position={[249, -278.1, 0]}>
          <mesh geometry={nodes.rack_1.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1_.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2_.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3_.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.rack__2_.geometry} material={materials.rack} position={[249, -373.1, 0]}>
          <mesh geometry={nodes.rack_1_1.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1__1.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2__1.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3__1.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.rack__3_.geometry} material={materials.rack} position={[249, -468.1, 0]}>
          <mesh geometry={nodes.rack_1_2.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1__2.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2__2.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3__2.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.rack__5_.geometry} material={materials.rack} position={[-477.3, -400.7, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.rack_1_3.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1__3.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2__3.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3__3.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.rack__6_.geometry} material={materials.rack} position={[-477.3, -495.7, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.rack_1_4.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1__4.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2__4.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3__4.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.rack__7_.geometry} material={materials.rack} position={[-477.3, -305.7, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.rack_1_5.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1__5.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2__5.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3__5.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.rack__8_.geometry} material={materials.rack} position={[-477.3, -194.1, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.rack_1_7.geometry} material={materials.rack} position={[10, -47.5, -129]} />
          <mesh geometry={nodes.rack_1__1__8.geometry} material={materials.rack} position={[10, -47.5, -79]} />
          <mesh geometry={nodes.rack_1__2__8.geometry} material={materials.rack} position={[10, -47.5, -179]} />
          <mesh geometry={nodes.rack_1__3__8.geometry} material={materials.rack} position={[10, -47.5, -229]} />
        </mesh>
        <mesh geometry={nodes.round_table__1_.geometry} material={materials.round_table} position={[-89.8, -4.7, 0]} rotation={[0, 0, 0.68]} />
        <mesh geometry={nodes.round_table__2_.geometry} material={materials.round_table} position={[-89.8, -304.3, 0]} rotation={[0, 0, -3.04]} />
        <mesh geometry={nodes.round_table__3_.geometry} material={materials.round_table} position={[423.1, 399.7, 0]} rotation={[0, 0, 0.6]} />
        <mesh geometry={nodes.round_table__4_.geometry} material={materials.round_table} position={[204.8, 399.7, 0]} rotation={[0, 0, -0.91]} />
        <mesh geometry={nodes.stool_1.geometry} material={materials.stool_1} position={[-145.4, 21.5, 0]}>
          <mesh geometry={nodes.stool_1_seat.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__11_.geometry} material={materials.stool_1} position={[64.7, 63.5, 0]}>
          <mesh geometry={nodes.stool_1_seat_3.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__12_.geometry} material={materials.stool_1} position={[64.7, -47.3, 0]}>
          <mesh geometry={nodes.stool_1_seat_4.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__13_.geometry} material={materials.stool_1} position={[137.4, 10.3, 0]}>
          <mesh geometry={nodes.stool_1_seat_5.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__14_.geometry} material={materials.stool_1} position={[137.4, -320.3, 0]}>
          <mesh geometry={nodes.stool_1_seat_6.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__15_.geometry} material={materials.stool_1} position={[57.3, -374.4, 0]}>
          <mesh geometry={nodes.stool_1_seat_7.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__16_.geometry} material={materials.stool_1} position={[64.3, -261.5, 0]}>
          <mesh geometry={nodes.stool_1_seat_8.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__1_.geometry} material={materials.stool_1} position={[-325.2, 100.9, 0]}>
          <mesh geometry={nodes.stool_1_seat_10.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__7_.geometry} material={materials.stool_1} position={[-397.1, 100.9, 0]}>
          <mesh geometry={nodes.stool_1_seat_9.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__8_.geometry} material={materials.stool_1} position={[-452.2, 110.5, 0]}>
          <mesh geometry={nodes.stool_1_seat_1.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.stool_1__9_.geometry} material={materials.stool_1} position={[-452.2, 201.7, 0]}>
          <mesh geometry={nodes.stool_1_seat_2.geometry} material={materials.stool_1} />
        </mesh>
        <mesh geometry={nodes.table_2__2_.geometry} material={materials.table_2} position={[67.3, 10, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.table_2__3_.geometry} material={materials.table_2} position={[67.3, -317.5, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.table_2__4_.geometry} material={materials.table_2} position={[-130, 411.2, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.table_2__5_.geometry} material={materials.table_2} position={[-343, 411.2, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.table_2__6_.geometry} material={materials.table_2} position={[-248.3, 220, 0]} />
        <mesh geometry={nodes.table_2_long.geometry} material={materials.table_2} position={[290.7, 174.3, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.table_wall.geometry} material={materials.wall_table} position={[-500, 46.36, -78.5]} />
        <mesh geometry={nodes.table_wall_1.geometry} material={materials.wall_table} position={[0, -318, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.table_wall_2.geometry} material={materials.wall_table} position={[-253.31, 288.9, 0]} />
        <mesh geometry={nodes.table_wall_2__1_.geometry} material={materials.wall_table} position={[0, 10.3, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_1_fork_5.geometry} material={materials.Tableware_1} position={[39.02, -4.28, -80]} rotation={[0, 0, -3.08]} />
        <mesh geometry={nodes.Tableware_1_fork__10_.geometry} material={materials.Tableware_1} position={[398.4, 157, -80]} rotation={[0, 0, -1.55]} />
        <mesh geometry={nodes.Tableware_1_fork__11_.geometry} material={materials.Tableware_1} position={[401.33, 408.21, -80]} rotation={[0, 0, 1.21]} />
        <mesh geometry={nodes.Tableware_1_fork__1__5.geometry} material={materials.Tableware_1} position={[201.2, 155.1, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_fork__2__5.geometry} material={materials.Tableware_1} position={[193.8, 371.8, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_fork__3_.geometry} material={materials.Tableware_1} position={[450.4, 386, -80]} rotation={[0, 0, -1.72]} />
        <mesh geometry={nodes.Tableware_1_fork__4_.geometry} material={materials.Tableware_1} position={[-96.47, 404.8, -80]} rotation={[0, 0, -1.75]} />
        <mesh geometry={nodes.Tableware_1_fork__5_.geometry} material={materials.Tableware_1} position={[-311.2, 399.7, -80]} rotation={[0, 0, -1.62]} />
        <mesh geometry={nodes.Tableware_1_fork__6_.geometry} material={materials.Tableware_1} position={[-297, 56.85, -80]} />
        <mesh geometry={nodes.Tableware_1_fork__7_.geometry} material={materials.Tableware_1} position={[-112.81, -329.92, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_fork__8_.geometry} material={materials.Tableware_1} position={[64.15, -303.39, -80]} rotation={[0, 0, 0.07]} />
        <mesh geometry={nodes.Tableware_1_fork__9_.geometry} material={materials.Tableware_1} position={[39.45, -327.69, -80]} rotation={[0, 0, 3.08]} />
        <mesh geometry={nodes.Tableware_1_knife_5.geometry} material={materials.Tableware_1} position={[63.8, -6.1, -80]} rotation={[0, 0, -3.08]} />
        <mesh geometry={nodes.Tableware_1_knife__10_.geometry} material={materials.Tableware_1} position={[270.5, 149.7, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_knife__11_.geometry} material={materials.Tableware_1} position={[397.67, 188.09, -80]} rotation={[0, 0, -1.55]} />
        <mesh geometry={nodes.Tableware_1_knife__12_.geometry} material={materials.Tableware_1} position={[389.65, 385.23, -80]} rotation={[0, 0, 1.21]} />
        <mesh geometry={nodes.Tableware_1_knife__13_.geometry} material={materials.Tableware_1} position={[-167.59, 402.67, -80]} rotation={[0, 0, 1.71]} />
        <mesh geometry={nodes.Tableware_1_knife__1__5.geometry} material={materials.Tableware_1} position={[232.3, 155.1, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_knife__2__5.geometry} material={materials.Tableware_1} position={[216.6, 367.6, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_knife__3_.geometry} material={materials.Tableware_1} position={[457.19, 410.86, -80]} rotation={[0, 0, -1.72]} />
        <mesh geometry={nodes.Tableware_1_knife__4_.geometry} material={materials.Tableware_1} position={[-91.8, 425.68, -80]} rotation={[0, 0, -1.64]} />
        <mesh geometry={nodes.Tableware_1_knife__5_.geometry} material={materials.Tableware_1} position={[-308.2, 425.71, -80]} rotation={[0, 0, -1.5]} />
        <mesh geometry={nodes.Tableware_1_knife__6_.geometry} material={materials.Tableware_1} position={[-339.1, 63.05, -80]} />
        <mesh geometry={nodes.Tableware_1_knife__7_.geometry} material={materials.Tableware_1} position={[-90.4, -334.5, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_knife__8_.geometry} material={materials.Tableware_1} position={[37.95, -300.4, -80]} rotation={[0, 0, 0.07]} />
        <mesh geometry={nodes.Tableware_1_knife__9_.geometry} material={materials.Tableware_1} position={[65, -334.2, -80]} rotation={[0, 0, 3.08]} />
        <mesh geometry={nodes.Tableware_1_spoon_5.geometry} material={materials.Tableware_1} position={[69.99, 20.9, -80]} />
        <mesh geometry={nodes.Tableware_1_spoon__1__5.geometry} material={materials.Tableware_1} position={[195.2, 155.1, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_spoon__2__5.geometry} material={materials.Tableware_1} position={[188.7, 372.5, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_spoon__3_.geometry} material={materials.Tableware_1} position={[437.7, 425.1, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_1_spoon__4_.geometry} material={materials.Tableware_1} position={[-160.7, 428.4, -80]} rotation={[0, 0, 1.59]} />
        <mesh geometry={nodes.Tableware_1_spoon__5_.geometry} material={materials.Tableware_1} position={[-315.86, 390.4, -80]} rotation={[0, 0, -1.54]} />
        <mesh geometry={nodes.Tableware_1_spoon__6_.geometry} material={materials.Tableware_1} position={[-305.6, 54.95, -80]} />
        <mesh geometry={nodes.Tableware_1_spoon__7_.geometry} material={materials.Tableware_1} position={[243.9, 155.1, -80]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Tableware_2_1.geometry} material={materials.Tableware_2} position={[217, 177.6, -80]} />
        <mesh geometry={nodes.Tableware_2_1__10_.geometry} material={materials.Tableware_2} position={[34, -331.43, -80]} rotation={[0, 0, -1.65]} />
        <mesh geometry={nodes.Tableware_2_1__11_.geometry} material={materials.Tableware_2} position={[-85.8, -263.1, -80]} />
        <mesh geometry={nodes.Tableware_2_1__12_.geometry} material={materials.Tableware_2} position={[105.1, 16.5, -80]} />
        <mesh geometry={nodes.Tableware_2_1__13_.geometry} material={materials.Tableware_2} position={[87.2, 16.5, -80]} />
        <mesh geometry={nodes.Tableware_2_1__14_.geometry} material={materials.Tableware_2} position={[97.2, -1.92, -80]} />
        <mesh geometry={nodes.Tableware_2_1__15_.geometry} material={materials.Tableware_2} position={[-78.4, 16.5, -80]} />
        <mesh geometry={nodes.Tableware_2_1__16_.geometry} material={materials.Tableware_2} position={[-96.7, -44.6, -80]} />
        <mesh geometry={nodes.Tableware_2_1__17_.geometry} material={materials.Tableware_2} position={[-371.75, 399.65, -80]} rotation={[0, 0, 1.86]} />
        <mesh geometry={nodes.Tableware_2_1__18_.geometry} material={materials.Tableware_2} position={[-165.39, 395.87, -80]} rotation={[0, 0, 1.61]} />
        <mesh geometry={nodes.Tableware_2_1__19_.geometry} material={materials.Tableware_2} position={[-95.9, 398.4, -80]} rotation={[0, 0, -1.58]} />
        <mesh geometry={nodes.Tableware_2_1__1_.geometry} material={materials.Tableware_2} position={[238.85, 401.81, -80]} rotation={[0, 0, -1.75]} />
        <mesh geometry={nodes.Tableware_2_1__20_.geometry} material={materials.Tableware_2} position={[-482.6, 217.58, -80]} rotation={[0, 0, -1.54]} />
        <mesh geometry={nodes.Tableware_2_1__22_.geometry} material={materials.Tableware_2} position={[-231, 202.9, -80]} rotation={[0, 0, -1.37]} />
        <mesh geometry={nodes.Tableware_2_1__2_.geometry} material={materials.Tableware_2} position={[308.3, 177.6, -80]} />
        <mesh geometry={nodes.Tableware_2_1__3_.geometry} material={materials.Tableware_2} position={[353.3, 177.6, -80]} />
        <mesh geometry={nodes.Tableware_2_1__4_.geometry} material={materials.Tableware_2} position={[-289.32, -248.25, -89.2]} scale={[1.5, 1.5, 1]} />
        <mesh geometry={nodes.Tableware_2_1__5_.geometry} material={materials.Tableware_2} position={[390.85, 418.08, -80]} rotation={[0, 0, -0.88]} />
        <mesh geometry={nodes.Tableware_2_1__6_.geometry} material={materials.Tableware_2} position={[452.8, 377.7, -80]} rotation={[0, 0, -0.88]} />
        <mesh geometry={nodes.Tableware_2_1__7_.geometry} material={materials.Tableware_2} position={[172.32, 400.49, -80]} rotation={[0, 0, 1.58]} />
        <mesh geometry={nodes.Tableware_2_1__8_.geometry} material={materials.Tableware_2} position={[181, 369.95, -80]} rotation={[0, 0, 2.77]} />
        <mesh geometry={nodes.Tableware_2_1__9_.geometry} material={materials.Tableware_2} position={[-85.8, -336.3, -80]} />
        <mesh geometry={nodes.Tableware_2_1_1.geometry} material={materials.Tableware_2} position={[217, 177.6, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__10_.geometry} material={materials.Tableware_2} position={[34, -331.43, -80.5]} rotation={[0, 0, -1.65]} />
        <mesh geometry={nodes.Tableware_2_1_1__11_.geometry} material={materials.Tableware_2} position={[-85.8, -263.1, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__12_.geometry} material={materials.Tableware_2} position={[105.1, 16.5, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__13_.geometry} material={materials.Tableware_2} position={[87.2, 16.5, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__14_.geometry} material={materials.Tableware_2} position={[97.2, -1.92, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__15_.geometry} material={materials.Tableware_2} position={[-78.4, 16.5, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__16_.geometry} material={materials.Tableware_2} position={[-96.7, -44.6, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__17_.geometry} material={materials.Tableware_2} position={[-371.75, 399.65, -80.5]} rotation={[0, 0, 1.86]} />
        <mesh geometry={nodes.Tableware_2_1_1__18_.geometry} material={materials.Tableware_2} position={[-165.39, 395.87, -80.5]} rotation={[0, 0, 1.61]} />
        <mesh geometry={nodes.Tableware_2_1_1__19_.geometry} material={materials.Tableware_2} position={[-95.9, 398.4, -80.5]} rotation={[0, 0, -1.58]} />
        <mesh geometry={nodes.Tableware_2_1_1__1_.geometry} material={materials.Tableware_2} position={[238.85, 401.81, -80.5]} rotation={[0, 0, -1.75]} />
        <mesh geometry={nodes.Tableware_2_1_1__20_.geometry} material={materials.Tableware_2} position={[-482.6, 217.65, -80.5]} rotation={[0, 0, -1.54]} />
        <mesh geometry={nodes.Tableware_2_1_1__21_.geometry} material={materials.Tableware_2} position={[-486.67, -410.7, -81.01]} rotation={[0, 0, -1.75]} />
        <mesh geometry={nodes.Tableware_2_1_1__22_.geometry} material={materials.Tableware_2} position={[-231, 202.9, -80.5]} rotation={[0, 0, -1.37]} />
        <mesh geometry={nodes.Tableware_2_1_1__23_.geometry} material={materials.Tableware_2} position={[-486.67, -425.03, -81.01]} rotation={[0, 0, -2.44]} />
        <mesh geometry={nodes.Tableware_2_1_1__24_.geometry} material={materials.Tableware_2} position={[-486.67, -410.7, -85.07]} rotation={[0, 0, -1.23]} />
        <mesh geometry={nodes.Tableware_2_1_1__25_.geometry} material={materials.Tableware_2} position={[-486.67, -425.03, -85.07]} rotation={[0, 0, -2.11]} />
        <mesh geometry={nodes.Tableware_2_1_1__26_.geometry} material={materials.Tableware_2} position={[-486.67, -410.7, -89.11]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__27_.geometry} material={materials.Tableware_2} position={[-486.67, -425.03, -89.11]} rotation={[0, 0, 2.92]} />
        <mesh geometry={nodes.Tableware_2_1_1__28_.geometry} material={materials.Tableware_2} position={[-260.8, -166.3, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__29_.geometry} material={materials.Tableware_2} position={[-260.8, -156, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__2_.geometry} material={materials.Tableware_2} position={[308.3, 177.6, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__30_.geometry} material={materials.Tableware_2} position={[-271.4, -162.1, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__31_.geometry} material={materials.Tableware_2} position={[-278.5, -164.8, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__32_.geometry} material={materials.Tableware_2} position={[-278.5, -157.5, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__33_.geometry} material={materials.Tableware_2} position={[-269.7, -154.7, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__34_.geometry} material={materials.Tableware_2} position={[-263.4, -148.7, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__35_.geometry} material={materials.Tableware_2} position={[-253.7, -146.1, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__36_.geometry} material={materials.Tableware_2} position={[-253.7, -138.4, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__37_.geometry} material={materials.Tableware_2} position={[-264.6, -138.4, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__38_.geometry} material={materials.Tableware_2} position={[-271.6, -142.1, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__39_.geometry} material={materials.Tableware_2} position={[-276.8, -148.6, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__3_.geometry} material={materials.Tableware_2} position={[353.3, 177.6, -80.5]} />
        <mesh geometry={nodes.Tableware_2_1_1__40_.geometry} material={materials.Tableware_2} position={[-278.5, -140.2, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__41_.geometry} material={materials.Tableware_2} position={[-273.6, -133.8, -46]} rotation={[0, 0, -2.66]} />
        <mesh geometry={nodes.Tableware_2_1_1__4_.geometry} material={materials.Tableware_2} position={[-289.32, -248.25, -89.2]} scale={1.5} />
        <mesh geometry={nodes.Tableware_2_1_1__5_.geometry} material={materials.Tableware_2} position={[390.85, 418.08, -80.5]} rotation={[0, 0, -0.88]} />
        <mesh geometry={nodes.Tableware_2_1_1__6_.geometry} material={materials.Tableware_2} position={[452.8, 377.7, -80.5]} rotation={[0, 0, -0.88]} />
        <mesh geometry={nodes.Tableware_2_1_1__7_.geometry} material={materials.Tableware_2} position={[172.32, 400.49, -80.5]} rotation={[0, 0, 1.58]} />
        <mesh geometry={nodes.Tableware_2_1_1__8_.geometry} material={materials.Tableware_2} position={[181, 369.95, -80.5]} rotation={[0, 0, 2.77]} />
        <mesh geometry={nodes.Tableware_2_1_1__9_.geometry} material={materials.Tableware_2} position={[-85.8, -336.3, -80.5]} />
        <mesh geometry={nodes.Tableware_2_2.geometry} material={materials.Tableware_2} position={[282.8, 167.46, -80]} />
        <mesh geometry={nodes.Tableware_2_2__10_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -81.3]} />
        <mesh geometry={nodes.Tableware_2_2__11_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -81.8]} />
        <mesh geometry={nodes.Tableware_2_2__12_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -82.3]} />
        <mesh geometry={nodes.Tableware_2_2__13_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -82.8]} />
        <mesh geometry={nodes.Tableware_2_2__14_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -83.3]} />
        <mesh geometry={nodes.Tableware_2_2__15_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -83.8]} />
        <mesh geometry={nodes.Tableware_2_2__16_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -84.3]} />
        <mesh geometry={nodes.Tableware_2_2__17_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -84.8]} />
        <mesh geometry={nodes.Tableware_2_2__18_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -85.3]} />
        <mesh geometry={nodes.Tableware_2_2__19_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -85.8]} />
        <mesh geometry={nodes.Tableware_2_2__1_.geometry} material={materials.Tableware_2} position={[389.7, 399.8, -80]} rotation={[0, 0, -0.88]} />
        <mesh geometry={nodes.Tableware_2_2__20_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -86.3]} />
        <mesh geometry={nodes.Tableware_2_2__21_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -86.8]} />
        <mesh geometry={nodes.Tableware_2_2__22_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -87.3]} />
        <mesh geometry={nodes.Tableware_2_2__23_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -87.8]} />
        <mesh geometry={nodes.Tableware_2_2__24_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -88.3]} />
        <mesh geometry={nodes.Tableware_2_2__25_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -88.8]} />
        <mesh geometry={nodes.Tableware_2_2__26_.geometry} material={materials.Tableware_2} position={[-483, 233.75, -80]} />
        <mesh geometry={nodes.Tableware_2_2__27_.geometry} material={materials.Tableware_2} position={[-231.92, 185.7, -80]} />
        <mesh geometry={nodes.Tableware_2_2__2_.geometry} material={materials.Tableware_2} position={[456.9, 398.2, -80]} rotation={[0, 0, -0.88]} />
        <mesh geometry={nodes.Tableware_2_2__3_.geometry} material={materials.Tableware_2} position={[316, 150.2, -80]} />
        <mesh geometry={nodes.Tableware_2_2__4_.geometry} material={materials.Tableware_2} position={[-101.3, -335.6, -80]} />
        <mesh geometry={nodes.Tableware_2_2__5_.geometry} material={materials.Tableware_2} position={[50.3, -9.7, -80]} />
        <mesh geometry={nodes.Tableware_2_2__6_.geometry} material={materials.Tableware_2} position={[366, 201.6, -80]} />
        <mesh geometry={nodes.Tableware_2_2__7_.geometry} material={materials.Tableware_2} position={[-119.8, -25.2, -80]} />
        <mesh geometry={nodes.Tableware_2_2__8_.geometry} material={materials.Tableware_2} position={[-167.7, 415.8, -80]} rotation={[0, 0, -0.88]} />
        <mesh geometry={nodes.Tableware_2_2__9_.geometry} material={materials.Tableware_2} position={[-487.7, -375.1, -80.9]} />
        <mesh geometry={nodes.Tableware_2_3.geometry} material={materials.Tableware_2} position={[227.8, 192.7, -80]} />
        <mesh geometry={nodes.Tableware_2_3_1.geometry} material={materials.Tableware_2} position={[-273.71, -43.85, -61.7]}>
          <mesh geometry={nodes.cake_4.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} scale={0.88} />
          <mesh geometry={nodes.cake_4__10_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, 2.33]} scale={0.88} />
          <mesh geometry={nodes.cake_4__11_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, 1.88]} scale={0.88} />
          <mesh geometry={nodes.cake_4__12_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, 1.4]} scale={0.88} />
          <mesh geometry={nodes.cake_4__13_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, 0.95]} scale={0.88} />
          <mesh geometry={nodes.cake_4__14_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, 0.48]} scale={0.88} />
          <mesh geometry={nodes.cake_4__3_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -0.48]} scale={0.88} />
          <mesh geometry={nodes.cake_4__4_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -0.98]} scale={0.88} />
          <mesh geometry={nodes.cake_4__5_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -1.48]} scale={0.88} />
          <mesh geometry={nodes.cake_4__6_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -1.98]} scale={0.88} />
          <mesh geometry={nodes.cake_4__7_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -2.48]} scale={0.88} />
          <mesh geometry={nodes.cake_4__8_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -2.99]} scale={0.88} />
          <mesh geometry={nodes.cake_4__9_.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, 2.8]} scale={0.88} />
        </mesh>
        <mesh geometry={nodes.Tableware_2_3__10_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -83.19]} />
        <mesh geometry={nodes.Tableware_2_3__11_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -83.64]} />
        <mesh geometry={nodes.Tableware_2_3__12_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -84.14]} />
        <mesh geometry={nodes.Tableware_2_3__13_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -84.7]} />
        <mesh geometry={nodes.Tableware_2_3__14_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -85.21]} />
        <mesh geometry={nodes.Tableware_2_3__15_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -85.89]} />
        <mesh geometry={nodes.Tableware_2_3__16_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -86.43]} />
        <mesh geometry={nodes.Tableware_2_3__17_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -86.89]} />
        <mesh geometry={nodes.Tableware_2_3__18_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -87.4]} />
        <mesh geometry={nodes.Tableware_2_3__19_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -87.81]} />
        <mesh geometry={nodes.Tableware_2_3__1_.geometry} material={materials.Tableware_2} position={[399.9, 172.1, -80]} />
        <mesh geometry={nodes.Tableware_2_3__1__2.geometry} material={materials.Tableware_2} position={[-277.43, 20.95, -90.88]} rotation={[0, 0, -2.02]}>
          <mesh geometry={nodes.cake_4_1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} scale={0.88} />
          <mesh geometry={nodes.cake_4__3__1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -0.48]} scale={0.88} />
          <mesh geometry={nodes.cake_4__4__1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -0.98]} scale={0.88} />
          <mesh geometry={nodes.cake_4__5__1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -1.48]} scale={0.88} />
          <mesh geometry={nodes.cake_4__6__1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -1.98]} scale={0.88} />
          <mesh geometry={nodes.cake_4__7__1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -2.48]} scale={0.88} />
          <mesh geometry={nodes.cake_4__8__1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, -2.99]} scale={0.88} />
          <mesh geometry={nodes.cake_4__9__1.geometry} material={materials.cake_4} position={[-0.16, 0.16, -0.45]} rotation={[0, 0, 2.8]} scale={0.88} />
        </mesh>
        <mesh geometry={nodes.Tableware_2_3__20_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -88.35]} />
        <mesh geometry={nodes.Tableware_2_3__21_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -88.8]} />
        <mesh geometry={nodes.Tableware_2_3__22_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -89.3]} />
        <mesh geometry={nodes.Tableware_2_3__23_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -89.86]} />
        <mesh geometry={nodes.Tableware_2_3__24_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -90.37]} />
        <mesh geometry={nodes.Tableware_2_3__25_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -91.05]} />
        <mesh geometry={nodes.Tableware_2_3__26_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -91.66]} />
        <mesh geometry={nodes.Tableware_2_3__27_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -92.12]} />
        <mesh geometry={nodes.Tableware_2_3__28_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -92.63]} />
        <mesh geometry={nodes.Tableware_2_3__29_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -93.04]} />
        <mesh geometry={nodes.Tableware_2_3__2_.geometry} material={materials.Tableware_2} position={[50.9, -300, -80]} />
        <mesh geometry={nodes.Tableware_2_3__30_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -93.58]} />
        <mesh geometry={nodes.Tableware_2_3__31_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -94.03]} />
        <mesh geometry={nodes.Tableware_2_3__32_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -94.53]} />
        <mesh geometry={nodes.Tableware_2_3__33_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -95.09]} />
        <mesh geometry={nodes.Tableware_2_3__34_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -95.6]} />
        <mesh geometry={nodes.Tableware_2_3__35_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -96.28]} />
        <mesh geometry={nodes.Tableware_2_3__36_.geometry} material={materials.Tableware_2} position={[-273.09, -15.3, -61.43]} scale={1.1}>
          <mesh geometry={nodes.cake_3.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} scale={0.65} />
          <mesh geometry={nodes.cake_3__10_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -1.72]} scale={0.65} />
          <mesh geometry={nodes.cake_3__11_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -1.1]} scale={0.65} />
          <mesh geometry={nodes.cake_3__12_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -0.56]} scale={0.65} />
          <mesh geometry={nodes.cake_3__2_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 0.56]} scale={0.65} />
          <mesh geometry={nodes.cake_3__3_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 1.12]} scale={0.65} />
          <mesh geometry={nodes.cake_3__4_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 1.67]} scale={0.65} />
          <mesh geometry={nodes.cake_3__5_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 2.21]} scale={0.65} />
          <mesh geometry={nodes.cake_3__6_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 2.76]} scale={0.65} />
          <mesh geometry={nodes.cake_3__8_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -2.93]} scale={0.65} />
          <mesh geometry={nodes.cake_3__9_.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -2.32]} scale={0.65} />
        </mesh>
        <mesh geometry={nodes.Tableware_2_3__37_.geometry} material={materials.Tableware_2} position={[-272.47, 13.59, -62.2]} rotation={[0, 0, 1.91]} />
        <mesh geometry={nodes.Tableware_2_3__38_.geometry} material={materials.Tableware_2} position={[-277.74, -86.08, -90.43]} scale={0.91}>
          <mesh geometry={nodes.cake_3_1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} scale={0.65} />
          <mesh geometry={nodes.cake_3__10__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -1.72]} scale={0.65} />
          <mesh geometry={nodes.cake_3__11__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -1.1]} scale={0.65} />
          <mesh geometry={nodes.cake_3__12__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -0.56]} scale={0.65} />
          <mesh geometry={nodes.cake_3__2__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 0.56]} scale={0.65} />
          <mesh geometry={nodes.cake_3__3__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 1.12]} scale={0.65} />
          <mesh geometry={nodes.cake_3__4__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 1.67]} scale={0.65} />
          <mesh geometry={nodes.cake_3__5__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 2.21]} scale={0.65} />
          <mesh geometry={nodes.cake_3__6__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, 2.76]} scale={0.65} />
          <mesh geometry={nodes.cake_3__8__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -2.93]} scale={0.65} />
          <mesh geometry={nodes.cake_3__9__1.geometry} material={materials.cake_3} position={[-0.03, 0.14, -0.21]} rotation={[0, 0, -2.32]} scale={0.65} />
        </mesh>
        <mesh geometry={nodes.Tableware_2_3__39_.geometry} material={materials.Tableware_2} position={[-277.74, -63.98, -90.9]} scale={0.91} />
        <mesh geometry={nodes.Tableware_2_3__3_.geometry} material={materials.Tableware_2} position={[52.57, -331.35, -80]} rotation={[0, 0, -1.65]} />
        <mesh geometry={nodes.Tableware_2_3__40_.geometry} material={materials.Tableware_2} position={[-277.74, -40.07, -90.9]} rotation={[0, 0, 0.74]} scale={0.91} />
        <mesh geometry={nodes.Tableware_2_3__41_.geometry} material={materials.Tableware_2} position={[-271.35, 21.63, -110.43]} rotation={[0, 0, -0.74]} scale={0.91} />
        <mesh geometry={nodes.Tableware_2_3__42_.geometry} material={materials.Tableware_2} position={[-332.6, 394.1, -79.9]} rotation={[0, 0, 1.91]} />
        <mesh geometry={nodes.Tableware_2_3__43_.geometry} material={materials.Tableware_2} position={[-267.05, -67.27, -61.93]} rotation={[0, 0, 0.74]} scale={0.91} />
        <mesh geometry={nodes.Tableware_2_3__4_.geometry} material={materials.Tableware_2} position={[-116.82, 7.5, -80]} />
        <mesh geometry={nodes.Tableware_2_3__5_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -80.8]} />
        <mesh geometry={nodes.Tableware_2_3__6_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -81.27]} />
        <mesh geometry={nodes.Tableware_2_3__7_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -81.73]} />
        <mesh geometry={nodes.Tableware_2_3__8_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -82.24]} />
        <mesh geometry={nodes.Tableware_2_3__9_.geometry} material={materials.Tableware_2} position={[-487.27, -481.5, -82.65]} />
        <mesh geometry={nodes.Tableware_2_4.geometry} material={materials.Tableware_2} position={[-120.8, 430.1, -80]} />
        <mesh geometry={nodes.Tableware_2_5.geometry} material={materials.Tableware_2} position={[276.1, 191.8, -80]} />
        <mesh geometry={nodes.Tableware_2_5__10_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -85.33]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__11_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -85.99]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__12_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -86.56]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__13_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -87.13]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__14_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -87.61]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__15_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -88.09]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__16_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -88.49]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__17_.geometry} material={materials.Tableware_2} position={[-364.4, 61.05, -80]} rotation={[0, 0, -0.35]} />
        <mesh geometry={nodes.Tableware_2_5__1_.geometry} material={materials.Tableware_2} position={[217.8, 401.6, -80]} rotation={[0, 0, -1.62]} />
        <mesh geometry={nodes.Tableware_2_5__2_.geometry} material={materials.Tableware_2} position={[-113, -287.8, -80]} rotation={[0, 0, -1.69]} />
        <mesh geometry={nodes.Tableware_2_5__3_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -80.95]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__4_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -81.55]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__5_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -82.23]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__6_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -82.82]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__7_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -83.49]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__8_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -84.16]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_5__9_.geometry} material={materials.Tableware_2} position={[-487.02, -449.8, -84.67]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Tableware_2_6.geometry} material={materials.Tableware_2} position={[257, 152.4, -80]} />
        <mesh geometry={nodes.Tableware_2_6__10_.geometry} material={materials.Tableware_2} position={[-323, 63.75, -80]} />
        <mesh geometry={nodes.Tableware_2_6__1_.geometry} material={materials.Tableware_2} position={[58.69, 25.6, -80]} />
        <mesh geometry={nodes.Tableware_2_6__2_.geometry} material={materials.Tableware_2} position={[-306.1, 411.2, -80]} />
        <mesh geometry={nodes.Tableware_2_6__3_.geometry} material={materials.Tableware_2} position={[-485.52, -322.9, -80.89]} />
        <mesh geometry={nodes.Tableware_2_6__4_.geometry} material={materials.Tableware_2} position={[-485.52, -322.9, -83.21]} />
        <mesh geometry={nodes.Tableware_2_6__5_.geometry} material={materials.Tableware_2} position={[-485.52, -322.9, -85.99]} />
        <mesh geometry={nodes.Tableware_2_6__6_.geometry} material={materials.Tableware_2} position={[-485.52, -322.9, -88.5]} />
        <mesh geometry={nodes.Tableware_2_6__7_.geometry} material={materials.Tableware_2} position={[-485.52, -322.9, -91.11]} />
        <mesh geometry={nodes.Tableware_2_6__8_.geometry} material={materials.Tableware_2} position={[-485.52, -322.9, -93.54]} />
        <mesh geometry={nodes.Tableware_2_6__9_.geometry} material={materials.Tableware_2} position={[-486.88, -322.9, -96.73]} rotation={[0, -0.18, 0]} />
        <mesh geometry={nodes.Tableware_2_7.geometry} material={materials.Tableware_2} position={[216.5, 148.9, -80]} />
        <mesh geometry={nodes.Tableware_2_7__10_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -83.83]} />
        <mesh geometry={nodes.Tableware_2_7__11_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -84.3]} />
        <mesh geometry={nodes.Tableware_2_7__12_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -84.77]} />
        <mesh geometry={nodes.Tableware_2_7__13_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -85.23]} />
        <mesh geometry={nodes.Tableware_2_7__14_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -85.69]} />
        <mesh geometry={nodes.Tableware_2_7__15_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -86.26]} />
        <mesh geometry={nodes.Tableware_2_7__1_.geometry} material={materials.Tableware_2} position={[205.2, 368.1, -80]} />
        <mesh geometry={nodes.Tableware_2_7__2_.geometry} material={materials.Tableware_2} position={[-93.6, 414.6, -80]} />
        <mesh geometry={nodes.Tableware_2_7__4_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -80.91]} />
        <mesh geometry={nodes.Tableware_2_7__5_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -81.38]} />
        <mesh geometry={nodes.Tableware_2_7__6_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -81.85]} />
        <mesh geometry={nodes.Tableware_2_7__7_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -82.31]} />
        <mesh geometry={nodes.Tableware_2_7__8_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -82.77]} />
        <mesh geometry={nodes.Tableware_2_7__9_.geometry} material={materials.Tableware_2} position={[-486.65, -342.4, -83.34]} />
        <mesh geometry={nodes.Tableware_2_7_1.geometry} material={materials.Tableware_2} position={[-259.7, 239.4, -80]} />
        <mesh geometry={nodes.Tableware_2_7_1__1_.geometry} material={materials.Tableware_2} position={[-335, 417.1, -80]} rotation={[0, 0, -2.52]} />
        <mesh geometry={nodes.Tableware_2_7_1__2_.geometry} material={materials.Tableware_2} position={[-152, 412.4, -80]} rotation={[0, 0, -1.69]} />
        <mesh geometry={nodes.Tableware_2_7_1__3_.geometry} material={materials.Tableware_2} position={[198.88, 415.32, -80]} rotation={[0, 0, 1.57]} />
        <mesh geometry={nodes.Tableware_2_7_1__4_.geometry} material={materials.Tableware_2} position={[411.5, 397.2, -80]} rotation={[0, 0, 1.57]} />
        <mesh geometry={nodes.Tableware_2_7_1__5_.geometry} material={materials.Tableware_2} position={[356, 161.9, -80]} rotation={[0, 0, 1.57]} />
        <mesh geometry={nodes.Tableware_2_7_1__6_.geometry} material={materials.Tableware_2} position={[40.81, 12.57, -80]} rotation={[0, 0, 2.04]} />
        <mesh geometry={nodes.Tableware_2_7_1__7_.geometry} material={materials.Tableware_2} position={[-90.1, 12.57, -80]} rotation={[0, 0, 2.04]} />
        <mesh geometry={nodes.Tableware_2_7_1__8_.geometry} material={materials.Tableware_2} position={[-90.1, -280, -80]} rotation={[0, 0, 2.04]} />
        <mesh geometry={nodes.Tableware_2_7_1__9_.geometry} material={materials.Tableware_2} position={[75.5, -315.9, -80]} rotation={[0, 0, 2.04]} />
        <mesh geometry={nodes.Tableware_2_8.geometry} material={materials.Tableware_2} position={[-237.02, 255.3, -80]} />
        <mesh geometry={nodes.Tableware_2_8__10_.geometry} material={materials.Tableware_2} position={[301.5, 182.1, -80]} />
        <mesh geometry={nodes.Tableware_2_8__11_.geometry} material={materials.Tableware_2} position={[27.52, -9.26, -80]} />
        <mesh geometry={nodes.Tableware_2_8__12_.geometry} material={materials.Tableware_2} position={[27.52, -2.08, -80]} />
        <mesh geometry={nodes.Tableware_2_8__13_.geometry} material={materials.Tableware_2} position={[28.3, -309.61, -80]} />
        <mesh geometry={nodes.Tableware_2_8__14_.geometry} material={materials.Tableware_2} position={[28.3, -302.43, -80]} />
        <mesh geometry={nodes.Tableware_2_8__15_.geometry} material={materials.Tableware_2} position={[-73.42, -15.74, -80]} rotation={[0, 0, 3.13]} />
        <mesh geometry={nodes.Tableware_2_8__16_.geometry} material={materials.Tableware_2} position={[-73.52, -22.92, -80]} rotation={[0, 0, 3.13]} />
        <mesh geometry={nodes.Tableware_2_8__17_.geometry} material={materials.Tableware_2} position={[-63.92, -305.26, -80]} rotation={[0, 0, 3.13]} />
        <mesh geometry={nodes.Tableware_2_8__18_.geometry} material={materials.Tableware_2} position={[-64.02, -312.44, -80]} rotation={[0, 0, 3.13]} />
        <mesh geometry={nodes.Tableware_2_8__19_.geometry} material={materials.Tableware_2} position={[-263.42, 73.43, -72.93]} />
        <mesh geometry={nodes.Tableware_2_8__1_.geometry} material={materials.Tableware_2} position={[-343.84, 408.4, -80]} />
        <mesh geometry={nodes.Tableware_2_8__20_.geometry} material={materials.Tableware_2} position={[-261.5, 56.15, -72.93]} rotation={[0, 0, 0.66]} />
        <mesh geometry={nodes.Tableware_2_8__21_.geometry} material={materials.Tableware_2} position={[-492.91, 201.7, -80]} />
        <mesh geometry={nodes.Tableware_2_8__22_.geometry} material={materials.Tableware_2} position={[-492.91, 192.73, -80]} />
        <mesh geometry={nodes.Tableware_2_8__23_.geometry} material={materials.Tableware_2} position={[-492.91, 153.95, -80]} />
        <mesh geometry={nodes.Tableware_2_8__24_.geometry} material={materials.Tableware_2} position={[-492.91, 161.13, -80]} />
        <mesh geometry={nodes.Tableware_2_8__25_.geometry} material={materials.Tableware_2} position={[-442.36, 58.88, -80]} />
        <mesh geometry={nodes.Tableware_2_8__26_.geometry} material={materials.Tableware_2} position={[-435.7, 59.85, -80]} />
        <mesh geometry={nodes.Tableware_2_8__27_.geometry} material={materials.Tableware_2} position={[-228.9, 255.3, -80]} />
        <mesh geometry={nodes.Tableware_2_8__28_.geometry} material={materials.Tableware_2} position={[-255.3, 73.43, -72.93]} />
        <mesh geometry={nodes.Tableware_2_8__29_.geometry} material={materials.Tableware_2} position={[-255.09, 61.13, -72.93]} rotation={[0, 0, 0.66]} />
        <mesh geometry={nodes.Tableware_2_8__2_.geometry} material={materials.Tableware_2} position={[-343.84, 415.58, -80]} />
        <mesh geometry={nodes.Tableware_2_8__30_.geometry} material={materials.Tableware_2} position={[-261.5, 41.11, -72.93]} rotation={[0, 0, 0.66]} />
        <mesh geometry={nodes.Tableware_2_8__31_.geometry} material={materials.Tableware_2} position={[-255.09, 46.1, -72.93]} rotation={[0, 0, 0.66]} />
        <mesh geometry={nodes.Tableware_2_8__3_.geometry} material={materials.Tableware_2} position={[-110.91, 408.4, -80]} />
        <mesh geometry={nodes.Tableware_2_8__4_.geometry} material={materials.Tableware_2} position={[-110.91, 415.58, -80]} />
        <mesh geometry={nodes.Tableware_2_8__5_.geometry} material={materials.Tableware_2} position={[188.2, 408.4, -80]} />
        <mesh geometry={nodes.Tableware_2_8__6_.geometry} material={materials.Tableware_2} position={[188.2, 415.58, -80]} />
        <mesh geometry={nodes.Tableware_2_8__7_.geometry} material={materials.Tableware_2} position={[430.59, 390.74, -80]} />
        <mesh geometry={nodes.Tableware_2_8__8_.geometry} material={materials.Tableware_2} position={[430.59, 397.92, -80]} />
        <mesh geometry={nodes.Tableware_2_8__9_.geometry} material={materials.Tableware_2} position={[301.5, 174.92, -80]} />
        <group position={[-258.3, 62.95, -100.58]}>
          <mesh geometry={nodes.Scene103.geometry} material={materials.tray} />
          <mesh geometry={nodes.Scene103_1.geometry} material={materials.tray_paper} />
        </group>
        <group position={[96, 6.4, -80]}>
          <mesh geometry={nodes.Scene103.geometry} material={materials.tray} />
          <mesh geometry={nodes.Scene103_1.geometry} material={materials.tray_paper} />
        </group>
        <group position={[-267.4, -150.4, -46]}>
          <mesh geometry={nodes.Scene103.geometry} material={materials.tray} />
          <mesh geometry={nodes.Scene103_1.geometry} material={materials.tray_paper} />
        </group>
        <mesh geometry={nodes.Umbrella.geometry} material={materials.Umbrella} position={[350.3, 15.6, -107.2]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Umbrella__1_.geometry} material={materials.Umbrella} position={[372.1, 15.6, -107.2]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Umbrella__2_.geometry} material={materials.Umbrella} position={[-484.8, 442, -107.2]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Vase.geometry} material={materials.Vase} position={[259.5, -325.7, -130.84]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Winebox.geometry} material={materials.Winebox_1} position={[-446.4, -94.4, -101.4]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Winebox_1_1.geometry} material={materials.Winebox_1} position={[-11, 5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_2.geometry} material={materials.Winebox_1} position={[0, 5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_3.geometry} material={materials.Winebox_1} position={[11, 5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_4.geometry} material={materials.Winebox_1} position={[-11, -5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_5.geometry} material={materials.Winebox_1} position={[0, -5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_6.geometry} material={materials.Winebox_1} position={[11, -5.5, 9.83]} />
        </mesh>
        <mesh geometry={nodes.Winebox__1_.geometry} material={materials.Winebox_1} position={[-446.4, -146, -101.4]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Winebox_1_1_1.geometry} material={materials.Winebox_1} position={[-11, 5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_2_1.geometry} material={materials.Winebox_1} position={[0, 5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_3_1.geometry} material={materials.Winebox_1} position={[11, 5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_4_1.geometry} material={materials.Winebox_1} position={[-11, -5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_5_1.geometry} material={materials.Winebox_1} position={[0, -5.5, 9.83]} />
          <mesh geometry={nodes.Winebox_1_6_1.geometry} material={materials.Winebox_1} position={[11, -5.5, 9.83]} />
        </mesh>
        <mesh geometry={nodes.wood_box.geometry} material={materials.rack} position={[-360.5, -456.8, 0]} rotation={[0, 0, -0.23]} />
        <mesh geometry={nodes.wood_box_2.geometry} material={materials.rack} position={[-401.8, -381.8, 0]} rotation={[0, 0, 0.95]} />
        <mesh geometry={nodes.wood_box_2__1_.geometry} material={materials.rack} position={[-471.9, -234, 0]} />
        <mesh geometry={nodes.wood_box_2__2_.geometry} material={materials.rack} position={[251.5, -339.6, 0]} />
        <mesh geometry={nodes.wood_box_2__3_.geometry} material={materials.rack} position={[251.5, -339.6, -15.1]} />
        <mesh geometry={nodes.wood_box_2__4_.geometry} material={materials.rack} position={[251.5, -339.6, -30.3]} />
        <mesh geometry={nodes.wood_box_2__5_.geometry} material={materials.rack} position={[251.5, -248.6, 0]} />
        <mesh geometry={nodes.wood_rack_1.geometry} material={materials.wood_rack_metal} position={[-258.5, -98.5, -270]}>
          <mesh geometry={nodes.wood_rack_1_a.geometry} material={materials.wood_rack_metal} position={[0, 110, -71.5]} />
          <mesh geometry={nodes.wood_rack_1_a__1_.geometry} material={materials.wood_rack_metal} position={[0, 30, -71.5]} />
          <mesh geometry={nodes.wood_rack_1_b.geometry} material={materials.wood_rack_metal} position={[-29.45, 140.75, -71.5]} />
          <mesh geometry={nodes.wood_rack_1_b__1_.geometry} material={materials.wood_rack_metal} position={[-215, 140.75, -71.5]} />
          <mesh geometry={nodes.wood_rack_1_b__2_.geometry} material={materials.wood_rack_metal} position={[-107.5, 140.75, -71.5]} />
        </mesh>
        <mesh geometry={nodes.wood_rack_grass.geometry} material={materials.wood_rack_metal} position={[-258.5, -229.5, -270]}>
          <group position={[0, 116.1, 20.2]}>
            <mesh geometry={nodes.Branch_1.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_1_1.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_2_1.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_1.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 84.2, 20.2]}>
            <mesh geometry={nodes.Branch_1_1001.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_1.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_1001.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_1.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1_.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_2.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_1001.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_1.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_2.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 41.3, 20.2]}>
            <mesh geometry={nodes.Branch_1_2.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_2.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_2.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_3.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_2.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_2.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_3.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 10.4, 20.2]}>
            <mesh geometry={nodes.Branch_1_3.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_3.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_3.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_4.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__1.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_5.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_3.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_3.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_4.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -115.3, 20.2]}>
            <mesh geometry={nodes.Branch_1_4.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_4.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_4.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_6.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__2.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_7.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_4.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_4.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_5.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -37.9, 20.2]}>
            <mesh geometry={nodes.Branch_1_5.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_5.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_5.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_8.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_5.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_5.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_6.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -79.6, 20.2]}>
            <mesh geometry={nodes.Branch_1_6.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_6.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_6.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_9.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_6.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_6.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_7.geometry} material={materials.Ivy_pot} />
          </group>
          <mesh geometry={nodes.wood_rack_grass_1.geometry} material={materials.wood_rack_metal} position={[14.25, -129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_1__1_.geometry} material={materials.wood_rack_metal} position={[14.25, 0, -70]} />
          <mesh geometry={nodes.wood_rack_grass_1__2_.geometry} material={materials.wood_rack_metal} position={[14.25, 129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2.geometry} material={materials.wood_rack_metal} position={[-14.25, -129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2__1_.geometry} material={materials.wood_rack_metal} position={[-14.25, 0, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2__2_.geometry} material={materials.wood_rack_metal} position={[-14.25, 129.5, -70]} />
        </mesh>
        <mesh geometry={nodes.wood_rack_grass__1_.geometry} material={materials.wood_rack_metal} position={[305.6, 170.2, -270]} rotation={[0, 0, Math.PI / 2]}>
          <group position={[0, 116.1, 20.2]}>
            <mesh geometry={nodes.Branch_1_7.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_1_1_7.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_7.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_2_1_10.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_7.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_7.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_9.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 84.2, 20.2]}>
            <mesh geometry={nodes.Branch_1_8.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_8.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_8.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_11.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__3.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_12.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_8.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_8.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_10.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 41.3, 20.2]}>
            <mesh geometry={nodes.Branch_1_9.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_9.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_9.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_13.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_9.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_9.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_11.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 10.4, 20.2]}>
            <mesh geometry={nodes.Branch_1_10.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_10.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_10.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_14.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__4.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_15.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_10.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_10.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_12.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -115.3, 20.2]}>
            <mesh geometry={nodes.Branch_1_11.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_11.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_11.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_16.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__5.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_17.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_11.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_11.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_13.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -37.9, 20.2]}>
            <mesh geometry={nodes.Branch_1_12.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_12.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_12.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_18.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_12.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_12.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_14.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -79.6, 20.2]}>
            <mesh geometry={nodes.Branch_1_13.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_13.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_13.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_19.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_13.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_13.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_15.geometry} material={materials.Ivy_pot} />
          </group>
          <mesh geometry={nodes.wood_rack_grass_1_1.geometry} material={materials.wood_rack_metal} position={[14.25, -129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_1__1__1.geometry} material={materials.wood_rack_metal} position={[14.25, 0, -70]} />
          <mesh geometry={nodes.wood_rack_grass_1__2__1.geometry} material={materials.wood_rack_metal} position={[14.25, 129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2_1.geometry} material={materials.wood_rack_metal} position={[-14.25, -129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2__1__1.geometry} material={materials.wood_rack_metal} position={[-14.25, 0, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2__2__1.geometry} material={materials.wood_rack_metal} position={[-14.25, 129.5, -70]} />
        </mesh>
        <mesh geometry={nodes.wood_rack_grass__2_.geometry} material={materials.wood_rack_metal} position={[32.5, 435.7, -270]} rotation={[0, 0, Math.PI / 2]}>
          <group position={[0, 116.1, 20.2]}>
            <mesh geometry={nodes.Branch_1_14.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_1_1_14.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_14.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_2_1_20.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_14.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_14.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_17.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 84.2, 20.2]}>
            <mesh geometry={nodes.Branch_1_15.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_15.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_15.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_21.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__6.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_22.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_15.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_15.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_18.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 41.3, 20.2]}>
            <mesh geometry={nodes.Branch_1_16.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_16.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_16.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_23.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_16.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_16.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_19.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, 10.4, 20.2]}>
            <mesh geometry={nodes.Branch_1_17.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_17.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_17.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_24.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__7.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_25.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_17.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_17.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_20.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -115.3, 20.2]}>
            <mesh geometry={nodes.Branch_1_18.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -2.91]}>
              <mesh geometry={nodes.Branch_1_1_18.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_18.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, 2.62]}>
              <mesh geometry={nodes.Branch_2_1_26.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_2__1__8.geometry} material={materials.Ivy_pot} position={[-3.6, 0, -20.59]} rotation={[0, 0, -2.44]}>
              <mesh geometry={nodes.Branch_2_1_27.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_18.geometry} material={materials.Ivy_pot} position={[4.9, 0, -20.59]} rotation={[0, 0, -3.13]}>
              <mesh geometry={nodes.Branch_3_1_18.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_21.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -37.9, 20.2]}>
            <mesh geometry={nodes.Branch_1_19.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_19.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_19.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_28.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_19.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_19.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_22.geometry} material={materials.Ivy_pot} />
          </group>
          <group position={[0, -79.6, 20.2]}>
            <mesh geometry={nodes.Branch_1_20.geometry} material={materials.Ivy_pot} position={[0, 0, -20.59]} rotation={[0, 0, -1.12]}>
              <mesh geometry={nodes.Branch_1_1_20.geometry} material={materials.Ivy} position={[-0.2, 0, 0]} />
            </mesh>
            <mesh geometry={nodes.Branch_2_20.geometry} material={materials.Ivy_pot} position={[5.8, 0, -20.59]} rotation={[0, 0, -0.6]}>
              <mesh geometry={nodes.Branch_2_1_29.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Branch_3_20.geometry} material={materials.Ivy_pot} position={[-5.3, 0, -20.59]}>
              <mesh geometry={nodes.Branch_3_1_20.geometry} material={materials.Ivy} />
            </mesh>
            <mesh geometry={nodes.Ivy_pot_23.geometry} material={materials.Ivy_pot} />
          </group>
          <mesh geometry={nodes.wood_rack_grass_1_2.geometry} material={materials.wood_rack_metal} position={[14.25, -129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_1__1__2.geometry} material={materials.wood_rack_metal} position={[14.25, 0, -70]} />
          <mesh geometry={nodes.wood_rack_grass_1__2__2.geometry} material={materials.wood_rack_metal} position={[14.25, 129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2_2.geometry} material={materials.wood_rack_metal} position={[-14.25, -129.5, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2__1__2.geometry} material={materials.wood_rack_metal} position={[-14.25, 0, -70]} />
          <mesh geometry={nodes.wood_rack_grass_2__2__2.geometry} material={materials.wood_rack_metal} position={[-14.25, 129.5, -70]} />
        </mesh>
        <mesh geometry={nodes.wood_rack_window.geometry} material={materials.wood_rack_metal} position={[325, 520, -245]}>
          <mesh geometry={nodes.wood_rack_window_1.geometry} material={materials.wood_rack_metal} position={[170, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__1_.geometry} material={materials.wood_rack_metal} position={[140, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__3_.geometry} material={materials.wood_rack_metal} position={[-5, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__4_.geometry} material={materials.wood_rack_metal} position={[5, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__5_.geometry} material={materials.wood_rack_metal} position={[-35, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__6_.geometry} material={materials.wood_rack_metal} position={[35, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_2.geometry} material={materials.wood_rack_metal} position={[-170, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_2__1_.geometry} material={materials.wood_rack_metal} position={[-140, -49.25, -56.5]} />
        </mesh>
        <mesh geometry={nodes.wood_rack_window__1_.geometry} material={materials.wood_rack_metal} position={[-275, 520, -245]}>
          <mesh geometry={nodes.wood_rack_window_1_1.geometry} material={materials.wood_rack_metal} position={[170, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__1__1.geometry} material={materials.wood_rack_metal} position={[140, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__3__1.geometry} material={materials.wood_rack_metal} position={[-5, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__4__1.geometry} material={materials.wood_rack_metal} position={[5, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__5__1.geometry} material={materials.wood_rack_metal} position={[-35, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_1__6__1.geometry} material={materials.wood_rack_metal} position={[35, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_2_1.geometry} material={materials.wood_rack_metal} position={[-170, -49.25, -56.5]} />
          <mesh geometry={nodes.wood_rack_window_2__1__1.geometry} material={materials.wood_rack_metal} position={[-140, -49.25, -56.5]} />
        </mesh>
      </group>
      <group position={[-0.35, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[-285, 238.8, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_8.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__8.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__8.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__8.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__8.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__8.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__8.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__8.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__8.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__8.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__8.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__8.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__8.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__8.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__8.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__8.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__8.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__8.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__8.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__8.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[-354.6, -177.2, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10_.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11_.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12_.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13_.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14_.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15_.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16_.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17_.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18_.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19_.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1_.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2_.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3_.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4_.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5_.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6_.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7_.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8_.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9_.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[66, -177.2, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_1.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__1.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__1.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__1.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__1.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__1.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__1.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__1.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__1.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__1.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__1.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__1.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__1.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__1.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__1.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__1.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__1.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__1.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__1.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__1.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[66, 242, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_2.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__2.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__2.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__2.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__2.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__2.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__2.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__2.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__2.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__2.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__2.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__2.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__2.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__2.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__2.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__2.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__2.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__2.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__2.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__2.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[317, 242, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_3.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__3.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__3.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__3.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__3.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__3.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__3.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__3.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__3.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__3.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__3.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__3.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__3.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__3.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__3.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__3.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__3.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__3.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__3.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__3.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[377.1, -129, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_4.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__4.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__4.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__4.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__4.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__4.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__4.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__4.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__4.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__4.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__4.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__4.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__4.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__4.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__4.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__4.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__4.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__4.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__4.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__4.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[377.1, -430, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_5.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__5.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__5.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__5.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__5.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__5.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__5.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__5.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__5.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__5.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__5.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__5.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__5.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__5.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__5.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__5.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__5.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__5.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__5.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__5.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[528.6, -430, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_6.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__6.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__6.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__6.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__6.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__6.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__6.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__6.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__6.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__6.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__6.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__6.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__6.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__6.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__6.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__6.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__6.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__6.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__6.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__6.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[524, -129, -216.6]}>
          <group position={[0, 0, 0.89]}>
            <mesh geometry={nodes.Scene249.geometry} material={materials.lamp_2} />
            <mesh geometry={nodes.Scene249_1.geometry} material={materials.lamp_2_glass} />
          </group>
          <mesh geometry={nodes.lamp_2_chain_7.geometry} material={materials.lamp_2} position={[0, 0, -47.16]} />
          <mesh geometry={nodes.lamp_2_chain__10__7.geometry} material={materials.lamp_2} position={[0, 0, -69.04]} />
          <mesh geometry={nodes.lamp_2_chain__11__7.geometry} material={materials.lamp_2} position={[0, 0, -71.29]} />
          <mesh geometry={nodes.lamp_2_chain__12__7.geometry} material={materials.lamp_2} position={[0, 0, -73.44]} />
          <mesh geometry={nodes.lamp_2_chain__13__7.geometry} material={materials.lamp_2} position={[0, 0, -75.64]} />
          <mesh geometry={nodes.lamp_2_chain__14__7.geometry} material={materials.lamp_2} position={[0, 0, -77.84]} />
          <mesh geometry={nodes.lamp_2_chain__15__7.geometry} material={materials.lamp_2} position={[0, 0, -80.01]} />
          <mesh geometry={nodes.lamp_2_chain__16__7.geometry} material={materials.lamp_2} position={[0, 0, -82.2]} />
          <mesh geometry={nodes.lamp_2_chain__17__7.geometry} material={materials.lamp_2} position={[0, 0, -84.36]} />
          <mesh geometry={nodes.lamp_2_chain__18__7.geometry} material={materials.lamp_2} position={[0, 0, -86.52]} />
          <mesh geometry={nodes.lamp_2_chain__19__7.geometry} material={materials.lamp_2} position={[0, 0, -88.69]} />
          <mesh geometry={nodes.lamp_2_chain__1__7.geometry} material={materials.lamp_2} position={[0, 0, -49.34]} />
          <mesh geometry={nodes.lamp_2_chain__2__7.geometry} material={materials.lamp_2} position={[0, 0, -51.58]} />
          <mesh geometry={nodes.lamp_2_chain__3__7.geometry} material={materials.lamp_2} position={[0, 0, -53.75]} />
          <mesh geometry={nodes.lamp_2_chain__4__7.geometry} material={materials.lamp_2} position={[0, 0, -55.96]} />
          <mesh geometry={nodes.lamp_2_chain__5__7.geometry} material={materials.lamp_2} position={[0, 0, -58.1]} />
          <mesh geometry={nodes.lamp_2_chain__6__7.geometry} material={materials.lamp_2} position={[0, 0, -60.3]} />
          <mesh geometry={nodes.lamp_2_chain__7__7.geometry} material={materials.lamp_2} position={[0, 0, -62.47]} />
          <mesh geometry={nodes.lamp_2_chain__8__7.geometry} material={materials.lamp_2} position={[0, 0, -64.67]} />
          <mesh geometry={nodes.lamp_2_chain__9__7.geometry} material={materials.lamp_2} position={[0, 0, -66.84]} />
        </group>
        <group position={[169.4, 470, -245]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-472.5, -400.78, -245]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-355.6, -500, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-212.7, -500, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-115.4, -500, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-14.5, -500, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[80.8, -500, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[186.3, -500, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[244, -372.92, -245]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[244, -278.1, -245]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[570, 131.7, -245]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[324.8, 470, -245]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[570, 278.9, -245]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[570, 413, -245]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[343.7, 0, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[485.5, 0, -245]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-422.4, 42.7, -255]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-312.7, 42.7, -255]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-500.19, 418.5, -245]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-472.5, -194.07, -245]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[480.29, 470, -245]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-119.6, 470, -245]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-274.58, 470, -245]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-430.65, 470, -245]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-500.19, 315.3, -245]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-500.19, 230.05, -245]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-500.19, 126.15, -245]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
        <group position={[-472.5, -305.92, -245]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Scene270.geometry} material={materials.lamp} />
          <mesh geometry={nodes.Scene270_1.geometry} material={materials.lamp_glass} />
        </group>
      </group>
      <group position={[-0.35, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[325, -304.1, -91.13]}>
          <mesh geometry={nodes.Scene272.geometry} material={materials.soap} />
          <mesh geometry={nodes.Scene272_1.geometry} material={materials.soap} />
          <mesh geometry={nodes.soap_1001.geometry} material={materials.soap} />
        </group>
        <group position={[325, -395.6, -91.13]}>
          <mesh geometry={nodes.Scene272.geometry} material={materials.soap} />
          <mesh geometry={nodes.Scene272_1.geometry} material={materials.soap} />
          <mesh geometry={nodes.soap_1_1.geometry} material={materials.soap} />
        </group>
        <group position={[333, -347.4, -71.2]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Washers_1.geometry} material={materials.Washers} position={[0, -30.86, -20]} />
          <mesh geometry={nodes.Washers_1001.geometry} material={materials.Washers} position={[89.1, 4.1, -18.89]} />
          <mesh geometry={nodes.Washers_2.geometry} material={materials.Washers} position={[-88.1, 4.1, -18.89]} />
          <mesh geometry={nodes.Washers_2__1_.geometry} material={materials.Washers} position={[2.1, 4.1, -18.89]} />
          <mesh geometry={nodes.Washers_mirror.geometry} material={materials.Washers} position={[0, -30.86, -20.61]} />
        </group>
        <mesh geometry={nodes.bin__1_.geometry} material={materials.rack} position={[443.7, -462.3, 0]} />
        <mesh geometry={nodes.Handryer.geometry} material={materials.Handryer} position={[436.8, -19.2, -94.6]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Handryer__1_.geometry} material={materials.Handryer} position={[379.1, -19.2, -94.6]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Handryer__2_.geometry} material={materials.Handryer} position={[325.5, -19.2, -94.6]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.Jorsch.geometry} material={materials.Jorsch} position={[493.2, -46.7, 0]}>
          <mesh geometry={nodes.Jorsch_1_1.geometry} material={materials.Jorsch} position={[0, 0, -23.6]} />
        </mesh>
        <mesh geometry={nodes.Jorsch__1_.geometry} material={materials.Jorsch} position={[493.2, -461.2, 0]}>
          <mesh geometry={nodes.Jorsch_1_1_1.geometry} material={materials.Jorsch} position={[0, 0, -23.6]} />
        </mesh>
        <mesh geometry={nodes.Paper.geometry} material={materials.Paper} position={[479.5, -107.5, -38.2]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Paper__1_.geometry} material={materials.Paper} position={[479.5, -438.4, -38.2]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Towels.geometry} material={materials.Towels} position={[338.3, -500.9, -123.3]} />
        <mesh geometry={nodes.Towels__1_.geometry} material={materials.Towels} position={[420.9, -500.9, -123.3]} />
        <mesh geometry={nodes.WC.geometry} material={materials.WC_1} position={[530.7, -502.4, 0]}>
          <mesh geometry={nodes.WC_1_1.geometry} material={materials.WC_1} position={[0, 29.97, -41.91]} />
          <mesh geometry={nodes.WC_1_2.geometry} material={materials.WC_1} position={[0, 29.97, -41.91]} />
        </mesh>
        <mesh geometry={nodes.WC__1_.geometry} material={materials.WC_1} position={[530.7, -17.9, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.WC_1_1_1.geometry} material={materials.WC_1} position={[0, 29.97, -41.91]} />
          <mesh geometry={nodes.WC_1_2_1.geometry} material={materials.WC_1} position={[0, 29.97, -41.91]} rotation={[-1.69, 0, 0]} />
        </mesh>
      </group>
      <group position={[-0.35, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[25, 517.8, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Door_2_1.geometry} material={materials.Door_2} />
          <group position={[37.41, -3.16, 0]}>
            <mesh geometry={nodes.Scene291.geometry} material={materials.Door_2} />
            <mesh geometry={nodes.Scene291_1.geometry} material={materials.glass} />
          </group>
          <mesh geometry={nodes.Door_2_1_1.geometry} material={materials.Door_2} position={[-31.57, 0, -108.06]} />
        </group>
        <mesh geometry={nodes.border.geometry} material={materials.border} />
        <mesh geometry={nodes.Scene288.geometry} material={materials.floor} />
        <mesh geometry={nodes.Scene288_1.geometry} material={materials.celling} />
        <mesh geometry={nodes.Scene288_2.geometry} material={materials.wall} />
        <mesh geometry={nodes.Scene288_3.geometry} material={materials.wall_2} />
        <mesh geometry={nodes.Scene289.geometry} material={materials.wall_2} />
        <mesh geometry={nodes.Scene289_1.geometry} material={materials.celling} />
        <mesh geometry={nodes.Scene289_2.geometry} material={materials.wall} />
        <mesh geometry={nodes.Scene289_3.geometry} material={materials.wall_2} />
        <mesh geometry={nodes.wc_wall.geometry} material={materials.wall} position={[472.5, -260, -150]} />
        <mesh geometry={nodes.wc_wall_2.geometry} material={materials.wall} position={[290, -250, -150]} />
        <group position={[325, 515, -40.4]} rotation={[0, 0, -Math.PI]}>
          <group position={[0, -33.66, 0]}>
            <mesh geometry={nodes.Scene293.geometry} material={materials.Window_1} />
            <mesh geometry={nodes.Scene293_1.geometry} material={materials.glass} />
          </group>
          <group position={[-164.33, -40.42, -95.73]}>
            <mesh geometry={nodes.Scene294.geometry} material={materials.Window_1} />
            <mesh geometry={nodes.Scene294_1.geometry} material={materials.glass} />
            <mesh geometry={nodes.Window_1_1_1.geometry} material={materials.Window_1} position={[71.64, 10.22, 0.01]} />
          </group>
          <group position={[164.33, -40.42, -95.73]}>
            <mesh geometry={nodes.Scene296.geometry} material={materials.Window_1} />
            <mesh geometry={nodes.Scene296_1.geometry} material={materials.glass} />
            <mesh geometry={nodes.Window_1_2_1.geometry} material={materials.Window_1} position={[-71.64, 10.22, 0.01]} />
          </group>
        </group>
        <group position={[-274.6, 515, -40.4]} rotation={[0, 0, -Math.PI]}>
          <group position={[0, -33.66, 0]}>
            <mesh geometry={nodes.Scene293.geometry} material={materials.Window_1} />
            <mesh geometry={nodes.Scene293_1.geometry} material={materials.glass} />
          </group>
          <group position={[-164.33, -40.42, -95.73]}>
            <mesh geometry={nodes.Scene294.geometry} material={materials.Window_1} />
            <mesh geometry={nodes.Scene294_1.geometry} material={materials.glass} />
            <mesh geometry={nodes.Window_1_1_1_1.geometry} material={materials.Window_1} position={[71.64, 10.22, 0.01]} />
          </group>
          <group position={[164.33, -40.42, -95.73]}>
            <mesh geometry={nodes.Scene296.geometry} material={materials.Window_1} />
            <mesh geometry={nodes.Scene296_1.geometry} material={materials.glass} />
            <mesh geometry={nodes.Window_1_2_1_1.geometry} material={materials.Window_1} position={[-71.64, 10.22, 0.01]} />
          </group>
        </group>
        <mesh geometry={nodes.Door_1.geometry} material={materials.Door_1} position={[291.2, -131.1, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Door_1_1_2.geometry} material={materials.Door_1} position={[37.41, -3.16, 0]}>
            <mesh geometry={nodes.Door_1_1_1_2.geometry} material={materials.Door_1} position={[-69.46, 3.16, -100]} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.Door_1__1_.geometry} material={materials.Door_1} position={[469.9, -192.8, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Door_1_1.geometry} material={materials.Door_1} position={[37.41, -3.16, 0]}>
            <mesh geometry={nodes.Door_1_1_1.geometry} material={materials.Door_1} position={[-69.46, 3.16, -100]} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.Door_1__2_.geometry} material={materials.Door_1} position={[469.9, -327.2, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Door_1_1_1001.geometry} material={materials.Door_1} position={[37.41, -3.16, 0]}>
            <mesh geometry={nodes.Door_1_1_1_1.geometry} material={materials.Door_1} position={[-69.46, 3.16, -100]} />
          </mesh>
        </mesh>
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/Coffee_Shop-transformed.glb')