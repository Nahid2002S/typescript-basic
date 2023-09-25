export class Players {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    get() {
        return this.age;
    }
    play() {
        console.log(`playing ${this.name} from ${this.country}`);
    }
}
