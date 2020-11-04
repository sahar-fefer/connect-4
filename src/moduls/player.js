class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.wins = 0;
    }
}

class Computer extends Player {
    constructor() {
        super();
        this.type = "computer";
        this.color = "#82eee2";
        this.wins = 0;
    }
}
module.exports = { Player, Computer };