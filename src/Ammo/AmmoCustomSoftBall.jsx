import {useThree} from '@react-three/fiber'
import {useEffect} from 'react'
import {MathUtils, Mesh, MeshStandardMaterial, SphereGeometry} from 'three'
import {useAmmoPhysicsContext} from 'use-ammojs'
import {DEFAULT_SOFTBODY_OPTIONS} from '../utils/constants'


export const AmmoCustomSoftBall = ({
  radius = 0.3,
  position = [0, 0, 0],
}) => {
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    const sphereMesh = new Mesh(
        new SphereGeometry(radius, 50, 50),
        new MeshStandardMaterial({color: 'red'}),
    )
    sphereMesh.position.set(position[0], position[1], position[2])
    three.scene.add(sphereMesh)
    const newUUID = MathUtils.generateUUID()
    apc.addSoftBody(
        newUUID,
        sphereMesh,
        DEFAULT_SOFTBODY_OPTIONS,
    )
  }, [apc, position, radius, three.scene])
}
