"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCapitalizedName = void 0;
const capitalizeFirstLetter_1 = require("./capitalizeFirstLetter");
const getCapitalizedName = (person) => {
    const { name } = person;
    return Object.assign(Object.assign({}, person), { name: (0, capitalizeFirstLetter_1.capitalizeFirstLetter)(person.name) });
};
exports.getCapitalizedName = getCapitalizedName;
//# sourceMappingURL=person-utils.js.map