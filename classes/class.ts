export class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  contactNum: string;
  accNumber: number;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    contactNum: string,
    accNumber: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.contactNum = contactNum;
    this.accNumber = accNumber;
  }
}

export class BankAcc {
  accNumber: number;
  balance: number;
  constructor(accNum: number, balance: number) {
    this.accNumber = accNum;
    this.balance = balance;
  }
}

export class Bank {
  customer: Customer[] = [];
  account: BankAcc[] = [];

  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }

  addAccount(val: BankAcc) {
    this.account.push(val);
  }

  transactionAcc(accObj: BankAcc) {
    let newAccount = this.account.filter(
      (acc) => acc.accNumber !== accObj.accNumber
    );
    this.account = [...newAccount, accObj];
  }
}
