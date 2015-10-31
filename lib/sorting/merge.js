/**
 * Merge Sort
 */


function merge(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length, rightIndex  < right.length){
    if (left[leftIndex] < right[rightIndex ]){
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};


function mergeSort(items) {
    if (items.length < 2) return items;

    var middle = Math.floor(items.length / 2);
    var left = items.slice(0, middle);
    var right = items.slice(middle);
    var params = merge(mergeSort(left), mergeSort(right));

    params.unshift(0, items.length);
    items.splice.apply(items, params);

    return items;
};


module.exports = mergeSort;
