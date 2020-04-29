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


module.exports = {divisors}
