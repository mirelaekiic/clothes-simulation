/* eslint-disable react/no-unknown-property */
import {OrbitControls} from '@react-three/drei'
import React, {Suspense} from 'react'
import {Physics} from 'use-ammojs'
import {AmmoCustomSoftGLTF} from './AmmoCustomSoftGLTF'
import {AmmoGround} from './AmmoGround'


export const AmmoExperience = () => {
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls makeDefault/>
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5}/>
      {/* <axesHelper args={[5]}/> */}
      <Suspense>
        <Physics
          drawDebug={{
            DrawWireframe: true,
            DrawAabb: true,
            DrawFeaturesText: true,
            DrawContactPoints: true,
            NoDeactivation: true,
            NoHelpText: true,
            DrawText: true,
            ProfileTimings: true,
            EnableSatComparison: true,
            DisableBulletLCP: true,
            EnableCCD: true,
            DrawConstraints: true,
            DrawConstraintLimits: true,
            FastWireframe: true,
            DrawNormals: true,
            MAX_DEBUG_DRAW_MODE: true,
          }}
          drawDebugMode={{
            DrawWireframe: true,
            DrawAabb: true,
            DrawFeaturesText: true,
            DrawContactPoints: true,
            NoDeactivation: true,
            NoHelpText: true,
            DrawText: true,
            ProfileTimings: true,
            EnableSatComparison: true,
            DisableBulletLCP: true,
            EnableCCD: true,
            DrawConstraints: true,
            DrawConstraintLimits: true,
            FastWireframe: true,
            DrawNormals: true,
            MAX_DEBUG_DRAW_MODE: true,
          }}
        // gravity={[0, -9.8, 0]}
        // epsilon={1}
        // fixedTimeStep={1}
        // maxSubSteps={1}
        // solverIterations={1}
        // simulationSpeed={1}
        >
          <AmmoGround/>
          <AmmoCustomSoftGLTF
            url='./models/Pant.gltf'
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          />
        </Physics>
      </Suspense>
    </>
  )
}
