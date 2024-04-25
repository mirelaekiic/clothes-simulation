import {SoftBodyType} from 'use-ammojs'


export const MODEL_SCALE = 1

export const GROUND_SIZE = 10

export const DEFAULT_LINEAR_DAMPING = 10

export const DEFAULT_ANGULAR_DAMPING = 10

export const USE_AMMO = true

export const DEFAULT_SOFTBODY_OPTIONS = {
  type: SoftBodyType.TRIMESH,
  // mass: 0,
  margin: 0.003,
  clusters: 0,
  viterations: 1,
  piterations: 1,
  friction: 0.1,
  damping: 0,
  pressure: 0,
  linearStiffness: 0.1,
  angularStiffness: 0.1,
  volumeStiffness: 0,
  randomizeConstraints: true,
  // activationState: BodyActivationState.ACTIVE_TAG,
  // collisionFilterGroup: 0,
  // collisionFilterMask: 0,
  // collisionFlag: 0,
  // anchors: [],
}
