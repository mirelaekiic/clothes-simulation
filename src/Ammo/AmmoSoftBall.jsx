/* eslint-disable react/no-unknown-property */
import {Sphere} from '@react-three/drei'
import React from 'react'
import {useSoftBody} from 'use-ammojs'
import {DEFAULT_SOFTBODY_OPTIONS} from '../utils/constants'


export const AmmoSoftBall = ({
  radius = 0.3,
  position = [0, 0, 0],
}) => {
  const [ref] = useSoftBody(DEFAULT_SOFTBODY_OPTIONS)

  return (
    <Sphere
      ref={ref}
      args={[radius, 64, 64]}
      position={position}
    >
      <meshPhysicalMaterial
        attach="material"
        color="red"
      />
    </Sphere>
  )
}
