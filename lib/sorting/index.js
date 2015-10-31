/**
 * Sorting Algorithms
 */

var insertion = require('./insertion');
var merge = require('./merge');
var quick = require('./quick');

function sort(arr, algorithm) {
  switch (algorithm) {
    case 'insertion': return insertion(arr); break;
    case 'merge': return merge(arr); break;
    case 'quick': return quick(arr); break;
  }
}

module.exports = sort;
