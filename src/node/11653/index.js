// 파일 시스템 모듈을 사용하여 input.txt 파일을 읽고, 각 줄을 배열로 분할한다.
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

// 결과를 저장할 배열
var answer = [];

// 입력에서 숫자를 읽고 정수로 변환한다.
let num = parseInt(input[0]);

// 주어진 숫자의 소인수분해를 수행하는 함수
function primeFactors(num) {
  if (num === 1) return; // 1은 소수가 아니므로 처리하지 않음
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      answer.push(i); // 소인수를 배열에 추가
      num = num / i; // num을 i로 나눠서 다음 인수를 찾는다.
    }
  }
}

// 소인수분해 함수를 호출하여 결과를 계산
primeFactors(num);

// 결과를 줄 바꿈으로 연결하고, 양 끝의 공백을 제거하여 출력한다.
console.log(answer.join('\n').trim());
