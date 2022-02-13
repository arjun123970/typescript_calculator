const { sum, sub, multiplication, division} = require('./index.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 1 - 2 to equal -1', () => {
    expect(sub(1, 2)).toBe(-1);
  });

  test('multiplys  1 * 2 to equal 2', () => {
    expect(multiplication(1, 2)).toBe(2);
  });

  test('divides  2/1  to equal 2', () => {
    expect(division(2, 1)).toBe(2);
  });