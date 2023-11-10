// console.log("123")
// const getTestGenerics = <T>(paramId: T): T => {
//   return paramId
// }
function FullName(obj) {
    return `The full name is ${obj.firstName} ${obj.lastName}`;
}
let output = FullName({ firstName: "petya", lastName: "ferreira" });
console.log(output);
//# sourceMappingURL=generics-demo.js.map