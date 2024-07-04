process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', data => {
  input += data;
});

process.stdin.on('end', () => {
  const [a, b] = input.trim().split(" ").map(Number);

  // 가로의 길이 a, 세로의 길이 b로 직사각형 출력
  for (let i = 0; i < b; i++) {
    console.log('*'.repeat(a));
  }
});
