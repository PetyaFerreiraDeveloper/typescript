import { Person, PersonWithoutAge } from "./interfaces/Person"
import { getCapitalizedName } from "./utils/person-utils"

// class PersonDetails implements Person {
//   name: string
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

const person1: Person = { name: "ivan", age: 23 }
const person2: PersonWithoutAge = { name: "kara" }

console.log(getCapitalizedName(person1))
console.log(getCapitalizedName(person2))
