// namespace PersonUtils {
//   interface PersonDetails {
//     name: string
//   }
//   export class Person implements PersonDetails {
//     name: string
//     constructor(name: string) {
//       this.name = name
//     }
//     getName(): string {
//       return this.name
//     }
//   }
// }
// class Person {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   getName(): string {
//     return this.name
//   }
// }
// const p1 = new Person("Petya1")
// const p2 = new PersonUtils.Person("Olaf")
// console.log(p1);
/// <reference path="Animal.ts" />
var AnimalGroup;
(function (AnimalGroup) {
    class Dog {
        constructor(furColor, type) {
            this.furColor = furColor;
            this.type = type;
        }
    }
    AnimalGroup.Dog = Dog;
})(AnimalGroup || (AnimalGroup = {}));
// does not work says AnimalGroup.AnimalDetails is not a constructor
// const cat = new AnimalGroup.AnimalDetails("brown", "cat")
// console.log(cat)
const dog = new AnimalGroup.Dog("yellow", "shepard");
console.log(dog);
//# sourceMappingURL=app.js.map