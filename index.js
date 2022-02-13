"use strict";
function sum(a, b) {
    return a + b;
}
module.exports = sum;
function multiplication(a, b) {
    return a * b;
}
module.exports = multiplication;
function division(a, b) {
    return a / b;
}
module.exports = division;
function sub(a, b) {
    return a - b;
}
module.exports = {
    sum: sum,
    sub: sub,
    division: division,
    multiplication: multiplication
};
