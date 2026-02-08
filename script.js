// function sayHello(){
//     console.log("Hello World");
// }
// sayHello();
// function greet() {
//     console.log("Good Morning");
// } 
// greet();
// function mixer(){
//     console.log("mixing the spices");
// }
// mixer();
// function greet(name){
//     console.log("Hello"+name);
// }
// greet("Iram");
// greet("Amaan");
// function printAge(Age){
//     console.log("My Age is",Age)
// }
// printAge(25);
// function printName(Name){
//     console.log("My name is:",Name);
// }
// printName("Iram");
// printName("Amaan");
// function add(a,b){
//     console.log("The sum of 2 numbers is:", a+b);
// }
// add(8,7);
// function mul(x,y){
//     console.log("The product of 2 num is:", x*y);
// }
// mul(5,2);
// mul(8,8);
// mul(1000,1000)
// function fullName(firstName,lastName){
//     console.log("My full name is:", firstName + " "+" "+" "+ lastName);
// }
// fullName("Iram" ,"Naz");
// function totalMarks(Hindi,English,Computer){
//     console.log(Hindi+English+Computer);
// }
// totalMarks(50,40,33);
// function checkNum(x){
//     if(x%2===0){
//     console.log("the num is Even");
//     }
//     else{
//        console.log ("the number is odd");
// }}
// checkNum(5);
// checkNum(10);
// function numSquare(x){
//     console.log("the square of a num is:", x*x);
// }
// numSquare(12);
// function recArea(length,width){
//     console.log("The area of a rectangle is", length*width);
// }
// recArea(5,5);
// function squareArea(side)
// {
//     console.log("The Area of a square is:",4*side);
// }
// squareArea(5);

// function greetings(name,time){
//     console.log("Good"+" "+ time,name)
// }
// greetings("amaan","morning")
// function percentage(obt,total){
//     console.log("the percentage is:", (obt/total)*100,"%");
// }
// percentage(40,60);
// function printtable(num)
// {
//     for(let i=1;i<=10;i++){
//         console.log(num*i);
//     }
// }
// printtable(7);
// function printtable (num){
//     for(let i=1;i<=10;i++){
//         console.log(num*i);
//     }
// }
// printtable(5);
// const printtable=(num)=>{
//     for(let i=1;i<=10;i++){
//         console.log(`${num}x${i}=${num*i}`);
//     }
// }
// printtable(8);

// function add(a,b){
//     return a+b;
// }
// let sum=add(10,15);
// console.log(sum);

// function sum(x,y){
//     console.log(x+y);
// }
// let result=sum(2,5);
// console.log(result);
// function square(num){
//     return num*num;
// }
// let result=square(4);
// console.log(result);
// function checkEven(num){
//     if(num%2==0){
//         return "Even";
//     }
//       else{
//         return "Odd";
//       }  
// }
// let result=checkEven(10055);
// console.log(result);
// function greet(name){
//     return "hello"+name;
// }
// console.log(greet("iram"));
// function isAdult(Age){
//     return Age>=18;
// }
// console.log(isAdult(18));
// console.log(isAdult(15));
// const max=(a,b)=>{
//     return a>b?a:b
// }
// console.log(max(9,8));
// const min=(a,b)=>{
//     return a<b?a:b
// }
// console.log(min(5,3));
// const greater=(a,b,c)=>{
//     return (a>b&&a>c)?a:(b>c)?b:c;
// }
// console.log(greater(10,15,100));
// const min= (a,b,c)=>{
//     return (a<b&&a<c)?a:(b<c)?b:c;
// }
// console.log(min(0,2044,22));
// let Age=15;
// let result= (Age>=18)?"Adult":"Not Adult";
// console.log(result);
// let num=80;
// let marks= (num>35?"pass":"fail");
// console.log(marks);
// let amount=2000;
// let discount=(amount>=2000?"on Discount":"Not on Discount");
// console.log(discount);
// let n=0
// let result=(n>0)?"positive":(n<0)?"negative":"Zero";
// console.log(result);
// function max(a,b){
//     return (a>b)?a:b;
// }
// console.log(max(5,6));
// function div(num){
//     return num%5==0?"div by 5":"not div by 5";

