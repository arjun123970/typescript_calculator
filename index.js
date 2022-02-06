"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firststr = (0, readline_sync_1.question)('What is your first number: \n');
    var secstr = (0, readline_sync_1.question)('What is your second number: \n');
    var opperator = (0, readline_sync_1.question)('What would you like to do? Press a for addition, m for multiplication, s for subtraction, and d for division ');
    var firstnum = parseInt(firststr, 10);
    var secondnum = parseInt(secstr, 10);
}
