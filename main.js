#! /usr/bin/env node
import { faker } from "@faker-js/faker";
import { Customer, Bank } from "./classes/class.js";
import inquirer from "inquirer";
import chalk from "chalk";
import Welcome from "./clidesign/design.js";
Welcome();
let fardeenBankltd = new Bank();
for (let i = 1; i < 20; i++) {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let gender = faker.person.sex(); // 'female' | 'male'
    let contactNum = faker.phone.number();
    const cust = new Customer(firstName, lastName, 19 + i, gender, contactNum, 1000 + i);
    fardeenBankltd.addCustomer(cust);
    fardeenBankltd.addAccount({ accNumber: cust.accNumber, balance: 1000 * i });
}
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.greenBright("Please Select The Service"),
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
        });
        if (service.select === "View Balance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number: ",
            });
            let account = fardeenBankltd.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.redBright.bold("Invalid Account Number"));
            }
            if (account) {
                let details = fardeenBankltd.customer.find((val) => val.accNumber == res.num);
                console.log(`Dear, ${chalk.greenBright.bold(details?.firstName)} ${chalk.greenBright.bold(details?.lastName)} Your Account Balance is ${chalk.blueBright(`$${account.balance}`)}`);
            }
        }
        if (service.select === "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number: ",
            });
            let account = fardeenBankltd.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.redBright.bold("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    name: "amount",
                    message: "Kindly enter your amount to withdraw",
                });
                if (ans.amount > account.balance) {
                    console.log(chalk.red.bold("Insuficient Balance"));
                }
                let newBalance = account.balance - ans.amount;
                bank.transactionAcc({
                    accNumber: account.accNumber,
                    balance: newBalance,
                });
                console.log(`Your remaining balance is ${chalk.cyanBright(`$${newBalance}`)}`);
            }
        }
        if (service.select === "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number: ",
            });
            let account = fardeenBankltd.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.redBright.bold("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    name: "amount",
                    message: "Kindly enter your amount to withdraw",
                });
                let newBalance = account.balance + ans.amount;
                bank.transactionAcc({
                    accNumber: account.accNumber,
                    balance: newBalance,
                });
                console.log(`Thank you for despositing, your new balance is ${chalk.cyanBright(`$${newBalance}`)}`);
            }
        }
        if (service.select === "Exit") {
            return;
        }
    } while (true);
}
bankService(fardeenBankltd);
