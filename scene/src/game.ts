import { getCurrentRealm } from '@decentraland/EnvironmentAPI'
import { Cone, cubeColor } from './cones'
import { Cube } from './cube'



// add cubes
for (let i = 0; i < 8; i++) {
  let cube = new Cube(
    {
      position: new Vector3(i * 2 + 1, 1, 4),
    }
  )
}


// add cones
let blueCone = new Cone(
  {position: new Vector3(6, 1, 14)},
  cubeColor.BLUE
)

let redCone = new Cone(
  {position: new Vector3(10, 1, 14)},
  cubeColor.RED
)


// ground
let floor = new Entity()
floor.addComponent(new GLTFShape('models/FloorBaseGrass.glb'))
floor.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1.6, 0.1, 1.6),
  })
)
engine.addEntity(floor)



