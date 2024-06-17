// 1. 객체 생성 2가지 방법
console.log(1);
let obj1 = new Object(); // 객체 생성자
obj1.name = "홍길동";
console.log(obj1["name"]);
console.log(obj1.name);

// 2. 객체 리터럴을 통해 객체 생성
console.log(2);
let obj2 = {};
obj2.name = "김길동";
console.log(obj2["name"]);
console.log(obj2.name);
// 클래스의 멤버변수 및 함수를 정해놓고 작업하는 Java 와 달리,
// Js의 경우 작업 도중 변수 및 함수를 추가

// 3. 객체 리터럴을 통해 객체생성(멤버변수,멤버함수 설정)
console.log(3);
let obj3 = {
  name: "이길동",
  age: 30,
  hobby: "축구",
  job: "Developer",
  "like cat": true, // 변수 명을 띄어 쓸 때 // 카멜표기법 권장
  childObj: {
    // 객체도 들어올수 있음
    address: "역삼역",
    name: "호산빌딩",
  },
  func1: function () {
    // 함수에 대한 리턴값을 주지 않으면 Js 에서는 undef 타입이 있기에 void 값으로 undef를 출력
    console.log("func1 = " + this.name);
  }, // 멤버함수
};
console.log(obj3.name);
console.log(obj3.childObj.address);
console.log(obj3.childObj["name"]);
console.log(obj3.func1());

let property = "hobby";
console.log(obj3[property]);

// 4. 객체 프로퍼티 접근 / obj3에 멤버변수 추가하여 출력
console.log(4);
obj3.job2 = "fe developer";
console.log(obj3);

// 5. 삭제
delete obj3.job;
console.log(obj3);

// 6.
let result1 = "name" in obj3;
let result2 = "cat" in obj3;
console.log(result1);
