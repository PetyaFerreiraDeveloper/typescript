const activationKeys = (input: string[]): void => {
  let code = input.shift()
  input.pop()

  function getFirstPart(index: string): string {
    return code.substring(0, Number(index))
  }

  function getMiddlePart(startIndex: string, endIndex: string) {
    return code.substring(Number(startIndex), Number(endIndex))
  }

  function getLastPart(index: string) {
    return code.substring(Number(index))
  }

  const sliceString = (startIndex: string, endIndex: string): string => {
    const firstPart: string = getFirstPart(startIndex)
    const secondPart: string = getLastPart(endIndex)
    code = firstPart + secondPart
    return code
  }

  const flipString = (
    caseCondition: string,
    startIndex: string,
    endIndex: string
  ): string => {
    const firstPart: string = getFirstPart(startIndex)
    const middlePart: string = getMiddlePart(startIndex, endIndex)
    const lastPart: string = getLastPart(endIndex)
    if (caseCondition === "Upper") {
      code = firstPart + middlePart.toUpperCase() + lastPart
    }
    if (caseCondition === "Lower") {
      code = firstPart + middlePart.toLowerCase() + lastPart
    }
    return code
  }

  const containsString = (substring: string): void => {
    if (code.includes(substring)) {
      console.log(`${code} contains ${substring}`)
    } else {
      console.log("Substring not found")
    }
  }

  for (let line of input) {
    const lineArray = line.split(">>>")
    const command = lineArray[0]
    if (command === "Slice") {
      const startIndex: string = lineArray[1]
      const endIndex: string = lineArray[2]
      sliceString(startIndex, endIndex)
      console.log(code)
    }
    if (command === "Flip") {
      const caseCondition: string = lineArray[1]
      const startIndex: string = lineArray[2]
      const endIndex: string = lineArray[3]
      flipString(caseCondition, startIndex, endIndex)
      console.log(code)
    }
    if (command === "Contains") {
      const substring: string = lineArray[1]
      containsString(substring)
    }
  }
  console.log(`Your activation key is: ${code}`)
}

const input: string[] = [
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]

activationKeys(input)
