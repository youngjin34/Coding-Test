// caching, frequency map
// 추가적인 자료구조를 사용하는 방법
// loop을 통해 미리 지정된 caching object에 존재 여부 확인

const nums = [1, 2, 3, 6, 6, 4, 5, 5, 3, 7, 9];

function uniqueNums(arr) {
  const uniqueElements = {};
  const result = [];
  for (let element of arr) {
    if (!uniqueElements[element]) {
      result.push(element);
    }
    uniqueElements[element] = element;
  }
  return result;
}

console.log(uniqueNums(nums));