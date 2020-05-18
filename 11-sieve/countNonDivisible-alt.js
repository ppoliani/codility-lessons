const assert = require('assert');

const run = (A) => {

  /**
   * If we know the number of times each number appears in the array then we can find the factors of each of them
   * and we know that then non-divisors is the N - divisors.
   * So we first count the occurrence and store in a array using and 2 * N (as this is the biggest number that can exist).
   * Each index will have the frequency of the corresponding number within the original array.
   * Finally we calculate the factors for each of that number and add the frequency of that number within the array. If we know 
   * the number of factors then we can find the number of non divisors as it will be N - divisors.
   */
  const solution = (A) => {
    const N = A.length;
    const occurrence = Array(2 * N + 1).fill(0);

    for (let i = 0; i < N; i++) {
      occurrence[A[i]]++;
    }

    const result = [];

    for (let i = 0; i < N; i++) {
      const num = A[i];
      let j = 1;
      let count = 0;

      while(j * j < num) {
        if(num % j === 0) {
          count += occurrence[j];
          // we need this because we loop sqrt(N) times
          // so we don't cover all possible divisors.
          // this is similar to doing result += 2; in the divisor algorithm
          count += occurrence[num / j];
        }

        j++;
      }

      if(j * j === num) {
        count += occurrence[j];
      }

      result[i] = N - count;
    }

    return result;
  }

  return solution(A);
}

assert.deepEqual(run([3, 1, 2, 3, 6]), [2, 4, 3, 2, 0]);
