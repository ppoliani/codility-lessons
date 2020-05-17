const assert = require('assert');

const run = (profits) => {

  const solution = (profits) => {
    let lowestBought = Number.MAX_SAFE_INTEGER;
    let highestSold = 0;
    let maxProfit = 0;

    for (let i = 0; i < profits.length; i++) {
      const price = profits[i];
      
      if(price < lowestBought) {
        lowestBought = price;
        highestSold = 0;
      }
      if(price > highestSold) {
        highestSold = price;
      }

      maxProfit = Math.max(maxProfit, highestSold - lowestBought);
    }

    return maxProfit;
  }

  return solution(profits);
}

assert.equal(run([10, 20, 30, 40, 50, 1]), 40);
assert.equal(run([100, 20, 30, 40, 50, 1]), 30);
assert.equal(run([100, 20, 30, 40, 50, 1, 1001]), 1000);
assert.equal(run([23171, 21011, 21123, 21366, 21013, 21367]), 356);
assert.equal(run([10, 30]), 20);
assert.equal(run([100, 30]), 0);
