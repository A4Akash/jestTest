import {sum} from './sum';

// no doubt this should pass
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// toBe & toEqual are equivalent for numbers
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
});

// example fail test (I know it is a bad example :P) 
test('adds 3 + 2 to equal 4', () => {
    expect(sum(3, 2)).toBe(4);
});

// example for not.toBe
test('adds 3 + 2 not to equal 4', () => {
  expect(sum(3, 2)).not.toBe(4);
});

// example for not.toBe
test('adds 3 + 2 not to equal 4', () => {
  expect(sum(3, 2)).not.toEqual(4);
});
