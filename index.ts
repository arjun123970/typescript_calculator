function sum(num1:number,num2:number) {
        return num1 + num2;
      }
      module.exports = sum;


 function multiplication(num1:number,num2:number) {
    return num1* num2;
      }
      module.exports = multiplication;

function division(num1:number,num2:number) {
    return num1/num2;
      }
      module.exports = division;
    

function sub(num1:number, num2:number) {
    return num1- num2;
      }
      module.exports = {
          sum,
          sub,
          division,
          multiplication
      };