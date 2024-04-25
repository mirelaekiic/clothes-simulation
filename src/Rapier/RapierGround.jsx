/* eslint-disable react/no-unknown-property */
import {Plane} from '@react-three/drei'
import {RigidBody} from '@react-three/rapier'
import React from 'react'
import {DoubleSide} from 'three'
import {GROUND_SIZE} from '../utils/constants'


export const RapierGround = () => {
  return (
    <RigidBody lockTranslations={true}>
      <Plane
        position={[0, -0.000001, 0]}
        rotation={[- Math.PI * 0.5, 0, 0]}
        scale={GROUND_SIZE}
      >
        <meshStandardMaterial
          color="green"
          side={DoubleSide}
        />
      </Plane>
    </RigidBody>
  )
}
