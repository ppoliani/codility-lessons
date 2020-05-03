const binarySearch = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;

  while(l <= r) {
    const mid = Math.floor((l + r) / 2);

    if(arr[mid] === x) return mid;
    else if(x > arr[mid]) l = mid + 1;
    else if(x < arr[mid]) r = mid - 1;
  }

  return mid;
}

module.exports = {binarySearch}