// }
// console.log(div(42));
// const salary=(num)=>{
//     return num>30000?"Taxable":"non Taxable";
// }
// console.log(salary(5000));
// console.log(salary);
// function password(num){
//     return num.length>=8?"valid Password":"invalid password"
// }
// console.log(password(12345678))
 //IF ELSE LOOP 
//  let password="abc12";
//  if (password.length>=8){
//     console.log("strong password");
//  }
//  else{
//     console.log("Weak password");
//  }
//  let pwd="@";
//  let hasNum=/[0-9]/.test(pwd);
//  let hasChar=/[!@#$%^&*(),.?":{}\<>]/.test(pwd);
//  if(pwd.length>=8 || hasNum || hasChar){
//     console.log("passwod is strong");
//  }
//  else{
//     console.log("password is weak");

// for(let i=1;i<=10;i++){
// if(i%2==0){
//     console.log(i);
// }
// }
// for (let i=1;i<=5;i++)
//     console.log(i);
// for (let i=1;i<=10;i++){
//     console.log(`3x${i}=${3*i}`);
// }
// const table=(num)=>{
//     for (let i=1;i<=10;i++){
//         console.log(i*num)
//     }
// }
// table(5);
// let num=2;
// while(num<=10){
//     console.log(num);
//     num+=2;
// }
// let i=1;
// let sum=0;
// while(i<=5){
//     console.log (sum+=i);
//     i++

// }
// let i=2;
// while(i<=10){
//     console.log(i);
//     i+=2;
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// let num=1;
// while(num<=10){
//     console.log(num);
//     num++;
// }
// let num=10;
// while(num>=1){
//     console.log(num);
//     num-=1
// }
// let num=1;
// while(num<=21){
//     console.log(num);
//     num+=2;
// }
// let num=1;
// do{ console.log(num);
//     num+=2;
// } 
// while(num<=20);
// let password;
// do{
//     password=prompt("Enter your Password");
// } while(password.length<8);
//     console.log("Login Successful");
// let pwd;
// do{
//     pwd=prompt("Enter your password");
//     if(pwd.lenght<8){
//         console.log("Weak Password");
//     }}
//     while(pwd.length<8);

// console.log("strong Password");
// let pin;
// do{
//     pin=prompt("Enter your ATM Pin");
// }
// while(pin !=="1234");
// console.log("Access Granted");
// let otp;
// do{
//     otp=prompt("Enter your OTP");
// }
// while(otp !== "1234");
// console.log("OTP Verified");
// let pattern;
// do{
//     pattern=prompt("enter the unlock pattern");
// }
// while(pattern!=="LURD");
// console.log("mobile unlocked successfully");
// let fruits=["Apple","Banana","Mango"];
// for (let fruit of fruits){
//     console.log (fruit);
// }
// let num=[10,20,30];
// let sum=0;
// for(let n of num){
//     sum+=n;
// }
// console.log(sum);
// let str="iramnaz";
// for(let char of str){
//     console.log(char);
// }
// let arr=[1,2,3,4,5,6];
// for(let num of arr){
//    if(num%2===0){
// console.log(num)
//    }
   
