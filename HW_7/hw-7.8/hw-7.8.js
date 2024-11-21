class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderellas = [
    new Cinderella('cinderella1', 18, 34),
    new Cinderella('cinderella2', 19, 35),
    new Cinderella('cinderella3', 31, 36),
    new Cinderella('cinderella4', 24, 37),
    new Cinderella('cinderella5', 22, 38),
    new Cinderella('cinderella6', 27, 39),
    new Cinderella('cinderella7', 23, 40),
    new Cinderella('cinderella8', 35, 41),
    new Cinderella('cinderella9', 56, 42),
    new Cinderella('cinderella10', 81, 43)
]

let prince = new Prince('jora', 36, 37);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        console.log(cinderella);
    }
}

let cinderellaForPrince = cinderellas.find((cinderella) => cinderella.footSize === prince.shoe);
console.log(cinderellaForPrince);




