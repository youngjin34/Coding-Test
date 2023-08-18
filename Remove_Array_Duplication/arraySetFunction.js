// set()은 중복을 허용하지 않는다.
// array 안에 있는 filtering한 상태로 초기화

const nums = [1, 2, 3, 6, 6, 4, 5, 5, 3, 7, 9];

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // 중복을 허용하지 않기 때문에 {1,2}만 나온다.
console.log(mySet);

const uniqueNums = [...new Set(nums)]; /// spread연산자로 array 변환
console.log(uniqueNums);