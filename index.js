"use strict";
function sum(num1, num2) {
    return num1 + num2;
}
module.exports = sum;
function multiplication(num1, num2) {
    return num1 * num2;
}
module.exports = multiplication;
function division(num1, num2) {
    return num1 / num2;
}
module.exports = division;
function sub(num1, num2) {
    return num1 - num2;
}
module.exports = {
    sum: sum,
    sub: sub,
    division: division,
    multiplication: multiplication
};
