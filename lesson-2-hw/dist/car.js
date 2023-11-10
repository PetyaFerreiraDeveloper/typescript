class Car {
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    get carBrand() {
        return this.brand;
    }
    set carBrand(newCarBrand) {
        this.carBrand = newCarBrand;
    }
    get carModel() {
        return this.model;
    }
    set carModel(newCarModel) {
        this.model = newCarModel;
    }
    get carHorsepower() {
        return this.horsePower;
    }
    set carHorsePower(newHorsePower) {
        this.horsePower = newHorsePower;
    }
    printDetails() {
        return `The car is: ${this.brand} ${this.model} – ${this.horsePower} HP."`;
    }
}
const car1 = new Car("Chevrolet", "Impala", 390);
const car2 = new Car("Skoda", "Karoq", 150);
console.log(car1.printDetails());
console.log(car2.printDetails());
//# sourceMappingURL=car.js.map