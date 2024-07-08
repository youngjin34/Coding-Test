function solution(number) {
  let count = 0;
  const len = number.length;

  for (let i = 0; i < len - 2; i++) {
    for (let j = 0; j < len - 1; j++) {
      for (let k = 0; k < len; k++) {
        if (i < j && j < k) {
          if (number[i] + number[j] + number[k] === 0) {
            count++;
          }
        }
      }
    }
  }
  return count;
}