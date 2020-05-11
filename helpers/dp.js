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

// We store in the dp the number of ways to jump to position i having the options of jumping n steps as defined in S
// For example if S = {1, 3, 5} then:
// numOfWays(0) = 1; We have one way to jump to location 0
// numOfWays(n) = numOfWays(n - 1) + numOfWays(n - 3) + numOfWays(n - 5)  
const frog = (S, K) => {
  const dp = Array(K + 1).fill(0)
  dp[0] = 1;

  for (let i = 1; i < K + 1; i++) {
    for (let j = 0; j < S.length; j++) {
      if(S[j] <= i) {
        dp[i] += dp[i - S[j]];
      }      
    }
  }

  return dp[K];
}

const frogRecursive = (S, K) => {
  if(K === 0) return 1;
  let total = 0;

  for (let i = 0; i < S.length; i++) {
    if(K - S[i] >= 0) {
      total += frogRecursive(S, K - S[i])
    }
  }

  return total;
}

module.exports = {
  dynamicCoinChanging,
  dynamicCoinChangingOptimized,
  frog,
  frogRecursive
}
