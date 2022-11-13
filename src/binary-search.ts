/**
 * Binary search, a highly performant algorythm for returning key in array for a specific value.
 *
 * @param {number[]} sortedArray Ascending order sorted array.
 * @param {number} key Item in array to return key for.
 */
export function binarySearch<R extends Array<number>>(
  sortedArray: R,
  key: number,
): number {
  let start = 0;
  let end = sortedArray.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (sortedArray[middle] === key) {
      return middle;
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

export default {
  binarySearch,
};
