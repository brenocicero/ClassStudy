class characters {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }

    atacar() {
        if (this.category === "mago") {
            console.log(`O ${this.category} atacou usando magia`);
        } else if (this.category === "guerreiro") {
            console.log(`O ${this.category} atacou usando espada`);
        } else if (this.category === "monge") {
            console.log(`O ${this.category} atacou usando artes marciais`);
        } else if (this.category === "ninja") {
            console.log(`O ${this.category} atacou usando shuriken`);
        }
    }
}

let hero = new characters("Naruto", 45, "ninja");

hero.atacar()