// }
// let oddNum=[1,2,3,4,5,6,7,8,9,10]
// for(let num of oddNum){
//     if (num%2!==0)
//     {
//         console.log(num);
//     }
// }
// let str= "aeiouabcdgf";
// for(let vow of str){
//     if (vow==="a"||vow==="e"||vow==="i"||vow==="o"||vow==="u"){
//         console.log(vow);
//     }
// }
// let name="javascript";
// for(let ch of name){
//     let c= ch.toUpperCase();
//     if(ch>="a"&&ch<="z" && !(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u")){
//         console.log(ch);
// }}
// let arr=[10,45,3,99,22];
// let max=10;
// for(let n of arr){
//     if(n>max){
//         max=n;
//     }
// }
// console.log(max);
// let students={
//     name:"Iram",
//     Age:24,
//     course:"Javascript"
// };
// for (let key in students){
//     console.log(students[key]);
// }
// let arr=["apple","Mango","banana"]
// for(let val in arr){
//     console.log(val,arr[val]);
// }
// let student={
//     Name:"Iram",
//     Age:24,
//     city:"Haldwani"
// };
// let count=0;
// for(let key in student){
//     count++;
// }
// console.log(count);
// let car={
//     brand:"tata",
//     model:"Nexon",
//     year:2025
// };
// let count=0;
// for(let key in car)
// {
//     count++;  
// }
// console.log(count);
// let user={ username:"Admin",
//     Password:"1234"
// };
// let found=false;
// for(let key in user){
//     if(key==="password"){
//         found=true;
//     }
// }
// console.log(found);
// let user={
//     name:"iram",
//     age:24,
//     city:"haldwani",
//     email:"iram231@gmail.com"
// };
// for(let key in user){
//     console.log(key,":",user[key]);
// }
// let product={
//     Name:"Electric iron",
//     Price:2000,
//     Discount:"5%",
//     Brand:"Usha"
// };
// for(let key in product){
//     console.log(`${key}->${product[key]}`); 
// }
// let login={
//     username:"dd",
//     password:"dd ",
// };
// let valid=true;
// for(let key in login){
//    if(!login[key]) {
//     valid=false;
//    }
// }
// console.log(valid);
// let signupdata={
//     username:"",
//     password:"iram1232@"
// };
// valid=true;
// for(let key in signupdata){
//     if(!signupdata[key])
//         valid=false;
// }
// console.log(valid);
// let price=[100,200,300];
// let pricewithgst= price.map(price=>price+price*0.18);
// console.log(pricewithgst);
// let marks=[40,75,90];
// let grades=marks.map(m=>m>=80?"A":m>=60?"B":"C");
// console.log(grades);

// let users=[
//     {name:"Iram", Age:20},
//     {name:"Amaan", Age:24}
// ];
// let names=users.map(user=>user.Age );
// console.log(names);
// let str=["iram","nikhat","amaan"]
// let newstr=str.map(name=>name.toUpperCase());
// console.log(newstr);
// let names=["IRAM","NIKHAT","AMAAN"];
// let newnames=names.map(name=>name.toLowerCase());
// console.log(newnames);
// let users=[
//     {name:"iram", Age:28},
//     {name:"Amaan",Age:25}  
// ];
// newarr=users.map(val=>val.name)
// console.log(newarr);



// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 4000);
//  let salary=new Promise( (resolve,rejecte)=>
//  {
//     let credited= false;
//     if (credited){
//         resolve("salary credited");
//     }
//         else{
//             rejecte("Salary Delayed");
//         }
//     }
//  );
// salary
// .then(res=>console.log(res))
// .catch(err=>console.log(err));
// let foodOrder=new Promise((resolve,reject)=>{
// let delievered=false ;
// if (delievered){
//     resolve("Food delievered");
// }
// else{
//     reject("Food cancelled");
// }
// });
// foodOrder
// .then(res=>console.log(res))
// .catch(err=>console.log(err));
// let onlineOrder=new Promise((resolve, reject) => {
//     resolve("order placed");
// });
// onlineOrder
// .then((msg)=>{console.log(msg);
// return "payment successful"})
// .then((msg=>{
//     console.log(msg);
//     return "product packed";
// }))
// .then((msg=>{
//     console.log(msg);
//     return "out for delievery";   
// }))
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.log(err);
// });
// let salary=new Promise((resolve,reject)=>{
//     resolve("Work Done");
// })
// .then((msg=>{
//     console.log(msg);
//     return Promise.reject ("client payment not received");
// }))
// .then((msg=>{
//     console.log(msg);
//     return "salary accepted";
// }))
// .then((msg=>{
//     console.log(msg);
//     return "salary credited";
// }))
// .then((msg=>{
//     console.log(msg);
    
// }))
// .catch((err=>{
//     console.log(err);
    
// }));
// function calculator(a,b,callback){
//     let result= callback(a,b)
//     console.log ("result",result);
// }
// function add(a,b){
// return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// calculator(10,15,add);
// calculator(25,15,subtract);

