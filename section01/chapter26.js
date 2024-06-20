//1. spread ...
let arr1 = [1,2,3,4,5,50];
let arr2 = [11,12,...arr1,100];
let arr3 = [11,12,1,2,3,4,5,50,100];

console.log(arr2);
console.log(arr3);

arr1.push();
let arr4 = [10, 20, ...arr1];
arr1.unshift(1000);
let arr5 = [1, 2, ...arr1];
console.log(arr5);

//2. object spread
let obj1 = {
  a:1,
  b:2,
};

let obj2 = {
  ...obj1,
}

console.log(obj2);
let arr6 = [1,2,3,4,5,50];
//3. spread 연산자를 통해서 함수 데이터 전달방식
function funcA(a1,a2,a3){
  console.log(a1,a2,a3);
}
funcA(...arr6);

//3. Rest 매개변수 (나머지를 스프레드 연산자 기능)
function funcB(one,two, ...ds){
  console.log(one);
  console.log(two);
  console.log(ds);
}

funcB(...arr6)