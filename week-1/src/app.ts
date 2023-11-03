let num: number = 5
let str: string = "123"

// console.log(num + Number(str))

let isBoolean: boolean = true
// isBoolean = [1,2,34,5].includes(100)
isBoolean = [1, 2, 34, 5].some((e) => e === 1)

// console.log(isBoolean)
let numberAndStringTuple: [number, string] = [5, "Pesho"]
// console.log(numberAndStringTuple);

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// console.log(DaysOfWeek.Monday)

function printDetails(name: string, age?: number): string {
  if (typeof age !== "undefined") {
    return `Hello ${name}. you are ${age} years old`
  }
  return "Hello " + name
}

//console.log(printDetails("Pesho"))
//console.log(printDetails("Pesho", 18))

// INTERSECTION TYPES
type Dog = { name: string }
type Dog2 = { lastname: string }

const obj: Dog & Dog2 = { name: "Petya", lastname: "Naydenova" }

// STRING LITERAL TYPES
let statusMessage: "success" | "error" = "success"
statusMessage = "error"

// NUMBER LITERAL TYPES

let possibleNumbers: 100 | 200 | 300 = 100
possibleNumbers = 200

// SIMPLE TYPE ALIAS

type Age = number
const myAge: Age = 55

// OBJECT TYPE ALIAS
type User = {
  id: number
  name: string
  age: Age
}
const user: User = {
  id: 1,
  name: "Mira",
  age: 5,
}

const newUser = {
  id: 2,
  name: "Miro",
  age: 50,
} as User

// KEYOF
type Point = {
  x: number
  y: number
}
const point: Point = {
  x: 2,
  y: 50,
}
type PointKeys = keyof Point
const newPoint = {} as Point
Object.keys(point).forEach((key) => {
  newPoint[key as keyof Point] = point[key as keyof Point] * 10
})
console.log(newPoint)
