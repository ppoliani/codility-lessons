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

const gcd = (a, b) => {
  if(a % b === 0) return b;
  return gcd(b, a % b)
}

const lcm = (a, b) => {
  return a * (b / gcd(a, b));
}

module.exports = {getFactors, numOfFactors, gcd, lcm}
