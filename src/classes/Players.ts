 import {isPlayer} from '../interfaces/IsPlayer.js';
 
 export class Players implements isPlayer {
    constructor(
        readonly name: string,
        private age: number,
        public country: string
    ){}

    get(){
        return this.age;
    }

    play(){
        console.log(`playing ${this.name} from ${this.country}`);
    }

}