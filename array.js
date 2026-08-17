let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);

let arr=[1,2,3,4,5];
function doublenum(n){
    return n*2;
}
let doubleArr=arr.map(doublenum);
let mulbyfour=arr.map((n)=>n*4);
console.log(mulbyfour);
console.log(doubleArr);

let stud=[
    {name:'disha',age:21},
    {name:'krish',age:25},
    {name:'charvi',age:20}
]
let result=stud.map(n => n.age);
console.log(result);

// filter functions 

let nums=[1,2,3,4,5,6,7,8];
let evennums=nums.filter(num => num%2==0);
console.log(evennums);

arr=[1,2,3,4,5];
let sumarr=arr.reduce((sum,curr) => sum+curr,0);
console.log(sumarr);

let arr1=[1,2,3,4,5];
let arr2=[11,22,33,44];
let arr3=[...arr1,...arr2];
console.log(arr3);
const merge=(one,...numbers)=>console.log(numbers);
merge(1,2,3,4,5)
