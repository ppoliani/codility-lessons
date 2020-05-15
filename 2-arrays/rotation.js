const run = (arr, k) => {

  const shift = arr =>  {
    const length = arr.length;

    return arr.reduce((newArr, item, i) => {
      newArr[(i + 1) % length] = item;
      return newArr;
    }, []);
  }
  
  const solution = (arr, k) => {
    while(k > 0) {
      arr = shift(arr);
      k--;
    }

    return arr;
  }

  return solution(arr, k);
}

console.log(run([3, 8, 9, 7, 6], 3));
console.log(run([3, 8, 9, 7, 6], 0));
console.log(run([3, 8, 9, 7, 6], 1));
console.log(run([3, 8, 9, 7, 6], 5));
console.log(run([3, 8, 9, 7, 6], 10));
console.log(run([], 5));
console.log(run([], 0));
