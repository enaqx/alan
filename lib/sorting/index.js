/**
 * Sorting Algorithms
 */

var insertion = require('./insertion');
var quicksort = require('./quicksort');

function sort(arr, algorithm) {
  switch (algorithm) {
    case 'insertion': return insertion(arr); break;
    case 'quicksort': return quicksort(arr); break;
  }
}

module.exports = sort;
