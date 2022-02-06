import { question } from "readline-sync";

function main(): void

{
    const firststr: string = question('What is your first number: \n');
    const secstr: string = question('What is your second number: \n');
    const opperator: string = question('What would you like to do? Press a for addition, m for multiplication, s for subtraction, and d for division ');
    const firstnum = parseInt(firststr,10);
    const secondnum = parseInt(secstr,10);

}