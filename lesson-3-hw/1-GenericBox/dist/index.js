class Box {
    constructor(input) {
        this.input = input;
    }
    toString() {
        return `${this.input} is of type ${typeof this.input}`;
    }
}
const box1 = new Box(["test"]);
const box2 = new Box(20);
const box3 = new Box("hello");
const box4 = new Box(true);
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
console.log(box4.toString());
//# sourceMappingURL=index.js.map