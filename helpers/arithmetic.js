const getFactors = n => {
  let i = 0;
  const factors = [];

  while(i * i <= n) {
    if(n % i === 0) {
      factors.push(i);
    }

    i++;
  }

  return factors;
}

module.exports = {getFactors}
