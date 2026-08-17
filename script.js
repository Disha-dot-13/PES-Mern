var a = 10;     
let b = 20;     
const c = 30;    

a = 15;
b = 25;

console.log(a);
console.log(b);
console.log(c);
let name="disha"
let isStudent=true;
let dept=null;
console.log(typeof dept);
let object={
    name:"A",
    age:21
};
console.log(object.age);
let copy=object
copy.age=30
console.log(object.age);
console.log(0||"Hello");
let value=0;
console.log(0??18);
console.log(5=="5");
console.log(5==="5");
var a=10;
var a=20;
console.log(a);

let age =18;
console.log(age>=18 ? "eligible to vote" : "not eligible to vote");

var a;

console.log(a);

a = 10;

function greet(){
    console.log("helllooo");

}
greet();

// Arroww Function
const krish = () => {
    return "arrow function";
}

console.log(krish());

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Krishhhhhh ");
}

processUser(greet);

let namee="disha";
console.log(`hello ${namee}`);

let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);

