"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoom = void 0;
const colyseus_1 = require("colyseus");
const MyRoomState_1 = require("./schema/MyRoomState");
class MyRoom extends colyseus_1.Room {
    onCreate(options) {
        this.setState(new MyRoomState_1.MyRoomState());
        this.onMessage('pickColor', (client, message) => {
            const player = this.state.players.get(client.sessionId);
            player.color = message.color;
            this.broadcast("flashColor", { color: message.color });
            //this.send(client, "blue", {})
            console.log(player.name, ' picked color ', message.color);
        });
        this.onMessage('setColor', (client, message) => {
            const player = this.state.players.get(client.sessionId);
            this.state.cubes.forEach((cube) => {
                if (cube.id == message.id) {
                    cube.color = player.color;
                }
            });
            console.log(player.name, ' changed ', message.id, " to ", player.color);
        });
    }
    onJoin(client, options) {
        const newPlayer = new MyRoomState_1.Player(client.id, options.userData.displayName || 'Anonymous');
        this.state.players.set(client.sessionId, newPlayer);
        console.log(newPlayer.name, 'joined! => ', options.userData);
    }
    onLeave(client, consented) {
        const player = this.state.players.get(client.sessionId);
        console.log(player.name, 'left!');
        this.state.players.delete(client.sessionId);
    }
    onDispose() {
        console.log('Disposing room...');
    }
}
exports.MyRoom = MyRoom;
