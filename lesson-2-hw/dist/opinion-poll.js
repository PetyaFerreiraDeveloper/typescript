class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printDetails() {
        return `${this.name} is ${this.age} years old`;
    }
}
const person1 = new Person("Petya", 41);
const person2 = new Person("Sofia", 33);
console.log(person1.printDetails());
console.log(person2.printDetails());
//# sourceMappingURL=opinion-poll.js.map