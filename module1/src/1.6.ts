// Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

const poorUser = {
  name: "ami",
  balance: 15,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};
const poorUser2 = {
  name: "ami",
  balance: 10,
  addBalance(balance: number): string {
    return `my balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 54, 8];
const newArray: number[] = arr.map(
  (element: number): number => element * element
);
