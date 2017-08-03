const binaryIndexOf = (searchElement, nums) => {
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  let currentIndex;
  let currentElement;
  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = nums[currentIndex];
    if (currentElement === searchElement) {
      return currentIndex;
    } else if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    } else {
      maxIndex = currentIndex - 1;
    }
  }
  return -1;
};