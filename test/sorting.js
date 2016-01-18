/**
 * Sorting Algorithms Tests
 */

var assert = require('chai').assert;
var sort = require('../lib/sorting');

describe('Sorting Algorithms', () => {
  it('Insertion Sort', () => {
    assert.deepEqual(
      sort([2, 154, 1, 568, 324, 655], 'insertion'),
           [1, 2, 154, 324, 568, 655]
    );
    assert.deepEqual(
      sort(['one', 'two', 'three', 'four'], 'insertion'),
           ['four', 'one', 'three', 'two']
    );
  });

  it('Quicksort', () => {
    assert.deepEqual(
      sort([2, 154, 1, 568, 324, 655], 'quick'),
           [1, 2, 154, 324, 568, 655]
    );
    assert.deepEqual(
      sort(['one', 'two', 'three', 'four'], 'quick'),
           ['four', 'one', 'three', 'two']
    );
  });

  it('Merge Sort', () => {
    assert.deepEqual(
      sort([2, 154, 1, 568, 324, 655], 'merge'),
           [1, 2, 154, 324, 568, 655]
    );
    assert.deepEqual(
      sort(['one', 'two', 'three', 'four'], 'merge'),
           ['four', 'one', 'three', 'two']
    );
  });

  it('Heapsort', () => {
    assert.deepEqual(
      sort([2, 154, 1, 568, 324, 655], 'heap'),
           [1, 2, 154, 324, 568, 655]
    );
    assert.deepEqual(
      sort(['one', 'two', 'three', 'four'], 'heap'),
           ['four', 'one', 'three', 'two']
    );
  });
});
