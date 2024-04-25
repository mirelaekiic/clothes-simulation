/* eslint-disable react/react-in-jsx-scope */
import {Canvas} from '@react-three/fiber'
import ReactDOM from 'react-dom/client'
import {AmmoExperience} from './Ammo/AmmoExperience'
import {RapierExperience} from './Rapier/RapierExperience'
import './index.css'
import {USE_AMMO} from './utils/constants'


const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [- 4, 3, 6],
      }}
    >
      {USE_AMMO ? <AmmoExperience/> : <RapierExperience/>}
    </Canvas>,
)
