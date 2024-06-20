//1. 자바스크립트에서 false
// undefinded, null, 0, -0, NaN, "", 0n
//주의: [], {}, ()=>{}, Infinity, -Infinity

//함수 선언문
function printName(person){
  if(!person){
    console.log("person은 false");
  }else{
    console.log(person.name);
  }
}

let person = {name: "Marcus"};
printName(person);