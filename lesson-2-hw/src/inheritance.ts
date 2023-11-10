class Animal {
  eat(): void {
    console.log("eating...")
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("barking...")
  }
}

class Cat extends Animal {
  meow(): void {
    console.log("meowing...")
  }
}

const dog1 = new Dog()
dog1.eat()
dog1.bark()
