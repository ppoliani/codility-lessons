/**
 * For each position, we compute the largest sum that ends in that position
 */
const maxSlice = A => {
  const N = A.length;
  let maxEnding = 0;
  let max = 0;

  for (let i = 0; i < N; i++) {
    maxEnding = Math.max(0, maxEnding + A[i]);
    max = Math.max(max, maxEnding);
  }

  return max;
}
