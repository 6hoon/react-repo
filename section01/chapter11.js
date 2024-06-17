// 함수 선언문1
function checkMood(mood) {
  mood === "good" ? sing() : cry();
}

// 콜백 : 자동으로 winOS가 불러준다
function checkCallBackMood(mood, goodCallback, badCallback) {
  mood === "good" ? goodCallback() : badCallback();
}

// 함수 선언2
function cry() {
  console.log("Action : cry");
}

// 함수 표현식3
let sing = function () {
  console.log("Action : sing");
};
// 화살표 함수4
let dance = () => {
  console.log("Action : dance");
};

// 함수콜 실행
checkMood("good");

// 함수콜백 실행
checkCallBackMood("good1", sing, dance); // 부를 함수를 유지보수하기 수월하다

// ===========================================================================

//함수 선언
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

let printValue = function (value) {
  console.log(value * 2);
};
let printValue2 = (value) => {
  console.log(value * 3);
};
// 함수 콜
// repeat(5, printValue2);

// value^2 + 4 출력
repeat(5, (value) => {
  let imsiValue = value ** 2 + 4;
  console.log(`${value}^2 + 4 = ${imsiValue}`);
});
