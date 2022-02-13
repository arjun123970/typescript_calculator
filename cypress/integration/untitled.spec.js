const { sum, sub, multiplication, division} = require('./index.js');
describe('Calculator functions test', () => {
    it('This will test out the operation functions on my calculator program', () => {
        expect(sum(1, 2)).to.equal(3);
        expect(sub(1, 2)).to.equal(-1);
        expect(multiplication(1, 2)).to.equal(2);
        expect(division(2, 1)).to.equal(2);
    })
  })