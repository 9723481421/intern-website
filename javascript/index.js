// let i=0;
// for(i=0;i<=5;i++){
//     console.log("i=",i);

// }

//
// let i = 0;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 5);
//    let gamenum=25;
//    usernum= prompt("guess the game number");
//    while(usernum !=gamenum){
//     usernum= prompt("this number incorrect pealse try again!")
//    }
//    console.log("congratulation this number is correct")
// let
//
// arthmetic

// let a=20;
// let b=10;

// console.log("a+b",a+b);
// console.log("a-b",a-b);
// console.log("a*b",a*b);
// console.log("a/b",a/b);
// console.log("a%b",a%b);

// **
//  let x=true;
//  let y=false;
//   let a = x && y;
//   let b= x||y;
//   let c=!x;
//   console.log(a);
//   console.log(b);
//   console.log(c);

// ***

// let c=20;
// c+=5;
// console.log(c);

// ****
// let a=20;
// let b=20;
// console.log(a<b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a===b);

// let array=[1,2,3,4,5,6,7,8,9,10]
// result=array. tospliced();
// console.log(result);

// Array sort method

//  let array=[50,40,30,20,10];
//  console.log(array);
//  console.log("array sort method:-",array.sort());

// let array=[10,20,30,40,50];
// console.log(array);
// console.log("array reverse method:-",array. tosorted());

// const array=[1,2,3,4,5];
// let myfunction=(total,val,ind,array) => {return total+val}
// let result=array.reduce(myfunction);
// console.log(array);

//  const array=[1,2,3,4,5];
//    let myfunction=(val,ind,array) => {return val>3}
//   let value=array.filter(myfunction);
//    console.log(value);

// const array=[1,2,3];
// const array1=["a","b","c",]
//    let myfunction=(val,ind,array) => {return [val,array1[ind]] }
//   let value=array.flatMap(myfunction);
//    console.log(value);

// function myfunction(a,b){
//   return a+b;
// }
// console.log(myfunction(30,20));

// const arrow=(a,b)=>{
//   return a+b
// }
// console.log( arrow(20,50)

//  let id  =document.getElementById("box")
//  box.innerText("hello")

// let div = document.getElementById("box")
// let h1=document.createElement("h1")
// let p = Document.createElement("p")
//     demo.appendchild(h1)
//     demo.replaceChild(p,h1)
//     h1.innerText="new Element is create"
//     p.innerText="element change"
//     h1.remove()

// let demo=document.getElementById("div")
//  demo.style.color="red"
//  demo.style.height="50px"
//  demo.style.width="50px"
//  demo.style.border="1px solid black"
//  demo.innerText="hello"

// let btn=document.querySelector("div")
// function mybtn(){
//     let btn = document.getElementbyid("div")
//     btn.innertext="vaishali"

// }

// function input() {
//   let a = document.querySelector("input");
//   a.value = a.value.toUpperCase();
// }
// function onhover() {
//   let a = document.getElementsByTagName("h1")[0];
//   a.innerText = "how  are you?";
// }
// function onleave() {
//   let a = document.getElementsByTagName("h1")[0];
//   a.innerText = "hello";
// }

// document.getElementsByClassName("alert")[0].addEventListener("click", click);
// function click() {
//   alert("hello student");
// }

let onhover = document
  .getElementsByClassName("hover")[0]
  .addEventListener("click", click)
  .addEventListener("mouseleave", click1)
  .addEventListener("hover", click2);
function click() {
  let a = document.getElementsByClassName("hover")[0];
  a.innerHTML = "hover";
}
function click1() {
  let a = document.getElementsByClassName("hover1")[0];
  a.innerHTML = "mouseleave";
}
function click2() {
  let a = document.getElementsByClassName("hover1")[0];
  a.innerHTML = "event";
}