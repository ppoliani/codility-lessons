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

module.exports = {getFactors}
