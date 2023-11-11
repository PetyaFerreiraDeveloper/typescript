const getLowestPrice = (input) => {
    let result = {};
    for (let line of input) {
        let [town, product, price] = line.split(" | ");
        if (result[product] === undefined) {
            result[product] = { town: town, price: Number(price) };
            continue;
        }
        if (Number(price) < result[product].price) {
            result[product].town = town;
            result[product].price = Number(price);
        }
    }
    console.log(result);
};
const sampleInput = [
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 900.1",
    "New York | Burger | 10",
    "Pleven | Burger | 5",
];
getLowestPrice(sampleInput);
//# sourceMappingURL=index.js.map