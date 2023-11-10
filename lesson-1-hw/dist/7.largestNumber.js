const findLargest = (num1, num2, num3) => {
    let largestSoFar = num1;
    if (num1 >= num2) {
        if (num1 < num3) {
            largestSoFar = num3;
        }
    }
    else {
        if (num2 >= num3) {
            largestSoFar = num2;
        }
        else {
            largestSoFar = num3;
        }
    }
    console.log(`The largest numbers is ${largestSoFar}`);
};
findLargest(-3, -3, -8);
