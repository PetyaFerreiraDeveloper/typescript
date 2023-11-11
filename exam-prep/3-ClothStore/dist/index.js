"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cloth_1 = require("./Cloth");
const ClothesStore_1 = require("./ClothesStore");
const solve = () => {
    const store1 = new ClothesStore_1.ClothesStore("Zara", 20);
    const cloth1 = new Cloth_1.Cloth("red", 36, "dress");
    store1.addCloth(cloth1);
    const cloth2 = new Cloth_1.Cloth("brown", 34, "t-shirt");
    const cloth3 = new Cloth_1.Cloth("blue", 32, "jeans");
    store1.addCloth(cloth2);
    store1.addCloth(cloth3);
    const smallestCloth = store1.getSmallestCloth();
    const getCloth = store1.getCloth("brown");
    console.log(store1.report());
};
solve();
//# sourceMappingURL=index.js.map