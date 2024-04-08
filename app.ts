#! /usr/bin/env node 
//currency convertor
import inquirer from "inquirer"
import chalk from "chalk";
console.log(chalk.blueBright("Welcome to my currency convertor"))
const Currency: any = {
    USD: 1,//base amount
    EUR: 0.92,
    INR: 74.57,
    GBP: 0.76,
    PKR: 280
};
let Useranswer = await inquirer.prompt([
{
    name: "from",
    type: "list",
    message: chalk.greenBright("select from currency:"),
    choices: ["PKR", "EUR", "INR", "GBP", "USD"]
},
{
    name: "to",
    type: "list",
    message: chalk.greenBright("select a currency to which you want to convert:"),
    choices: ["PKR", "EUR", "INR", "GBP", "USD"]
},
{
    name: "amount",
    type: "number",
    message: chalk.greenBright("kindly enter your amount:")
}
]);
let fromAmont = Currency[Useranswer.from];
let toAmount = Currency[Useranswer.to];
let amount = Useranswer.amount;
let baseAmount = amount / fromAmont;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellow(convertedAmount));





