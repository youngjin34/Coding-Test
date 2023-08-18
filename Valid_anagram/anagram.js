// 애너그램
// 두 단어의 글자 나열 순서는 다르지만 구성이 일치할시 -> 애너그램

// 1. split(), sort(), join()
// 2. hash map

const strA = "listen";
const strB = "silent";

// listen -> split()으로 배열로 만듦 ->  sort()로 정렬 -> join()으로 다시 문자열로 만듦
function isAnagramA(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  return strA.split("").sort().join() === strB.split("").sort().join();
}

console.log(isAnagramA(strA, strB));


// hash map, map={}
function isAnagramB(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const hashMap = {};
  for (const char of strA) {
    // {l:1, i:1, s:1 ...}
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }
  for (const char of strB) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}

console.log(isAnagramB(strA, strB));