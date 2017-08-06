const countingSort = (arr) => {
  const sorted = [];
  const numsArr = [];
  arr.forEach((item) => {
    numsArr[item] = (numsArr[item] || 0) + 1;
  });
  const len = numsArr.length;
  for (let i = 0; i < len; i += 1) {
    const count = numsArr[i];
    for (let j = 1; j <= count; j += 1) {
      sorted.push(i);
    }
  }
  return sorted;
};

const countingSort2 = arr => arr
  .reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, [])
  .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);

const countingSort3 = (arr, max) => {
  const n = arr.length;
  const count = [];
  // The output character array that will have sorted arr
  const output = [];
  // Create a count array to store count of inidividul
  // characters and initialize count array as 0
  for (let i = 0; i < max; i += 1) {
    count[i] = 0;
  }
  // store count of each character
  for (let i = 0; i < n; i += 1) {
    count[arr[i]] += 1;
  }

  // Change count[i] so that count[i] now contains actual
  // position of this character in output array
  for (let i = 1; i <= max; i += 1) {
    count[i] += count[i - 1];
  }
  // Build the output character array
  for (let i = 0; i < n; i += 1) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]] -= 1;
  }
  return output;
};

const unsorted = [1, 4, 1, 2, 5, 7, 2];
countingSort(unsorted);
countingSort2(unsorted);
countingSort3(unsorted, 9);
