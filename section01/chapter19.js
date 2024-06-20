// 향상된 포문 ( : )=> for of문 (  of  )
// let array = ["Apple","Banana","Grape","WaterMelon"];

// for (let data  of array  ){
//   console.log(`array[${index}]=${data}`);
//   index++;
// }

// array.forEach((v,i)=>console.log(`array[${i}]=${v}`));

let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
  };

  let keyArray = Object.keys(person);
  console.log(keyArray);

  let valueArray = Object.values(person);
  console.log(valueArray);

  //향상된 포문에     in
  for( let key  in person ){
    console.log(`person[${key}] = ${person[key]}`);
  }