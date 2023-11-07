export class Customer {
    constructor(firstName, lastName, age, gender, contactNum, accNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.contactNum = contactNum;
        this.accNumber = accNumber;
    }
}
export class BankAcc {
    constructor(accNum, balance) {
        this.accNumber = accNum;
        this.balance = balance;
    }
}
export class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccount(val) {
        this.account.push(val);
    }
    transactionAcc(accObj) {
        let newAccount = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...newAccount, accObj];
    }
}
