/* eslint-disable react/no-unknown-property */
import {useAnimations, useGLTF} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {RigidBody} from '@react-three/rapier'
import {useControls} from 'leva'
import React, {useRef} from 'react'
import {DEFAULT_ANGULAR_DAMPING, DEFAULT_LINEAR_DAMPING, MODEL_SCALE} from '../utils/constants'


export const RapierPant = () => {
  const {visiblePant, rotationY} = useControls({
    visiblePant: {value: true, label: 'Show Pant'},
    rotationY: {value: 0, min: 0, max: 1, label: 'Rotation Y'},
  })
  const gltf = useGLTF('./models/Pant.gltf')
  const gltfRef = useRef()
  // eslint-disable-next-line no-unused-vars
  const {actions} = useAnimations(gltf.scene.animations, gltfRef)
  const rotationRef = useRef(0)
  const rigidBody = useRef(null)

  useFrame((state, delta) => {
    const rotationAngle = rotationY * Math.PI * 2
    rotationRef.current += (rotationAngle - rotationRef.current) * 0.05
    gltf.scene.rotation.y = rotationRef.current
  })

  return visiblePant ? (
    <RigidBody
      ref={rigidBody}
      enabledRotations={[false, true, false]}
      linearDamping={DEFAULT_LINEAR_DAMPING}
      angularDamping={DEFAULT_ANGULAR_DAMPING}
    >
      <primitive
        ref={gltfRef}
        object={gltf.scene}
        scale={MODEL_SCALE}
      />
    </RigidBody>
  ) : null
}
