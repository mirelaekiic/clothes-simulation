/* eslint-disable react/no-unknown-property */
import {Sphere} from '@react-three/drei'
import React from 'react'
import {ShapeType, useRigidBody} from 'use-ammojs'


export const AmmoBall = ({
  radius = 0.3,
  position = [0, 0, 0],
}) => {
  const [ref] = useRigidBody(() => ({
    shapeType: ShapeType.SPHERE,
    mass: 1,
  }))

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
