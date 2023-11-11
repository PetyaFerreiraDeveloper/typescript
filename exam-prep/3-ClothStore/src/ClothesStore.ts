import { Cloth } from "./Cloth"

export class ClothesStore {
  type: string
  capacity: number
  clothes: Cloth[]
  constructor(type: string, capacity: number) {
    this.type = type
    this.capacity = capacity
    this.clothes = []
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth)
    }
  }

  removeCloth(color: string): boolean {
    const clothIndex = this.clothes.findIndex((cloth) => cloth.color === color)
    if (clothIndex !== -1) {
      this.clothes.splice(clothIndex, 1)
      return true
    }
    return false
  }

  getSmallestCloth(): Cloth {
    this.clothes.sort((a, b) => a.size - b.size)
    const smallestCloth: Cloth = this.clothes[0]
    return smallestCloth
  }

  getCloth(color: string): Cloth {
    const clothWithColor = this.clothes.find((cloth) => cloth.color === color)
    return clothWithColor
  }

  report(): string {
    const orderedBySizeClothes = this.clothes.sort((a, b) => a.size - b.size)
    return `${this.type} magazine contains: \n${orderedBySizeClothes.join(
      "\n"
    )}`
  }
}
