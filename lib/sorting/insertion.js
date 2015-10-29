/**
 * Insertion Sort
 */

function insertion(arr) {
  var j = null;
  for (var i = 1; i < arr.length; i++) {
    j = i;
    while ((j > 0) && (arr[j] < arr[j-1])) {
      var temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
      j = j - 1;
    };
  };
  return arr;
};

module.exports = insertion;
