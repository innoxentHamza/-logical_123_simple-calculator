#! /usr/bin/env node
import inquirer from "inquirer";
let asnwers = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"],
    },
]);
//conditisnal stetement
if (asnwers.operator === "Addition") {
    console.log(asnwers.firstNumber + asnwers.secondNumber);
}
else if (asnwers.operator === "Subraction") {
    console.log(asnwers.firstNumber - asnwers.secondNumber);
}
else if (asnwers.operator === "Multiplication") {
    console.log(asnwers.firstNumber * asnwers.secondNumber);
}
else if (asnwers.operator === "Division") {
    console.log(asnwers.firstNumber / asnwers.secondNumber);
}
else {
    console.log("plz seleact valid operator");
}
