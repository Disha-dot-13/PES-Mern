const promise=new Promise((resolve,reject)=>{
   
    setTimeout(() => {resolve("data fetched successfully") }, 2000);
})
promise.then((result )=>{
    console.log(result);

}).catch((error)=>{
    console.log(error);
})

console.log("1");
setTimeout(() => {console.log("2") },0);
console.log("3");
console.log("4");

async function test(){
    const result=await Promise;
    console.log(result);
}test()

async function hello(){
    return "hello world";
}

hello().then((result)=>{ console.log(result) });

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then( data => console.log(data))
      .catch((error)=> console.log(error));

async function getdata(){
    try{

        
        const res= await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
    }


    catch(err){
        console.log(err);
    }
}
getdata();
