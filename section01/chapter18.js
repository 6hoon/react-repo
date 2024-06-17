// 1. forEach 내장함수 활용 / Java(향상된 for문)
const arr = [1, 2, 3, 4];

// for(int data : arr){} <- Java
// data : value / index : array.length / 전체배열 array

arr.forEach(
  (
    value
    // , index, array
  ) => {
    console.log(`value = ${value}`);
    //   console.log(`index = ${index}`);
    //   console.log(`array = ${array}`);
  }
);
console.log(`****************`);

// 2. 배열을 이용해 각 원서에 *2 결과값을 새로운 배열에 저장
const newArr = [];
// 콜백함수 : 함수선언식, 함수표현식, 화살표함수

let backFunc = (v) => {
  let data = 2 * v;
  newArr.push(data);
};
arr.forEach(backFunc);

newArr.forEach((v) => console.log(v));

console.log(`****************`);

arr.forEach((v) => newArr.push(2 * v));
newArr.forEach((v) => console.log(v));
