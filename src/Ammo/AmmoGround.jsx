/* eslint-disable react/no-unknown-property */
import {Box} from '@react-three/drei'
import React from 'react'
import {DoubleSide} from 'three'
import {ShapeType, useRigidBody} from 'use-ammojs'
import {GROUND_SIZE} from '../utils/constants'


export const AmmoGround = () => {
  const [ref] = useRigidBody(() => ({
    shapeType: ShapeType.BOX,
    mass: 0,
    position: [0, -0.5, 0],
  }))

  return (
    <Box
      ref={ref}
      args={[GROUND_SIZE, 1, GROUND_SIZE]}
    >
      <meshStandardMaterial
        color="green"
        side={DoubleSide}
      />
    </Box>
  )
}
