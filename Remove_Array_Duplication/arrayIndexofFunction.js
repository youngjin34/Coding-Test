// indexof()는 array element를 전달을 해주면 그에 상응하는 element의 첫 번째 index를 보여준다.

const nums = [1, 2, 3, 6, 6, 4, 5, 5, 3, 7, 9];

const uniqueNums = nums.filter((item, position) => {
  return nums.indexOf(item) === position;
});

console.log(uniqueNums);
