#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentences.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
