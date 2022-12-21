import { binarySearch } from '../binary-search';

test('the index of 3 in [] is 2', () => {
  expect(binarySearch([1, 2, 3, 5, 6, 7], 3)).toBe(2);
});

test('finding 4 will return -1', () => {
  expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toBe(-1);
});

export default {};
