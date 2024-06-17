// 전역 스코프
let globalVar = 1;

// 함수 선언문
function funA() {
  // 지역 스코프
  let localVar = 10;
  console.log("local = " + localVar);
  console.log("global = " + globalVar);
}

// 함수 콜
funA();
// console.log("local = " + localVar);
console.log("global = " + globalVar);

// 조건문
if (true) {
  // 블럭변수 <- 구문 안의 변수는 지역변수라 지칭 X / (함수 안에서 지역변수라 지칭)
  let blockVar = 10;
  console.log(`blockVar = ${blockVar}`);
}
// console.log(`blockVar = ${blockVar}`);

// 반복문
for (let i = 0; i < 5; i++) {
  // for 문의 지역변수 i
  let blockForVar = 10;
  console.log(`i = ${i}`);
  console.log(`blockForVar = ${blockForVar}`);
}
