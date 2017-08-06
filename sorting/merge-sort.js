const mergeSort = (arrayToSort) => {
  // BASE CASE: arrays with fewer than 2 elements are sorted
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  // STEP 1: divide the array in half
  // we need to round down to avoid getting a "half index"
  const midIndex = Math.floor(arrayToSort.length / 2);

  const left = arrayToSort.slice(0, midIndex);
  const right = arrayToSort.slice(midIndex);

  // STEP 2: sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // STEP 3: merge the sorted halves
  const sortedArray = [];

  while (sortedLeft.length || sortedRight.length) {
    // sortedLeft's first element comes next
    // if it's less than sortedRight's first
    // element or if sortedRight is empty
    if (sortedLeft.length && (!sortedRight.length ||
        sortedLeft[0] < sortedRight[0])) {
      sortedArray.push(sortedLeft.shift());
    } else {
      sortedArray.push(sortedRight.shift());
    }
  }
  return sortedArray;

  /* ============== OR ================
  while (sortedLeft.length && sortedRight.length) {
    // sortedLeft's first element comes next
    // if it's less than sortedRight's first
    // element or if sortedRight is empty
    if (sortedLeft[0] < sortedRight[0]) {
      sortedArray.push(sortedLeft.shift());
    } else if (sortedLeft[0] > sortedRight[0]) {
      sortedArray.push(sortedRight.shift());
    } else {
      sortedArray.push(sortedLeft.shift());
      sortedArray.push(sortedRight.shift());
    }
  }
  return sortedArray.concat(sortedLeft, sortedRight); */
};
mergeSort([1, 2, 1, 7, 5, 2]);
