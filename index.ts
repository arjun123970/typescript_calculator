function sum(a:number,b:number) {
    return a + b;
  }
  module.exports = sum;


function multiplication(a:number,b:number) {
return a * b;
  }
  module.exports = multiplication;

function division(a:number,b:number) {
return a/b;
  }
  module.exports = division;


function sub(a:number, b:number) {
return a - b;
  }
  module.exports = {
      sum,
      sub,
      division,
      multiplication
  };