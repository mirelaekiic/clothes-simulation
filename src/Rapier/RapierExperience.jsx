/* eslint-disable react/no-unknown-property */
import {OrbitControls} from '@react-three/drei'
import {Debug, Physics} from '@react-three/rapier'
import React, {Suspense} from 'react'
import {RapierGround} from './RapierGround'
import {RapierPant} from './RapierPant'


export const RapierExperience = () => {
  return (
    <>
      {/* <Perf position="top-left"/> */}
      <OrbitControls makeDefault/>
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5}/>
      {/* <axesHelper args={[5]}/> */}
      <Suspense>
        <Physics colliders='trimesh'>
          <RapierGround/>
          <RapierPant/>
          <Debug/>
        </Physics>
      </Suspense>
    </>
  )
}
