import {sortArray} from './selectionSort';

// To test array sorting using selection sort
test('sorts array [51, 2, 45, 25, 12] to [2, 12, 25, 45, 51]', () => {
    expect(sortArray([51, 2, 45, 25, 12])).toEqual([2, 12, 25, 45, 51]);
});
