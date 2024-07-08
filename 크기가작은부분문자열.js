function solution(t, p) {
  let count = 0;
  let pLength = p.length;
  let pNum = parseInt(p);

  for (let i = 0; i <= t.length - pLength; i++) {
    let subStr = t.substring(i, i + pLength);
    let subNum = parseInt(subStr);
    if (subNum <= pNum) {
      count++;
    }
  }
  return count;
}