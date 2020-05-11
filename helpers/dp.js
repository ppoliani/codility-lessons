// Consider n denominations, 0 <= c0 <= c1 <= . . . < cn−1.
// The algorithm processes the respective
// denominations and calculates the minimum number of coins needed to pay every amount from 0 to k
const dynamicCoinChanging = (C, K) => {
  const n = C.length;
  const dp = Array(n + 1).fill(Array(K + 1).fill(0));
  dp[0] = [0, ...Array(K).fill(Number.POSITIVE_INFINITY)];

  for (let i = 1; i < n + 1; i++) {
    dp[i] = Array(K + 1).fill(0);
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < C[i - 1]; j++) {
      dp[i][j] = dp[i - 1][j]
    }
    
    for (let j = C[i - 1]; j < K + 1; j++) {
      dp[i][j] = Math.min(dp[i][j - C[i - 1]] + 1, dp[i - 1][j]);
    }
  }
  
  return dp;
}

const dynamicCoinChangingOptimized = (C, K) => {
  const n = C.length;
  const dp = [0, ...Array(K).fill(Number.POSITIVE_INFINITY)];

  for (let i = 1; i < n + 1; i++) {
    for (let j = C[i - 1]; j < K + 1; j++) {
      dp[j] = Math.min(dp[j - C[i - 1]] + 1, dp[j]);
    }
  }

  return dp;
}

module.exports = {
  dynamicCoinChanging,
  dynamicCoinChangingOptimized
}
