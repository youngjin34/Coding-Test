function solution(price, money, count) {
  let totalCost = 0;
  for (let i = 1; i <= count; i++) {
    totalCost += price * i;
  }
  let shortage = totalCost - money;

  return shortage > 0 ? shortage : 0;
}