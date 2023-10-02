// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let aantalDagen = parseFloat(await userInput.question('Geef het aantal dagen: '));
let aantalUren = parseFloat(await userInput.question('Geef het aantal uren: '));
let aantalMinuten = parseFloat(await userInput.question('Geef het aantal minuten: '));
let aantalSeconden = parseFloat(await userInput.question('Geef het aantal seconden: '));

function convertDays(numb) {
    return numb*24;
}

function multiplyBy60(numb) {
    return numb * 60;
}

aantalUren += convertDays(aantalDagen);
aantalMinuten += multiplyBy60(aantalUren);
aantalSeconden += multiplyBy60(aantalMinuten);
console.log(`Aantal seconden: ${aantalSeconden}`);

process.exit();
