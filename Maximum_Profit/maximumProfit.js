function maxProfit(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let price of prices) {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice);
    } else {
      minBuyPrice = price;
    }
  }
  return maxProfit;
}

console.log(maxProfit([100, 40, 200, 55, 10, 300]));