function solution(num) {
  var count = 0;
  while (num !== 1) {
    if (count >= 500) {
      return -1;
    }
    if (num % 2 === 0) {
      count++;
      return num / 2;
    } else {
      count++;
      return num * 3 + 1;
    }
  }
  return count;
}