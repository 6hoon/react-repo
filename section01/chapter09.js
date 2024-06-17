// 함수의 종류
// 1. 함수 선언문 (클래스 개념) : 여기서만 함수 호이스팅 발생 (js가 실행될 때 가장 먼저 나와 선언)
// 2. 함수 표현식 (클래스 개념)
// 3. 익명 함수   (클래스 개념)
// 4. 화살표 함수 (클래스 개념) : let a = () => ()
// 5. 클래스 멤버함수

// js에서 { } 안에 들어 가는 것은 전부 클래스 / 그 안의 변수와 함수는 전부 멤버변수, 멤버함수
// 1. 함수 선언문 : 호이스팅 일어나서 언제든 호출 가능
let area = getArea(10, 20);
console.log("함수 선언 = " + area);

function getArea(width, height) {
  let area = width * height;
  // 내부 함수 선언문
  function twoArea(value) {
    console.log("내부 함수 선언 = " + value);
  }
  twoArea(area);
  return area;
}

// 2. 3. 함수 표현식(익명 함수)
let getArea1 = function (width, height) {
  let area = width * height;
  return area;
};
console.log("익명 함수 = " + getArea1(20, 20));

// 4. 화살표 함수
let getArea2 = (width, height) => {
  let area = width * height;
  return area;
};
console.log("화살표 함수 = " + getArea2(30, 20));
