// 1. 명시적 형 변환
let str1 = "10";
let str1ToNum = Number(str1);
let str1ToNum2 = parseInt(str1);

let num1 = str1 + 10;
let num2 = str1ToNum + 10;

console.log(num1);
console.log(num2);

// 숫자 -> 문자열
let num = 20;
let num1ToStr = String(num);
console.log(num1ToStr + 10);

//
let str2 = "10개";
let str3 = "개10";
let str2ToNum = parseInt(str2);
let str3ToNum = parseInt(str3);
console.log("10개 : " + str2ToNum);
console.log("개10 : " + str3ToNum);
