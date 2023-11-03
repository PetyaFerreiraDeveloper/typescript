let num = 5;
let str = "123";
// console.log(num + Number(str))
let isBoolean = true;
// isBoolean = [1,2,34,5].includes(100)
isBoolean = [1, 2, 34, 5].some((e) => e === 1);
// console.log(isBoolean)
let numberAndStringTuple = [5, "Pesho"];
// console.log(numberAndStringTuple);
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
// console.log(DaysOfWeek.Monday)
function printDetails(name, age) {
    if (typeof age !== "undefined") {
        return `Hello ${name}. you are ${age} years old`;
    }
    return "Hello " + name;
}
console.log(printDetails("Pesho"));
const obj = { name: "Petya", lastname: "Naydenova" };
// STRING LITERAL TYPES
let statusMessage = "success";
statusMessage = "error";
// NUMBER LITERAL TYPES
let possibleNumbers = 100;
possibleNumbers = 200;
const myAge = 55;
const user = {
    id: 1,
    name: "Mira",
    age: 5,
};
const newUser = {
    id: 2,
    name: "Miro",
    age: 50,
};
const point = {
    x: 2,
    y: 50,
};
const newPoint = {};
Object.keys(point).forEach((key) => {
    newPoint[key] = point[key] * 10;
});
console.log(newPoint);
