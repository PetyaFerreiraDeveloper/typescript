const sumNumbers = (num1, num2) => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let sum = 0;
    if (number1 === number2) {
        sum = 0;
    }
    else if (number1 >= number2) {
        for (let i = number2; i <= number1; i++) {
            sum += i;
        }
    }
    else {
        for (let i = number1; i <= number2; i++) {
            sum += i;
        }
    }
    console.log(sum);
};
sumNumbers("1", "1");
sumNumbers("1", "5");
sumNumbers("5", "1");