// function calSquare (num,callback){
//     let square=num*num
//     callback(square);
// }
// function printSquare(result){
//     console.log("the square is:",result);
// }
// calSquare(10,printSquare);
// let string=" ";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML =='='){
//             string = eval(string);
//              document.querySelector('input').value=string;
//         }
//         else if(e.target.innerHTML =='C'){
//             string = ""
//              document.querySelector('input').value=string;
//         }
//         else{
//         console.log(e.target)
//         string=string + e.target.innerHTML;
//         document.querySelector('input').value=string;
//         }
//     })
// })
// console.log("DOM")
//  document.body.childNodes[3].innerText= "Hellow World";
//  let heading=document.getElementById("heading")
//  console.dir(heading);
//  let headings= document.getElementsByClassName("heading");
//  console.dir(headings);
// let parahs= document.getElementsByTagName("p")
// console.dir(parahs);
// let firstElement= document.querySelector("p");
// console.dir(firstElement);
// let allElement= document.querySelectorAll("p");
// console.dir(allElement);
// let el= document.querySelectorAll(".heading");
// console.dir(el);
// let el= document.querySelector("p");
// console.dir(el);
// let div= document.querySelector("div");
// console.dir(div);
// let heading= document.querySelector(".heading");
// console.dir(heading);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText= h2.innerText+"hello world";
// let divs= document.querySelectorAll(".box");
// let idx=1;
// for (div of divs){
// div.innerText=`new value ${idx}`;
// idx++;
// }

// divs[0].innerText="new unique value1";
// divs[1].innerText="mew unique value2";
// divs[2].innerText="new unique value3";
// console.log("helllo world");
// let div= document.querySelector("div");
// console.log(div);
// let id= div.getAttribute("id");
// console.log(id);
// let para= document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));
// let div=document.querySelector("div");
// console.log(div)
// div.style.backgroundColor= "red"
// div.style.fontSize="20px"
// div.innerText="Hello!!"
// let newBtn= document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn)
// let para=document.querySelector("p")
// para.after (newBtn)
// let heading= document.createElement("h1");
// heading.innerHTML= "<i> Heading 1 <i/>";
// document.querySelector("h1")
// document.querySelector("body").prepend(heading)
// let para=document.querySelector("h1");
// heading.remove();
// let div=document.querySelector("div");
// div.remove();
// let body= document.querySelector("body")
// body.remove();
// let newBtn=document.createElement("button");
// newBtn.innerText="Cick Me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="White";
// console.dir(newBtn)

// document.querySelector("body").prepend(newBtn);
// let para= document.querySelector("p");
// para.getAttribute("class")
// let btn1= document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     console.log(e)
//     console.log(e.type);
//     console.log(e.target); 
// }
// let btn1= document.querySelector("#btn1")
// btn1.addEventListener("click", (evt)=>{
// console.log("button1 was clicked-Handler1");
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// });
// btn1.addEventListener("click", ()=>{
// console.log("button1 was clicked-Handler2");
// });
// let currentMode= "light";
// let modeBtn= document.querySelector("#mode");
// modeBtn.addEventListener("click", ()=>{
// if(currentMode==="light"){
//     currentMode="dark";
//     document.querySelector("body").style.backgroundColor="black";}
//     else{
//         currentMode="light";
//         document.querySelector("body").style.backgroundColor="white";}
    
//     console.log(currentMode);
// }
// );
// /
//   const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
//   };

//   const karanArjun = {
// salary:50000,
// calcTax(){
//     console.log("tax rate is 20%")
// }
//   };
//   karanArjun.__proto__ = employee;

//   const karanArjun2 = {
// salary:50000,
//   };
//    karanArjun2.__proto__ = employee;

//   const karanArjun3 = {
// salary:50000,
//   };
//    karanArjun3.__proto__ = employee;
// class toyotaCar{
//     start(){
// console.log("start");
//     }
//     stop(){
//         cons ole.log(stop);
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner= new toyotaCar();
// fortuner.setBrand("fortuner");
// let lexus= new toyotaCar();
// lexus.setBrandBrand("lexus");
// class person {
//     constructor(){
//         console.log("enter parent constructor");
//         this.species="homo-sepians";
//     }
//     eat(){
//         console.log("eat");
//     }

