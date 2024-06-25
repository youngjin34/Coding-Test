function solution(phone_number) {
  let len = phone_number.length;
  let last4Digits = phone_number.slice(-4);
  let maskedPart = '*'.repeat(len - 4);

  return maskedPart + last4Digits;
}