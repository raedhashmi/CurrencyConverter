import inquirer from "inquirer";
import chalk from "chalk";
export default async() => {
function details(){
    let from = inquirer.prompt([{
        name:"from",
        message:"From",
        type:"list",
        choices:["PKR","USD","KWD","GBP"]
    },
    {
        name:"to",
        message:"To",
        type:"list",
        choices:["PKR","USD","KWD","GBP"]
    },
    {
        name:"num",
        message:"Amount",
        type:"input",
    }
])
.then((answers) => {
    if (answers.from == "PKR" && answers.to == "USD")
        console.log(answers.num / 277)
    if (answers.from == "PKR" && answers.to == "KWD")
        console.log(answers.num / 902.71)
    if (answers.from == "PKR" && answers.to == "GBP")
        console.log(answers.num / 356.24)
    if (answers.from == "PKR" && answers.to == "PKR")
        console.log(chalk.red("ERR! Cannnot be same currency"))
    if (answers.from == "USD" && answers.to == "PKR")
        console.log(answers.num * 277.95)
    if (answers.from == "USD" && answers.to == "KWD")
        console.log(answers.num * 0.31)
    if (answers.from == "USD" && answers.to == "GBP")
        console.log(answers.num * 0.32)
    if (answers.from == "USD" && answers.to == "USD")
        console.log(chalk.red("ERR! Cannnot be same currency"))
    if (answers.from == "KWD" && answers.to == "PKR")
        console.log(answers.num / 902.95)
    if (answers.from == "KWD" && answers.to == "USD")
        console.log(answers.num * 3.25)
    if (answers.from == "KWD" && answers.to == "GBP")
        console.log(answers.num * 2.61)
    if (answers.from == "KWD" && answers.to == "KWD")
        console.log(chalk.red("ERR! Cannnot be same currency"))
    if (answers.from == "GBP" && answers.to == "PKR")
        console.log(answers.num / 0.0029)
    if (answers.from == "GBP" && answers.to == "USD")
        console.log(answers.num * 1.25)
    if (answers.from == "GBP" && answers.to == "KWD")
        console.log(answers.num * 0.38)
    if (answers.from == "GBP" && answers.to == "GBP")
        console.log(chalk.red("ERR! Cannnot be same currency"))
    if (answers.num == undefined)
        console.log(chalk.red("ERR! Field required"))
})            
}
details()
}
