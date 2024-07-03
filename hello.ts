function add (a:number,b:number):number{
  return a+b;
}

let add2=function(x:number,y:number):number{
  return x+y;
}

function stradd(str1:string,str2:string):string{
  return str1+str2;
}
function checknum(num:number):boolean{
  return num>10;
}
function print(message:string):void{
  console.log("message")
  alert("322")
}

let product :{
  name:string;
  price:number;
  instock:number  
}={
  name:"james",
  price:99999,
  instock:190,

}

let numbers:number[]=[1,2,3];
let fruits:string[]=['apple','banana','water']
let any:any[]=[123,'apple','number>10']
let week:string[][]=[
  ['apple','water'],
  ['food','tomatoes']
]

let person:[string,number,boolean];
person=["alice",34,true];

let csv:[number,string,number,boolean][]=[
  [1,'apple',3,true],
  [2,'water',4,false],
]
let id:string| number;
id="1234";
id=234;

let names:string|string[]
names="alice";
names=["apple","banana"];

function displayprrice(price:number|[number,number]){
  if(typeof price==="number"){
      console.log(`價格:${price}`)
  }else{
    console.log(`價格範圍:${price[0]}~${price[1]}`)
  }
}
//列舉//
enum Role{
  admin,
  author,
  readonlyuser,
}

let user={
  name:"alice",
  role:Role.admin
}
console.log(user)

