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
});
