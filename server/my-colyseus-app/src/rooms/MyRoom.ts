import { Room, Client } from 'colyseus'
import { cubeColor, MyRoomState, Player } from './schema/MyRoomState'

export class MyRoom extends Room<MyRoomState> {
  onCreate(options: any) {
    this.setState(new MyRoomState())


  }

  onJoin(client: Client, options: any) {
 
    const newPlayer = new Player(
      client.id,
      options.userData.displayName || 'Anonymous'
    )
    this.state.players.set(client.sessionId, newPlayer)
    console.log(newPlayer.name, 'joined! => ', options.userData)
  }

  onLeave(client: Client, consented: boolean) {
    const player = this.state.players.get(client.sessionId)
    console.log(player.name, 'left!')

    this.state.players.delete(client.sessionId)
  }

  onDispose() {
    console.log('Disposing room...')
  }
}
