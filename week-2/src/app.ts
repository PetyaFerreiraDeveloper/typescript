// PROCEDURAL PROGRAMMING

// const baseSalary: number = 30000
// const overtime: number = 150

// function getWage(baseSalary: number, overtime: number) {
//   return baseSalary + overtime * 1.5
// }

// console.log(getWage(baseSalary, overtime))

// OBJECT-ORIENTED PROGRAMMING - has four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism
//Encapsulation - group properties and methods which are relevant for one entity
// everything is encapsulated inside the entity employee
// const employee = {
//   baseSalary: 30000,
//   overtime: 150,
//   getWage: function () {
//     return this.baseSalary + this.overtime * 1.5
//   },
// }

// console.log(employee.getWage())

//Abstraction - presenting a simple interface, while hiding the complex implementation.
// interface Details {
//   getDetails: () => void
// }

// class Person implements Details {
//   private eyeColor: string
//   private skinColor: string

//   constructor(eyeColor: string, skinColor: string) {
//     this.eyeColor = eyeColor
//     this.skinColor = skinColor
//   }
//   public getDetails(): void {
//     console.log(
//       `Hello, my eyes are ${this.eyeColor} and my skin is ${this.skinColor}`
//     )
//   }
// }

// class Computer implements Details {
//   private years: number
//   constructor(years: number) {
//     this.years = years
//   }
//   public getDetails(): void {
//     console.log(`Hello I am ${this.years} years old`)
//   }
// }

// const person1 = new Person("blue", "black")
// const comp1 = new Computer(5)
// person1.getDetails()
// comp1.getDetails()

// Inheritance
// class Animal {
//   numberOfLegs: number
//   furColor: string

//   constructor(numberOfLegs: number, furColor: string) {
//     this.numberOfLegs = numberOfLegs
//     this.furColor = furColor
//   }
//   getAnimal(): void {
//     console.log(`I have ${this.numberOfLegs} and my fur is ${this.furColor}`)
//   }
// }

// class Dog extends Animal {
//   bark(): void {
//     console.log("wow wow")
//   }
// }

// const dog1 = new Dog(4, "brown")
// dog1.bark()
// console.log(dog1.furColor)

// POLYMORPHISM

// class Shape {
//   draw(): void {
//     console.log("Drawing a shape")
//   }
// }
// class Circle extends Shape {
//   draw(): void {
//     console.log("Drawing a circle")
//   }
// }

// const shape1 = new Shape()
// const circle1 = new Circle()
// shape1.draw()
// circle1.draw()

// SOLID
// SINGLE RESPONSIBILITY - each class/ object should have a single responsibility

// if we have all three methods: save(), email(), enroll() inside of the Student class, this might lead to merge confilcts and many people working on the same entity (class Student). Therefore we need to extract the methods in their own classes
// class StudentDemo {
//   studentId: number
//   firstName: string
//   lastName: string

