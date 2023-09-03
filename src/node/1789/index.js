let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

function findMaxN(S) {
  let sum = 0;
  let N = 1;

  while (sum + N <= S) {
    sum += N;
    N++;
  }

  return N - 1;
}

const result = findMaxN(input);
console.log(result);