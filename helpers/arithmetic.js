const getFactors = n => {
  let i = 1;
  const factors = [];

  while(i <= Math.sqrt(n)) {
    if(n % i === 0) {
      if(n / i === i) factors.push(i);
      else factors.push(...[i, n / i]);
    }

    i++;
  }

  return factors;
}

const numOfFactors = n => {
  const factors = 0;
  let i = 2;

  while(i * i <= n) {
    if(n % i === 0) factors += 2;
    i++;
  }

  if(i * i === n) factors += 1;

  return factors;
}

module.exports = {getFactors, numOfFactors}
