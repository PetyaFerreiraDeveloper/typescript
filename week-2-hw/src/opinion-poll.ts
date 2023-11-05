class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  printDetails(): string {
    return `${this.name} is ${this.age} years old`
  }
}

const person1 = new Person("Petya", 41)
const person2 = new Person("Sofia", 33)
console.log(person1.printDetails())
console.log(person2.printDetails())
