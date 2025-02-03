{
  // Encapsulation

  // access modifier
  class BankAccont {
    readonly id: number;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, public name: string, _balance: number) {
      this.id = id;
      this._balance = _balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

   private getBalance() {
      return this._balance;
    }
    getHiddenMehtod(){
        return this.getBalance()
    }
  }

  class StudentAccount extends BankAccont {
    test() {
      this._balance;
    }
  }

  const account = new BankAccont(111, "saikat", 20);
  account.addDeposit(45);
  const res = account.getHiddenMehtod();
  console.log(res);
}
