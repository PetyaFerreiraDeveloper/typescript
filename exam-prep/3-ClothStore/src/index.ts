import { Cloth } from "./Cloth"
import { ClothesStore } from "./ClothesStore"

const solve = (): void => {
  const store1 = new ClothesStore("Zara", 20)
  const cloth1 = new Cloth("red", 36, "dress")

  store1.addCloth(cloth1)

  const cloth2 = new Cloth("brown", 34, "t-shirt")
  const cloth3 = new Cloth("blue", 32, "jeans")

  store1.addCloth(cloth2)
  store1.addCloth(cloth3)
  const smallestCloth = store1.getSmallestCloth()

  const getCloth = store1.getCloth("brown")
  console.log(store1.report())
}

solve()
