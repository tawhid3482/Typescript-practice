{
  // getter and setter

  class BankAccont {
    readonly id: number;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, public name: string, _balance: number) {
      this.id = id;
      this._balance = _balance;
    }

    // getter and setter
    set Deposit(amount: number) {
      this._balance = this.Balance + amount;
    }

    get Balance() {
      return this._balance;
    }
  }

  const account = new BankAccont(111, "saikat", 540);

  account.Deposit = 101
  const res = account.Balance;
  console.log(res);
}