// }
// class engineer extends person {
//     constructor(branch){
//         console.log("enter child constructor");
//         super(); // to invoke parent class constructor
//         this.branch= branch;
//         console.log("exit  child constructor");
//     }
//     work(){
//         console.log ("solve problems, build something");
//     }
// }

// let engObj=new engineer("chemical engg");
// let data= "secret information";
// class user {
//     constructor(name,email){
// this.name= name;
// this.email= email;
//     }
//     viewData(){
//         console.log("website data=", data)
//     }
// }
// class admin extends user {
//     constructor(name,email){
//         super(name,email); 

//     }
//     editData(){
//         data= "some new value";
//     }
//     }

// let student1= new user("iramnaz", "iramnaz948@gmail.com");
// let student2= new user("amaan","amaanansari@gmail.com");
// let teacher1= new user("Dean","dean@gmail.com");
// let admin1= new admin("admin","admin@gmail.com")
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000) // timeout of 2 sec
// setTimeout(()=>{
//     console.log("good morning");
// },3000); 
// console.log("one");
// console.log("two"); 

// function sum (a,b){
//     console.log(a+b);
// }
// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }
// calculator (1,2,sum); 
// function getData(dataId,getNextData){
//     setTimeout(()=>{
// console.log("data",dataId);
// if (getNextData){
//     getNextData();
// }
//     }, 2000);
    
// }
// //callback hell
// getData(1,()=>{ 
// getData(2,()=>{
//     getData(3);
// });
// });
// let promise = new Promise((resolve,reject)=>{
// console.log("iam a promise");
// // reject("some error");
// // });
// function getData(getData,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//      console.log("data", getData);
//      resolve("success");
//      if (getNextData){
//         getNextData();
//      }
//         }, 5000);
//     })
// }
// function add (a,b){
//     return a+b;
// }
// let result= add(5,3);
// console.log (result);

//  function test (a,b){
//     console.log(a+b);
//     return a+b;
    
//  }
//  let result=test (2,3);
//  console.log(result); 
//  function informCustomer(){
//     console.log("your parcel has been delievered");
//  }
//  function delieveredParcel(){
//     console.log("parcel is on the way");
//     callback();
//  }
//  delieveredParcel(informCustomer);

//  function announceResult(){
//     console.log("result announced");
//  }
//  function checkExam(callback){
//     console.log ("check the exam copies");
//      callback();
//  }
//  checkExam(announceResult);
// function asynFunc1(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log("some data1")
// resolve("success");
// },4000);
//   })  ; 
// }
// function asynFunc2(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log("some data2")
// resolve("success");
// },4000);
//   })  ;
// }
// console.log("fetching data1");
// let p1= asynFunc1();
// p1.then((res)=>{
//     console.log(res);
// });
// console.log("fetching data1......");
// asynFunc1().then((res)=>{
//     console.log("fetching data2......");
//     asynFunc2().then((res)=>{});
// });
// let promise= new Promise((resolve,reject)=>{
//     if(consition){
//         resolve("success message");
//     }
//     else{
//         reject("error message");
//     }
// });
// promise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });

// let pizzaOrder= new Promise((resolve,reject)=>{
//     let pizzaReady=false;
//     if(pizzaReady){
//         console.log("order successful");
//     }
//     else{
//         console.log("order failed");
//     }
// });
// pizzaOrder
// .then((res)=>{
//     console.log(message);
// })
// .catch((err)=>{
//     console.log(message);
// });
// let parcelTrack= new Promise((resolve,reject)=>{
//     let parcelDelievered= false;
//     if(parcelDelievered){
//         console.log("order succesful");
//     }
//     else{
//         console.log("order cancelled");
//     }
// });
// parcelTrack
// .then((res)=>{
    
// })
// .catch((err)=>{
   
// })
console.log("hello world");