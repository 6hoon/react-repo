// 1. 숫자 연산
let num1 = 27;
let num2 = 1.3;
console.log(num1 / num2); // js 에서는 정수값이 아닌 실제 값을 출력

let inf = num1 * "abc"; // NaN -> 수학적인 연산이 실패할 때
let inf1 = num1 + "abc"; // 27abc -> 덧셈의 경우 자동형변환
let inf2 = num1 - "27"; // 0 -> 뺄셈으로 할 시 자동형변환 하여 연산
console.log(inf);
console.log(inf1);
console.log(inf2);

// 2. 템플릿 리터럴 방식
let stringData = `내 나이는 ${num1} 입니다`; // jsp의 expression language와 동일, 반드시 ` 사용
console.log(stringData);

// 3. undefined
let undef;
console.log(undef);
