const { sum, sub, multiplication, division} = require('./index.js');

test('add 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add 9 and 13 to equal 22', () => {
  expect(sum(9, 13)).toBe(22);
});

test('add 15 and 14 to equal 29', () => {
  expect(sum(15, 14)).toBe(29);
});

test('add 323 and 440 to equal 763', () => {
  expect(sum(323, 440)).toBe(763);
});

test('subtract 1 and 2 to equal -1', () => {
    expect(sub(1, 2)).toBe(-1);
  });

test('subtract 88 and 44 to equal 44', () => {
    expect(sub(88, 44)).toBe(44);
  });

test('subtract 10 and 3 to equal 7', () => {
    expect(sub(10, 3)).toBe(7);
  });
  
test('subtract 1004 and 3006 to equal -2002', () => {
    expect(sub(1004, 3006)).toBe(-2002);
  });

test('subtract 5 and 3006 to equal 2', () => {
    expect(sub(5, 2)).toBe(3);
  });

  test('multiply  1 and 2 to equal 2', () => {
    expect(multiplication(1, 2)).toBe(2);
  });

  test('multiply  9 and 8 to equal 72', () => {
    expect(multiplication(9, 8)).toBe(72);
  });

  test('multiply  5 and 12 to equal 60', () => {
    expect(multiplication(5, 12)).toBe(60);
  });
  
  test('multiply  7 and 8 to equal 56', () => {
    expect(multiplication(7, 8)).toBe(56);
  });

  test('divide  5 by 1  to equal 2', () => {
    expect(division(2, 1)).toBe(2);
  });

  test('divide  124 by 4  to equal 31', () => {
    expect(division(124, 4)).toBe(31);
  });

  test('divide  10 by 5  to equal 2', () => {
    expect(division(10, 5)).toBe(2);
  });

  test('divide  180 by 6  to equal 30', () => {
    expect(division(180, 6)).toBe(30);
  });