"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_utils_1 = require("./utils/person-utils");
// class PersonDetails implements Person {
//   name: string
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }
const person1 = { name: "ivan", age: 23 };
const person2 = { name: "kara" };
console.log((0, person_utils_1.getCapitalizedName)(person1));
console.log((0, person_utils_1.getCapitalizedName)(person2));
//# sourceMappingURL=index.js.map