"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothesStore = void 0;
class ClothesStore {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const clothIndex = this.clothes.findIndex((cloth) => cloth.color === color);
        if (clothIndex !== -1) {
            this.clothes.splice(clothIndex, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        this.clothes.sort((a, b) => a.size - b.size);
        const smallestCloth = this.clothes[0];
        return smallestCloth;
    }
    getCloth(color) {
        const clothWithColor = this.clothes.find((cloth) => cloth.color === color);
        return clothWithColor;
    }
    report() {
        const orderedBySizeClothes = this.clothes.sort((a, b) => a.size - b.size);
        return `${this.type} magazine contains: \n${orderedBySizeClothes.join("\n")}`;
    }
}
exports.ClothesStore = ClothesStore;
//# sourceMappingURL=ClothesStore.js.map