const numOfClimbs = n => {
  if(n === 0 || n === 1) return 1;

  const options = [1, 2];
  let total = 0;

  for (let i = 0; i <= options.length; i++) {
    if(n - options[i] >= 0) {
      total += numOfClimbs(n - options[i])
    }
  }

  return total;
}

const numOfClimbsBottomUp = n => {
  if(n === 0 || n === 1) return 1;
  
  const ways = [1]

  for (let i = 1; i <= n; i++) {
    total = 0;

    // this is the generic way of doing ways(i - 1) + ways(i - 2). If for example we from step i we can climb
    // 1, 2, or 3 steps then options will be [1, 2, 3] i.e. f(n) = f(n - 1) + f(n - 2) + f(n - 3)
    const options = [1, 2];
    for (let j = 0; j <= options.length; j++) {
      // make sure we don't exceed the target
      if(i - options[j] >= 0) {
        total += ways[i - options[j]]; 
      }
    }

    ways[i] = total;
  }

  return ways[n];
}
