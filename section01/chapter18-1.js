const arr = [1, 2, 3, 4];
const newArr = [];

// 1.
arr.forEach((v) => console.log(v));
console.log("***************");

// 2.
let doubleArr = function (v) {
  newArr.push(2 * v);
};
arr.forEach(doubleArr);

newArr.forEach((v) => console.log(v));
console.log("***************");

// 3. map 활용 (forEach => 배열리턴(새로운 변형) / push를 할 필요없이 새로운 배열을 리턴)
// 한 문장일 때는 return을 적어주지 않아야한다
const arr2 = arr.map((v) => {
  return v * 2;
});
arr2.forEach((v) => console.log(v));
console.log("***************");

const arr3 = arr.map((v) => v * 3);
arr3.forEach((v) => console.log(v));
