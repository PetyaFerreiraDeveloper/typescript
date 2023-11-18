class InventoryManager {
    constructor(capacity) {
        this.items = [];
        this.outOfStock = [];
        this.capacity = capacity;
    }
    addItem(itemName, quantity) {
        if (quantity <= 0) {
            return "Quantity must be greater than zero.";
        }
        if (this.items.length >= this.capacity) {
            return "The inventory is already full.";
        }
        const currentItemIndex = this.items.findIndex((item) => item.itemName === itemName);
        const currentItem = { itemName, quantity };
        if (currentItemIndex === -1) {
            this.items.push(currentItem);
        }
        else {
            this.items[currentItemIndex].quantity += quantity;
        }
        return `Added ${quantity} ${quantity === 1 ? itemName : itemName + "s"} to the inventory.`;
    }
    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            return "Quantity must be greater than zero.";
        }
        const currentItemIndex = this.items.findIndex((item) => item.itemName === itemName);
        if (currentItemIndex == -1) {
            return `The item ${itemName} is not available in the inventory.`;
        }
        if (this.items[currentItemIndex].quantity < quantity) {
            return `Not enough ${itemName}(s) in stock.`;
        }
        else {
            this.items[currentItemIndex].quantity -= quantity;
        }
        if (this.items[currentItemIndex].quantity === 0) {
            this.items.splice(currentItemIndex, 1);
            this.outOfStock.push(itemName);
        }
        return `Sold ${quantity} ${quantity === 1 ? itemName : itemName + "s"} from the inventory.`;
    }
    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            return "Quantity must be greater than zero.";
        }
        const currentItemIndex = this.items.findIndex((item) => item.itemName === itemName);
        const currentItem = { itemName, quantity };
        if (currentItemIndex !== -1) {
            this.items[currentItemIndex].quantity += quantity;
        }
        else {
            this.items.push(currentItem);
        }
        const outOfStockIndex = this.outOfStock.indexOf(itemName);
        if (outOfStockIndex !== -1) {
            this.outOfStock.splice(outOfStockIndex, 1);
        }
        return `Restocked ${quantity} ${quantity === 1 ? itemName : itemName + "s"} in the inventory.`;
    }
    getInventorySummary() {
        return `Current Inventory:\n${this.items
            .map((item) => `${item.itemName}: ${item.quantity}`)
            .join("\n")}\nOut of Stock: ${this.outOfStock.join(', ')}`;
    }
}
// const manager = new InventoryManager(2)
// console.log(manager.addItem("Drill", 10))
// console.log(manager.addItem("Hammer", 5))
// console.log(manager.addItem("Level", 3))
// const manager = new InventoryManager(3)
// console.log(manager.addItem("Drill", 10))
// console.log(manager.addItem("Hammer", 5))
// console.log(manager.addItem("Chisel", 3))
// console.log(manager.sellItem("Drill", 3))
// console.log(manager.sellItem("Paintbrush", 2))
// const manager = new InventoryManager(3)
// console.log(manager.addItem("Drill", 10))
// console.log(manager.addItem("Hammer", 5))
// console.log(manager.addItem("Chisel", 3))
// console.log(manager.sellItem("Drill", 3))
// console.log(manager.restockItem("Drill", 5))
// console.log(manager.restockItem("Paintbrush", 1))
const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
//# sourceMappingURL=index.js.map