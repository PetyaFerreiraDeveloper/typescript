const solve = (input: string[]): void => {
  const text: string = input[0]
  const numbers: string[] = text.match(/\d/g)
  const digits: number[] = numbers.map((number) => Number(number))
  const coolThreshold: number = digits.reduce(
    (accumulator, currentValue) => accumulator * Number(currentValue)
  )
  const emojis: string[] | null = text.match(
    /(::)[A-Z][a-z]{2,}(::)|(\*\*)[A-Z][a-z]{2,}(\*\*)/gm
  )

  console.log(`Cool threshold: ${coolThreshold}`)
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`)

  if (emojis != null) {
    for (let emoji of emojis) {
      const lettersOnly: string[] = emoji.match(/[A-Za-z]+/g)
      const arrayOfLetters: string[] = lettersOnly[0].split("")
      const sumOfASCI: number = arrayOfLetters.reduce(
        (accumulater, currentValue) => accumulater + currentValue.charCodeAt(0),
        0
      )
      if (sumOfASCI > coolThreshold) {
        console.log(emoji)
      }
    }
  }
}

const input = [
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]

const input2 = [
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]

const input3 = [
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]

solve(input)
solve(input2)
solve(input3)
