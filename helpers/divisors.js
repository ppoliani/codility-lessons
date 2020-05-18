const divisors = n => {
  let i = 1;
  let result = 0;

  while(i * i < n) {
    if(n % i === 0) result += 2;
    i++;
  }

  if(i * i === n) result += 1;

  return result;
}

/**
 * If ww find a number between 2 and n − 1 that divides n then n is a composite number. Otherwise,
 * n is a prime number.
 */
const primality = n => {
  let i = 2;

  while(i * i < n) {
    if(n % i === 0) return false;
    i += 1;
  }

  return true;
}


module.exports = {divisors, primality}
