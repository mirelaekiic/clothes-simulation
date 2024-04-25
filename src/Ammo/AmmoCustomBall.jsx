import {useThree} from '@react-three/fiber'
import {useEffect} from 'react'
import {MathUtils, Mesh, MeshStandardMaterial, SphereGeometry} from 'three'
import {ShapeType, useAmmoPhysicsContext} from 'use-ammojs'


export const AmmoCustomBall = ({
  radius = 0.3,
  position = [0, 0, 0],
}) => {
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    const sphereMesh = new Mesh(
        new SphereGeometry(radius, 64, 64),
        new MeshStandardMaterial({color: 'red'}),
    )
    sphereMesh.position.set(position[0], position[1], position[2])
    three.scene.add(sphereMesh)
    const newUUID = MathUtils.generateUUID()
    apc.addRigidBody(
        newUUID,
        sphereMesh,
        {
          meshToUse: sphereMesh,
          shapeConfig: {
            type: ShapeType.SPHERE,
          },
        },
    )
  }, [apc, position, radius, three.scene])
}
