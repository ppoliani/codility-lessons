const run = arr => {
  const map = {};

  const solution = (arr) => {
    arr.forEach(item => {
      const exist = map[item];

      if(exist) {
        delete map[item];
      }
      else {
        map[item] = true;
      }
    });

    const unpaired = Object.keys(map);

    return unpaired ? unpaired[0] : undefined;
  }

  return solution(arr);
}

console.log(run([9, 3, 9, 3, 9, 7, 9]));
console.log(run([1]));
console.log(run([1, 1, 1]));
