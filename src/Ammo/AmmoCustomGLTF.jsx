import {useGLTF} from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import {useEffect} from 'react'
import {MathUtils} from 'three'
import {BodyType, ShapeType, useAmmoPhysicsContext} from 'use-ammojs'
import {isVector3Arr} from '../utils/common'
import {assertDefined} from '../utils/custom.assert'


export const AmmoCustomGLTF = ({
  url,
  shapeType = ShapeType.BOX,
  bodyType = BodyType.DYNAMIC,
  position,
  rotation,
  scale,
}) => {
  assertDefined(url)
  const gltf = useGLTF(url)
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    if (isVector3Arr(position)) {
      gltf.scene.position.set(position[0], position[1], position[2])
    }
    if (isVector3Arr(rotation)) {
      gltf.scene.rotation.set(rotation[0], rotation[1], rotation[2])
    }
    if (isVector3Arr(scale)) {
      gltf.scene.scale.set(scale[0], scale[1], scale[2])
    }
    three.scene.add(gltf.scene)
    const newUUID = MathUtils.generateUUID()
    apc.addRigidBody(
        newUUID,
        gltf.scene,
        {
          meshToUse: gltf.scene,
          shapeConfig: {
            type: shapeType,
          },
        },
        {
          type: bodyType,
        },
    )
  }, [apc, bodyType, gltf.scene, position, rotation, scale, shapeType, three.scene])
}
