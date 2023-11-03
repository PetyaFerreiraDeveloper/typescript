const findLargest = (num1: number, num2: number, num3: number): void => {
  let largestSoFar: number = num1
  if (num1 >= num2) {
    if (num1 < num3) {
      largestSoFar = num3
    }
  } else {
    if (num2 >= num3) {
      largestSoFar = num2
    } else {
      largestSoFar = num3
    }
  }
  console.log(`The largest numbers is ${largestSoFar}`)
}

findLargest(-3, -3, -8)
