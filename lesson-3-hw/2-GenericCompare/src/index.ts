class CompareElements<T> {
  data: T[]
  constructor(data: T[]) {
    this.data = data
  }
  compare(el: any): number {
    const result = this.data.filter((elem) => elem === el)
    return result.length
  }
}

const element1 = new CompareElements(["a", "b", "ab", "abc", "cba", "b"])
const element2 = new CompareElements([1, 2, 3, 4, 5, 1, 1])
console.log(element1.compare("b"))
console.log(element2.compare(1))
