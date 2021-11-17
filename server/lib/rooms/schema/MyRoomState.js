"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoomState = exports.Cube = exports.Player = exports.cubeColor = void 0;
const schema_1 = require("@colyseus/schema");
var cubeColor;
(function (cubeColor) {
    cubeColor[cubeColor["NEUTRAL"] = 0] = "NEUTRAL";
    cubeColor[cubeColor["BLUE"] = 1] = "BLUE";
    cubeColor[cubeColor["RED"] = 2] = "RED";
})(cubeColor = exports.cubeColor || (exports.cubeColor = {}));
class Player extends schema_1.Schema {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
        this.color = cubeColor.NEUTRAL;
    }
}
__decorate([
    schema_1.type('string')
], Player.prototype, "id", void 0);
__decorate([
    schema_1.type('string')
], Player.prototype, "name", void 0);
__decorate([
    schema_1.type('number')
], Player.prototype, "color", void 0);
exports.Player = Player;
class Cube extends schema_1.Schema {
    constructor(id) {
        super();
        this.id = id;
        this.color = cubeColor.NEUTRAL;
    }
}
__decorate([
    schema_1.type('number')
], Cube.prototype, "id", void 0);
__decorate([
    schema_1.type('number')
], Cube.prototype, "color", void 0);
exports.Cube = Cube;
class MyRoomState extends schema_1.Schema {
    constructor(cubeCount = 8) {
        super();
        this.cubes = new schema_1.ArraySchema();
        this.players = new schema_1.MapSchema();
        for (let i = 0; i <= cubeCount; i++) {
            this.cubes.push(new Cube(i));
        }
    }
}
__decorate([
    schema_1.type([Cube])
], MyRoomState.prototype, "cubes", void 0);
__decorate([
    schema_1.type({ map: Player })
], MyRoomState.prototype, "players", void 0);
exports.MyRoomState = MyRoomState;
