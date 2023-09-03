const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim();

function convertToBinary(octal) {
    let binary = '';
    for (let i = 0; i < octal.length; i++) {
        const octalDigit = parseInt(octal[i], 8); // 8진수 문자열을 10진수로 변환
        let binaryDigit = '';

        // 각 8진수 자릿수를 3비트의 2진수로 변환
        for (let j = 2; j >= 0; j--) {
            const bit = (octalDigit >> j) & 1;
            binaryDigit += bit.toString();
        }

        binary += binaryDigit;
    }

    return binary;
}

const result = convertToBinary(inputs);

// 결과에서 0을 제외하고 1로 시작하도록 수정
const trimmedResult = result.replace(/^0+/, ''); 
console.log(trimmedResult || '0'); // 결과가 비어있으면 '0'을 출력