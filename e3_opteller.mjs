// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let firstNumb = parseFloat(await userInput.question('Geef een getal in: '));
let secondNumb = parseFloat(await userInput.question('Geef een tweede getal in: '));

console.log(`Dit is de som van de twee getallen: ${firstNumb + secondNumb}`);


let getal1 = "33";
let getal2 = 15;

console.log
(`Som: ${parseFloat(getal1) + getal2}\nVerschil: ${getal1 - getal2}\nProduct: ${getal1 * getal2}\nDeling: ${getal1 / getal2}\n`);

process.exit();
