// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

// To understand the mergeSort() function, imagine calling it with [97, 0] as the argument.

function mergeSort(arr) { // mergeSort([97, 0]);
  if (arr.length === 1) { // first run, equates to false;
    return arr;           // second run, returns the arr [97] and third run returns the arr [0];
  }

  const center = Math.floor(arr.length/2);
  const left = arr.slice(0, center); // first run, equates to [97];
  const right = arr.slice(center); // first run, equates to [0];

  return merge(mergeSort(left), mergeSort(right)); // equates to merge(mergeSort([97]), mergeSort([0]));
                                                   // equates to merge([97], [0]);
                                                   // that merges the two arrays and returns [0, 97];
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
