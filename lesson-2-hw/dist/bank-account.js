class BankAccount {
    constructor() {
        BankAccount.accountCounter++;
        this.id = BankAccount.accountCounter;
        this.balance = 0;
    }
    static setInterestRate(rate) {
        BankAccount.interestRate = rate;
    }
    static getInterestRate() {
        return BankAccount.interestRate;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getInterest(years) {
        return (this.balance * Math.pow(1 + BankAccount.interestRate / years, years) -
            this.balance);
    }
}
BankAccount.interestRate = 0.02;
BankAccount.accountCounter = 0;
const accounts = {};
function processCommand(command) {
    const parts = command.split(" ");
    const cmd = parts[0];
    switch (cmd) {
        case "Create":
            const account = new BankAccount();
            accounts[account.id] = account;
            console.log(`Account ID${account.id} created`);
            break;
        case "Deposit":
            const accountId = parseInt(parts[1]);
            const amount = parseInt(parts[2]);
            if (accounts[accountId]) {
                accounts[accountId].deposit(amount);
                console.log(`Deposited ${amount} to ID${accountId}`);
            }
            else {
                console.log("Account does not exist");
            }
            break;
        case "SetInterest":
            const newInterestRate = parseFloat(parts[1]);
            BankAccount.setInterestRate(newInterestRate);
            break;
        case "GetInterest":
            const accountIdToGet = parseInt(parts[1]);
            const years = parseInt(parts[2]);
            if (accounts[accountIdToGet]) {
                const interest = accounts[accountIdToGet].getInterest(years);
                console.log(interest.toFixed(2));
            }
            else {
                console.log("Account does not exist");
            }
            break;
        case "End":
            return false;
        default:
            console.log("Invalid command");
    }
    return true;
}
const inputCommands = [
    //   "Create",
    //   "Create",
    //   "Deposit 1 20",
    //   "Deposit 3 20",
    //   "Deposit 2 10",
    //   "SetInterest 1.5",
    //   "GetInterest 1 1",
    //   "GetInterest 2 1",
    //   "GetInterest 3 1",
    //   "End",
    "Create",
    "Deposit 1 20",
    "GetInterest 1 10",
    "End",
];
for (const command of inputCommands) {
    if (!processCommand(command)) {
        break;
    }
}
//# sourceMappingURL=bank-account.js.map