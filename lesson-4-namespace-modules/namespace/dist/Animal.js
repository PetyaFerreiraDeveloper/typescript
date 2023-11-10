var AnimalGroup;
(function (AnimalGroup) {
    class AnimalDetails {
        constructor(furColor, type) {
            this.furColor = furColor;
            this.type = type;
        }
        getDetails() {
            return `this is is a ${this.type} and it has ${this.furColor} fur.`;
        }
    }
    AnimalGroup.AnimalDetails = AnimalDetails;
})(AnimalGroup || (AnimalGroup = {}));
const cat1 = new AnimalGroup.AnimalDetails("brown", "cat");
console.log(cat1);
//# sourceMappingURL=Animal.js.map