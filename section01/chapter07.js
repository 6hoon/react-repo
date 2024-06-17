// 1. 비교연산자
let comp = 1 == "1"; // 값만 비교 (묵시적 형변환이 일어나, 값만 비교)
console.log(comp); // true
console.log(typeof comp); // true

let comp1 = 1 === "1"; // 타입도 비교 (묵시적 형변환이 일어나, 값만 비교)
console.log(comp1); // false

// 2. 병합연산자( ?? ) (null, undefined 되었을 때 다른 값으로 대체 가능)
// (null, undefined) 되지 않았을때 자신의 값을 가짐
let a = 10 > 2 ? 10 : 2; // 3항 연산자
console.log(a);

let undef; // undefined
console.log(undef);
undef = null;

undef = undef ?? 20; // 병합 연산자 (null 과 undefined)

// if(undef === null || undef === undefined) {
// undef = 20;
// }

console.log(undef);
