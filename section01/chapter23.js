//1. filter
let arr1 = [
  {name: "Marcus", hobby: "KILL"},
  {name: "Marcus2", hobby: "KILL2"},
  {name: "Marcus3", hobby: "KILL3"},
];

let filterArray = arr1.filter((obj,index)=>{
  console.log(`arr1[${index}] = ${obj}`);
  return obj.hobby === "KILL";
});

console.log(filterArray);