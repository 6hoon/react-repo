// 1. 객체를 순회하여 출력하기
const person = {
  name: "김동진",
  age: 25,
  tall: 175,
};

// 2. 객체에서 변수명을 key 값으로 문자열 배열을 통해 가져온다
let keyArr = Object.keys(person);
for (let i = 0; i < keyArr.length; i++) {
  console.log(`${keyArr[i]} : ${person[keyArr[i]]}`);
}

// 3. 객체에서 바로 멤버변수에 대한 value 값을 가져온다
let valueArr = Object.values(person);
console.log(Object.values(person));
for (let i = 0; i < valueArr.length; i++) {
  console.log(valueArr[i]);
}
