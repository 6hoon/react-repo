// 함수 선언식
function add(num1, num2) {
  let calValue = num1 + num2;
  return calValue;
}

let varAdd = add; // 함수를 매개변수로 넘길 수 있다, 단 호이스팅은 불가
console.log("함수 직접 출력 = " + add(10, 20));
console.log("변수로 출력 = " + varAdd(10, 20));

// 함수 표현식
let varAdd2 = function (num1, num2) {
  let calValue = num1 + num2;
  return calValue;
};
console.log("함수 표현식 = " + varAdd2(100, 200));

// 화살표 함수
let varAdd3 = (num1, num2) => {
  let calValue = num1 + num2;
  return calValue;
};
console.log("화살표 함수 = " + varAdd3(10, 20));
