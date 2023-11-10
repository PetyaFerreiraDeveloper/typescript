// console.log("123")
// const getTestGenerics = <T>(paramId: T): T => {
//   return paramId
// }

// const id1 = getTestGenerics<number>(1)
// const id2 = getTestGenerics<string>("sdflkjsdERR123")
// const ids = getTestGenerics<number[]>([1, 2, 3])

// type UserData<T> = {
//   name: string
//   age: number
//   address: string
//   id: T
// }

// const x = getTestGenerics<UserData<number>>({
//   name: "Ivan",
//   age: 25,
//   address: "Pleven",
//   id: 5,
// })

// const y = getTestGenerics<UserData<string>>({
//   name: "Ivan",
//   age: 25,
//   address: "Pleven",
//   id: "XyZ123",
// })

// const generateAndAttachId = <T>(obj: T) => {
//   const objId = Math.random()
//   return { ...obj, id: objId }
// }

// type PersonDetails = {
//   name: string
//   age: number
//   city: string
// }
// const person: PersonDetails = { name: "Mitko", age: 21, city: "Lovech" }
// const personWithId = generateAndAttachId<PersonDetails>(person)
// console.log(personWithId)

// type AnimalDetails = {
//   legsCount: number
//   furColor: string
//   name: string
// }

// const animal: AnimalDetails = { legsCount: 4, furColor: "brown", name: "Sharo" }
// const animalWithId = generateAndAttachId(animal)
// console.log(animalWithId);

// interface DocumentObject<T> {
//   id: number
//   name: string
//   data: T
// }

// const document1: DocumentObject<{ name: string }[]> = {
//   id: 1,
//   name: "flowers",
//   data: [{ name: "roza" }, { name: "lale" }],
// }

// const doc2: DocumentObject<{ name: string; age: number; address: string }> = {
//   id: 2,
//   name: "person",
//   data: { name: "pesho", age: 12, address: "bulgaria" },
// }
// const doc3: DocumentObject<number> = {
//   id: 3,
//   name: "test",
//   data: 1,
// }

// function echo<T>(arg: T): T {
//   console.log(typeof arg)

//   return arg
// }

// echo("hello")
// echo(1)

// const takeLast = <T>(array: T[]): T => {
//   return array[array.length - 1]
// }

// console.log(takeLast([1, 2, 3, 4]))
// console.log(takeLast(["a", "b", "c"]))
// console.log(takeLast(["a", "b", "c", 2]))

// const obj = { a: 1, b: 2, c: 3 }

// console.log(Object.entries(obj))

// const makeTuples = <T, Z>(a: T, b: Z) => {
//   return [a, b]
// }

// console.log(makeTuples("a", true))

// type genericConstructor<T, V> = {
//   (arg1: T, arg2: V): [T, V]
// }

// const generateFn: genericConstructor<string, number> = <T, V>(
//   arg1: T,
//   arg2: V
// ) => {
//   return [arg1, arg2]
// }
// const output = generateFn("hello", 5)
// console.log(output)

// class Collection<T> {
//   data: T[]
//   constructor(...elements: T[]) {
//     this.data = elements
//   }

//   addElement(el: T) {
//     this.data.push(el)
//   }
//   removeElement(el: T) {
//     const index = this.data.indexOf(el)
//     if (index > -1) {
//       this.data.splice(index, 1)
//     }
//   }
// }

// const numberCollection = new Collection(1, 2, 3, 4)

// console.log(numberCollection.data)
// numberCollection.addElement(99)
// console.log(numberCollection.data)

// numberCollection.removeElement(2)
// console.log(numberCollection.data)

// class Test<F, S> {
//   first: F
//   second: S

//   constructor(first: F, second: S) {
//     this.first = first
//     this.second = second
//   }
//   getConcatinatedArguments() {
//     return `My first param: ${this.first} and my second param: ${this.second}`
//   }
// }

// const test1 = new Test(1, 'gosho')
// console.log(test1.getConcatinatedArguments());
// const person = { age: 33, firstName: "petya", lastName: "ferreira" }

// interface FullName {
//   firstName: string
//   lastName: string
// }

// function fullName<T extends FullName>(obj: T) {
//   return `The full name is ${obj.firstName} ${obj.lastName}`
// }

// let output = fullName({ firstName: "petya", lastName: "ferreira" })
// const obj = fullName(person)
// console.log(output)
