//1. 날짜 객체를 만두는 방법
let date = new Date();
console.log(date);

//2. 내가 원하는 날짜를 만드는 방법
var date2 = new Date(2024,6,18,12,33,20);
let date3 = new Date(4040,4,19,11,11,11);
console.log(date2);

//3. 날짜를 TimeStemp (1970,01,01,0시 0분 0초: 0)
//(1970,01,01,0시0분2초: 2000) (2024,06,18, 0시0분2초: ~~~~)
let TimeStemp2 = date2.getTime();
let TimeStemp3 = date3.getTime();
console.log(TimeStemp2); 

//4. 시간 객체끼리 비교
if(date2.getTime === date3.getTime){
  console.log("같다");
}else{
  console.log("틀리다");
}

//5. 시간요소들 추출방법
var date2 = new Date();
console.log(date2.getDate());
console.log(date2.getDay());
console.log(date2.getFullYear());
console.log(date2.getHours());
console.log(date2.getMilliseconds());
console.log(date2.getMinutes());
console.log(date2.getMonth()+1);
console.log(date2.getSeconds());
console.log(date2.getTime());
console.log(date2.getTimezoneOffset());

//6. 시간수정하기 setFullYear ~~~~
//7. 날짜만 출력하고 싶을때
console.log(date2.toDateString());
console.log(date2.toLocaleDateString());
