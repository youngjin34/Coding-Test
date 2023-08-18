
// 1. 추가 문자열 활용
function checkPalindrome_1(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
};

console.log(checkPalindrome_1('abba'));
console.log(checkPalindrome_1('level'));
console.log(checkPalindrome_1('david'));


// 2. Two Pointer 활용 -> 시작 -->  <-- 끝
function checkPalindrome_2(str) {
  const len = str.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome_2('abba'));
console.log(checkPalindrome_2('level'));
console.log(checkPalindrome_2('david'));
