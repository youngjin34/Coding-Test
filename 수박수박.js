function solution(n) {
  let pattern = "수박";
  let result = "";

  for (let i = 0; i < n; i++) {
    result += pattern[i % 2];
  }

  return result;
}