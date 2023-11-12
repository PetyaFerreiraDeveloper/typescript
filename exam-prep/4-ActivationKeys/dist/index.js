const activationKeys = (input) => {
    let code = input.shift();
    input.pop();
    function getFirstPart(index) {
        return code.substring(0, Number(index));
    }
    function getMiddlePart(startIndex, endIndex) {
        return code.substring(Number(startIndex), Number(endIndex));
    }
    function getLastPart(index) {
        return code.substring(Number(index));
    }
    const sliceString = (startIndex, endIndex) => {
        const firstPart = getFirstPart(startIndex);
        const secondPart = getLastPart(endIndex);
        code = firstPart + secondPart;
        return code;
    };
    const flipString = (caseCondition, startIndex, endIndex) => {
        const firstPart = getFirstPart(startIndex);
        const middlePart = getMiddlePart(startIndex, endIndex);
        const lastPart = getLastPart(endIndex);
        if (caseCondition === "Upper") {
            code = firstPart + middlePart.toUpperCase() + lastPart;
        }
        if (caseCondition === "Lower") {
            code = firstPart + middlePart.toLowerCase() + lastPart;
        }
        return code;
    };
    const containsString = (substring) => {
        if (code.includes(substring)) {
            console.log(`${code} contains ${substring}`);
        }
        else {
            console.log("Substring not found");
        }
    };
    for (let line of input) {
        const lineArray = line.split(">>>");
        const command = lineArray[0];
        if (command === "Slice") {
            const startIndex = lineArray[1];
            const endIndex = lineArray[2];
            sliceString(startIndex, endIndex);
            console.log(code);
        }
        if (command === "Flip") {
            const caseCondition = lineArray[1];
            const startIndex = lineArray[2];
            const endIndex = lineArray[3];
            flipString(caseCondition, startIndex, endIndex);
            console.log(code);
        }
        if (command === "Contains") {
            const substring = lineArray[1];
            containsString(substring);
        }
    }
    console.log(`Your activation key is: ${code}`);
};
const input = [
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
];
activationKeys(input);
//# sourceMappingURL=index.js.map