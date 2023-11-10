namespace AnimalGroup {
  export class AnimalDetails {
    furColor: string
    type: string
    constructor(furColor: string, type: string) {
      this.furColor = furColor
      this.type = type
    }
    getDetails(): string {
      return `this is is a ${this.type} and it has ${this.furColor} fur.`
    }
  }
}

const cat1 = new AnimalGroup.AnimalDetails("brown", "cat")
console.log(cat1);
