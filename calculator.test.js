const { add } = require('../src/calculator');

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});
