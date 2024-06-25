function solution(numbers) {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const missingNumbers = allNumbers.filter(num => !numbers.includes(num));
  const sum = missingNumbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}