//   constructor(studentId: number, firstName: string, lastName: string) {
//     this.studentId = studentId
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   save(): void {
//     // save student record to DB
//   }

//   email(): void {
//     // send email to student
//   }

//   enroll(): void {
//     // enroll student in a program
//   }
// }

// This is how we can make sure the StudentDemo class above has single responsibility:

// class EmailService {
// //email functionality
// }
// class EnrollmentService {
// //enrollment functionality
// }
// class StudentRepository {
// // works with the DB. Repository classes are closest to the DB
// // CRUD - create, read, update, delete
// }
// class Student{
//   //details for the student : id, fname, lname
// }

//OPEN-CLOSED PRINCIPLE - a class should be opened for extending, but closed for changes

// class Car {
//   protected color: string
//   constructor(color: string) {
//     this.color = color
//   }

//   getColor(): string {
//     return this.color
//   }
// }

// const car1 = new Car("BMW")
// car1.getColor()

// class BMW extends Car {
//   private serialNumber: string
//   constructor(color: string, serialNumber: string) {
//     super(color)
//     this.serialNumber = serialNumber
//   }
//   getDetails(): void {
//     console.log(this.color + "" + this.serialNumber)
//   }
// }

// const myBMW = new BMW("red", "ac45fdsaff")
// console.log(myBMW.getColor())
// myBMW.getDetails()

// LISKOV SUBSTITUTION PRINCIPLE - the child should be able to substitute the parent fully. It must be able to do everything the parent is able to do

// class BaseClassHuman {
//   walk(): void {
//     console.log("I can walk")
//   }
//   breathe(): void {
//     console.log("I can breathe")
//   }
// }

// class Adult extends BaseClassHuman {
//   walk(): void {
//     console.log("I am an adult and I can walk")
//   }
//   breathe(): void {
//     console.log("I am an adult and I can breathe")
//   }
//   work(): void {
//     console.log("As an adult i need to work")
//   }
// }

// class Child implements BaseClassHuman {
//   walk(): void {
//     console.log("I am a child and I can walk")
//   }
//   breathe(): void {
//     console.log("I am a child and I can breathe")
//   }
//   play(): void {
//     console.log("As a child i need to play")
//   }
// }

// const newKid = new Child()
// newKid.walk()

// INTERFACE SEGREGATION - strive to create interfaces in such a way that they do not have nested properties, but instead the nested objects should be interfaces on their own

// interface User {
//   details: PersonDetails
//   address: Address
//   website: string
//   company: Company
// }

// interface Company {
//   name: string
//   cvrNumber: string
// }

// interface Geo {
//   lat: string
//   lng: string
// }

// interface Address {
//   street: string
//   city: string
//   zipcode: string
//   geo: Geo
// }

// interface PersonDetails {
//   id: number
//   name: string
//   email: string
//   phone: string
// }

// class Person implements PersonDetails {
//   id: 12
//   name: "Petya"
//   email: "pan@abv.bg"
//   phone: "123456789"
// }

// DEPENDENCY INVERSION - high level modules should not depend on low level modules

class Wallet {
  balance: number
  constructor(balance: number) {
    this.balance = balance
  }
}

// class DemoUser {
//   wallet: Wallet
//   firstName: string
//   constructor(firstName: string) {
//     this.firstName = firstName
//     // Instantializing the Wallet here is against the dependency inversion principle. It makes all newly created users have the same Ballance
//     // We should strive to never have new object creation in the constructor of a class
//     this.wallet = new Wallet(5000)
//   }

//   getWalletBallance() {
//     return `${this.firstName} has ${this.wallet.balance} in his pocket`
//   }
// }

// const ivanUser = new DemoUser("Ivan")
// console.log(ivanUser.getWalletBallance())
// const peshoUser = new DemoUser("Pesho")
// console.log(peshoUser.getWalletBallance())

// class User {
//   wallet: Wallet
//   firstName: string
//   // i should always pass already instantiated properties to my constructor
//   constructor(firstName: string, wallet: Wallet) {
//     this.firstName = firstName

//     this.wallet = wallet
//   }

//   getWalletBallance() {
//     return `${this.firstName} has ${this.wallet.balance} in the bank`
//   }
// }
// const petyasWallet = new Wallet(4000)
// const petyaUser = new User("Petya", petyasWallet)
// console.log(petyaUser.getWalletBallance())
// const babisWallet = new Wallet(3500)
// const babiUser = new User("Babi", babisWallet)
// console.log(babiUser.getWalletBallance())

// CLASS VS OBJECT
// Class is a blueprint for an object. Imagine a star shape (cookie cutter) for making cookies. The star shape is the class and each cookie is the object created from this class

// // blueprint
// class Person {
//   // properties
//   firstName: string
//   // we need the constructor for Object Instanciation -> Object creation
//   constructor(firstName: string) {
//     this.firstName = firstName
//   }
//   // methods
//   greeting(): void {
//     console.log(`Hello from ${this.firstName}`)
//   }
// }

// // instance of a class
// const personMaria = new Person("Maria")

// // static properties -they can not be called through the constructor when instantiating a new object

// class Human {
//   firstName: string
//   static age: number = 20 // these can only be accessed through the name of the class
//   constructor(firstName: string) {
//     this.firstName = firstName
//   }
//   greeting(): void {
//     console.log(`Hello from ${this.firstName} with age ${Human.age} years`)
//   }
// }

// const humanMaria = new Human("Maria")

// humanMaria.greeting()

// class Manufacturing {
//   maker: string
//   model: string
//   static vehiclesCount: number = 0
//   constructor(maker: string, model: string) {
//     this.maker = maker
//     this.model = model
//   }

//   createVehicle(): string {
//     Manufacturing.vehiclesCount++
//     return `Created cars: ${Manufacturing.vehiclesCount} of ${this.maker} ${this.model}`
//   }
// }

// const car1 = new Manufacturing("toyota", "yaris")
// const car2 = new Manufacturing("toyota", "aygo")
// console.log(car1.createVehicle())
// console.log(car2.createVehicle())

// ACCESSORS - getters and setters. For getting access to private properties

// const fullNameMaxLength: number = 10

// class Employee {
//   private _fullName: string
//   constructor(fullname: string) {
//     this._fullName = fullname
//   }

//   get fullName() {
//     return this._fullName
//   }

//   set fullName(newName: string) {
//     if (newName && newName.length > fullNameMaxLength) {
//       throw new Error(`Fullname has a max length of ${fullNameMaxLength}`)
//     }
//     this._fullName = newName
//   }
// }
// const emp1 = new Employee("Petya Naydenova")
// console.log(emp1.fullName)
// emp1.fullName = "Barbara"
// console.log(emp1.fullName)

// Private, Public, Readonly, static, protected - it is like private, not reachable from the outside. but it is available for classes which are extending it.

// class Person {
//   private name: string
//   protected age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }

//   protected getDetails(): void {
//     console.log(`My name is ${this.name} and I am ${this.age} years old`)
//   }

//   public modifyAge(): void {
//     this.age += 1
//   }
// }

// const petyaPerson = new Person("Petya", 41)

// // petyaPerson.modifyAge()
// // petyaPerson.modifyAge()
// // petyaPerson.modifyAge()
// // petyaPerson.getDetails()

// class Employee extends Person {
//   constructor(name: string, age: number) {
//     super(name, age)
//     this.age
//   }
//   getEmloyeeDetails() {
//     return this.getDetails()
//   }
// }

// const emp1 = new Employee("Pesho", 31)
// emp1.getEmloyeeDetails()

// !-- Abstract classes are only used for inheritance,

// Design Patterns
// Singleton

// class Singleton {
//   private static instance: Singleton | null = null
//   private constructor() {}

//   public static getInstance(): Singleton {
//     if (this.instance === null) {
//       this.instance = new Singleton()
//     }
//     return this.instance
//   }
//   public someMethod(): void {
//     console.log("this is singleton")
//   }
// }

// const instance1 = Singleton.getInstance()
// instance1.someMethod()

// const instance2 = Singleton.getInstance()
// console.log(instance1 === instance2);

