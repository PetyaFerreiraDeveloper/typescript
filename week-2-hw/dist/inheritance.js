class Animal {
    eat() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking...");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing...");
    }
}
const dog1 = new Dog();
dog1.eat();
dog1.bark();
//# sourceMappingURL=inheritance.js.map