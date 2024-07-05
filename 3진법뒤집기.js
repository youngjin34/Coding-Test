function solution(n) {
  let ternaryString = n.toString(3);
  let reversedTernaryString = ternaryString.split('').reverse().join('');
  let result = parseInt(reversedTernaryString, 3);

  return result;
}