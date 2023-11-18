type Product = [type: string, price: number]
type Recipe = {
  recipeName: string
  productsList: string[]
}
type Guest = {
  [keyof: string]: string
}

class ChristmasDinner {
  budget: number
  dishes: Recipe[] = []
  products: string[] = []
  guests: Guest = {}

  constructor(budget: number) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number")
    }
    this.budget = budget
  }

  shopping(product: Product): string {
    if (this.budget < product[1]) {
      return "Not enough money to buy this product"
    }
    this.products.push(product[0])
    this.budget -= product[1]
    return `You have successfully bought ${product[0]}!`
  }

  recipes(recipe: Recipe) {
    const currentRecipeName = recipe.recipeName
    const necessaryProducts: string[] = recipe.productsList
    for (let product of necessaryProducts) {
      if (!this.products.includes(product)) {
        return "We do not have this product"
      }
    }
    this.dishes.push({
      recipeName: currentRecipeName,
      productsList: necessaryProducts,
    })
    return `${currentRecipeName} has been sucessfully cooked!`
  }

  inviteGuests(name: string, dish: string) {
    if (!this.dishes.some((d) => d.recipeName === dish)) {
      return "We do not have this dish"
    }
    if (this.guests.hasOwnProperty(name)) {
      return "This guest has already been invited"
    }
    this.guests[name] = dish
    return `You have successfully invited ${name}!`
  }

  showAttendance() {
    const listOfGuests = Object.entries(this.guests)
    let result: string[] = []
    for (let el of listOfGuests) {
      const guestName: string = el[0]
      const mealName: string = el[1]
      const currentDish: Recipe = this.dishes.find(
        (dish) => dish.recipeName === mealName
      )
      const products: string[] = currentDish.productsList
      const text = `${guestName} will eat ${mealName}, which consists of ${products.join(
        ", "
      )}`
      result.push(text)
    }
    return result.join("\n")
  }
}

try {
  const dinner = new ChristmasDinner(300)
  dinner.shopping(["Salt", 1])
  dinner.shopping(["Beans", 3])
  dinner.shopping(["Cabbage", 4])
  dinner.shopping(["Rice", 2])
  dinner.shopping(["Savory", 1])
  dinner.shopping(["Peppers", 1])
  dinner.shopping(["Fruits", 40])
  dinner.shopping(["Honey", 10])
  dinner.recipes({
    recipeName: "Oshav",
    productsList: ["Fruits", "Honey"],
  })
  dinner.recipes({
    recipeName: "Folded cabbage leaves filled with rice",
    productsList: ["Cabbage", "Rice", "Salt", "Savory"],
  })
  dinner.recipes({
    recipeName: "Peppers filled with beans",
    productsList: ["Beans", "Peppers", "Salt"],
  })
  dinner.inviteGuests("Ivan", "Oshav")
  dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice")
  dinner.inviteGuests("Georgi", "Peppers filled with beans")

  console.log(dinner.showAttendance())
} catch (error) {
  console.error(error.message)
}
