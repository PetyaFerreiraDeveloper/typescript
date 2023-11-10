class BankAccount {
  static interestRate: number = 0.02
  static accountCounter: number = 0

  id: number
  balance: number

  constructor() {
    BankAccount.accountCounter++
    this.id = BankAccount.accountCounter
    this.balance = 0
  }

  static setInterestRate(rate: number): void {
    BankAccount.interestRate = rate
  }

  static getInterestRate(): number {
    return BankAccount.interestRate
  }

  deposit(amount: number): void {
    this.balance += amount
  }

  getInterest(years: number) {
    return (
      this.balance * Math.pow(1 + BankAccount.interestRate / years, years) -
      this.balance
    )
  }
}

const accounts: { [key: number]: BankAccount } = {}

function processCommand(command: string): boolean {
  const parts: string[] = command.split(" ")
  const cmd: string = parts[0]

  switch (cmd) {
    case "Create":
      const account: BankAccount = new BankAccount()
      accounts[account.id] = account
      console.log(`Account ID${account.id} created`)
      break
    case "Deposit":
      const accountId: number = parseInt(parts[1])
      const amount: number = parseInt(parts[2])
      if (accounts[accountId]) {
        accounts[accountId].deposit(amount)
        console.log(`Deposited ${amount} to ID${accountId}`)
      } else {
        console.log("Account does not exist")
      }
      break
    case "SetInterest":
      const newInterestRate: number = parseFloat(parts[1])
      BankAccount.setInterestRate(newInterestRate)
      break
    case "GetInterest":
      const accountIdToGet: number = parseInt(parts[1])
      const years: number = parseInt(parts[2])

      if (accounts[accountIdToGet]) {
        const interest: number = accounts[accountIdToGet].getInterest(years)
        console.log(interest.toFixed(2))
      } else {
        console.log("Account does not exist")
      }
      break
    case "End":
      return false
    default:
      console.log("Invalid command")
  }
  return true
}

const inputCommands: string[] = [
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
]

for (const command of inputCommands) {
  if (!processCommand(command)) {
    break
  }
}
