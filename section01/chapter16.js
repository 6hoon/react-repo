// 1. 배열 생성자
let arrA = new Array(); // push 를 통해 삽입
// 2. 배열 리터럴
let arrB = [];
// 3. 배열에 사용할 수 있는 타입
let arrC = [
  1,
  NaN,
  Infinity,
  -Infinity,
  true,
  "hello",
  null,
  undefined,
  {}, // 객체
  [], // 배열
  () => {}, // 함수
];

/*
for (let i = 0; i < arrC.length; i++) {
  console.log(`${[i]} : ${arrC[i]}`);
}
//*/

arrC.push(function () {
  counsole.log("abc");
});
arrC.push("name");
arrC.push({ key: "value" });

console.log(arrC);
