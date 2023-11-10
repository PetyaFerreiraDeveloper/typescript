// INTERFACES DEMO

// // Contract
// interface UserDetails {
//   firstName: "Tsveti" | "Gosho" | "Pesho"
//   lastName: string
//   email?: string
//   tellDetails?: () => void
// }

// // interface can be used as a type of a variable
// const user1: UserDetails = {
//   firstName: "Pesho",
//   email: "pesho@abv.bg",
//   lastName: "petrov",
//   tellDetails: function () {
//     console.log(
//       `User details: ${this.firstName} ${this.lastName} with email ${this.email}`
//     )
//   },
// }

// // user1.tellDetails()

// interface Human {
//   legsCount: number
//   skinColor: string
// }

// interface PersonDetails extends UserDetails, Human {}

// // the interface can be implemented by a class
// class Person implements PersonDetails {
//   firstName: "Tsveti" | "Gosho" | "Pesho"
//   lastName: string
//   legsCount: number
//   skinColor: string
//   fullName: string

//   constructor(
//     firstName: "Tsveti" | "Gosho" | "Pesho",
//     lastName: string,
//     legsCount: number,
//     skinColor: string
//   ) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.legsCount = legsCount
//     this.skinColor = skinColor
//     this.fullName = this.firstName + " " + this.lastName
//   }
// }

// // can be used as a return type
// function getUsers(): UserDetails[] {
//   return [
//     { firstName: "Pesho", lastName: "Petrov" },
//     { firstName: "Gosho", lastName: "Ivanov" },
//   ]
// }

// TYPES DEMO

type Mammal = {
  legs: number
  furColor: string
}

type Animal = {
  eat: () => void
}

type Dog = Mammal & Animal

interface DogOwner {
  dogs: Dog[]
}

function getMammal(): Dog {
  const dog: Dog = {
    legs: 4,
    furColor: "brown",
    eat: () => console.log("Dog is eating"),
  }
  return dog
}

console.log(getMammal().eat())
