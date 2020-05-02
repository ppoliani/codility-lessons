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

const fib = n => {
  if(n <= 1) return n;
  return fib(n - 1) + fib(n - 2)
}

const fibDynamic = n => {
  const fib = Array(n + 1).fill(0);
  fib[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib;
}

const inverseFib = n => {
  const inverseList = {'1': 1, '2': 1};
  const fib = Array(n + 2).fill(0);
  fib[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    inverseList[fib[i]] = i;
  }

  return inverseList;
}

module.exports = {
  getFactors, 
  numOfFactors, 
  gcd, 
  lcm,
  fib,
  fibDynamic,
  inverseFib
}
