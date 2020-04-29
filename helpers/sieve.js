const sieve = n => {
  const result = Array(n).fill(true);
  result[0] = false;
  result[1] = false;

  let i = 2;

  while(i * i <= n) {
    if(result[i]) {
      let k = i * i;

      while(k <= n) {
        result[k] = false;
        k += i;
      }
    }

    i++;
  }

  return result;
}


module.exports = {sieve};
