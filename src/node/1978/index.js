var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
var answer = 0;

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

for (let i = 0; i < count; i++) {
  let num = Number(numbers[0][i]);
  if (checkPrime(num) === true) {
    answer++;
  }
}

function checkPrime(num) {
	if(num === 1) return false;
 	for(let i = 2; i < num; i++) {
  		if(num % i === 0) return false;
	} 
    return true;
}

console.log(answer);