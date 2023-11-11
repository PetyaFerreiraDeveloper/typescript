function calculator(num1: number, operator: string, num2: number): void {
  if (operator === "+") {
    console.log((num1 + num2).toFixed(2))
  }
  if (operator === "-") {
    console.log((num1 - num2).toFixed(2))
  }
  if (operator === "*") {
    console.log((num1 * num2).toFixed(2))
  }
  if (operator === "/") {
    if (num2 === 0) {
      console.log("Divider can not be 0")
    } else {
      console.log((num1 / num2).toFixed(2))
    }
  }
}

calculator(5, "+", 10)
calculator(25.5, "-", 3)
calculator(9, "/", 2)
calculator(7, "*",5)
