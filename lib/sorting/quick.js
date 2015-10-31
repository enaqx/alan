/**
 * Quicksort
 */


function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};


function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;

  while (i <= j) {
    while (items[i] < pivot) i++;
    while (items[j] > pivot) j--;
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
};


function quick(items, left, right) {
  var index = null;

  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;
    index = partition(items, left, right);
    if (left < index - 1) quick(items, left, index - 1);
    if (index < right) quick(items, index, right);
  }

  return items;
};


module.exports = quick;
