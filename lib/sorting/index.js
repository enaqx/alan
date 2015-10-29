/**
 * Sorting Algorithms
 */

var insertion = require('./insertion');

function sort(arr, algorithm) {
  switch (algorithm) {
    case 'insertion': return insertion(arr); break;
  }
}

module.exports = sort;
