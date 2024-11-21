class Car {
    constructor(model, manufacturer, year, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} км на годину`);
    }
    info () {
        for (const name in this) {
            console.log(name, this[name]);
        }
    }
    increaseMaxSpeed  (newIncSpeed) {
        if (newIncSpeed > 0) this.maximumSpeed = this.maximumSpeed + newIncSpeed
    }
    changeYear (newYear) {
        if (newYear > 1815) this.year = newYear;
    }
    addDriver (driver) {
        this.addDriver = driver;
    }
}

let car1 = new Car('zaz', 'kommunar',1970,120,887);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(30);
car1.changeYear(1980);
car1.addDriver('Borisov');
console.log(car1);
