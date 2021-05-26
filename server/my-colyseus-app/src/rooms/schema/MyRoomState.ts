import { Schema, Context, type, MapSchema } from '@colyseus/schema'

export enum cubeColor {
  NEUTRAL,
  BLUE,
  RED
}

export class Player extends Schema {
  @type('string') id: string
  @type('string') name: string
  @type('number') color: cubeColor
  constructor(id: string, name: string) {
    super()
    this.id = id
    this.name = name
    this.color = cubeColor.NEUTRAL
  }
}

export class Cube extends Schema {
  @type('number') id: number
  @type('number') color: cubeColor
  constructor(id: number, name: string) {
    super()
    this.id = id
    this.color = cubeColor.NEUTRAL
  }
}

export class MyRoomState extends Schema {
  @type('number') fader1: number = 0
  @type({ map: Cube }) cubes = new MapSchema<Cube>()
  @type({ map: Player }) players = new MapSchema<Player>()
}
