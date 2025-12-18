


// function isPalindrome(str){
//     const xyz = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     console.log(xyz);
//     const word = xyz.split("");
//     console.log(word);
//     const rvrs = word.reverse();
//     console.log(rvrs);
//     const newStr = rvrs.join("");
//     console.log(newStr);

// const { use } = require("react");

//     return xyz === newStr;
// }


// let flag = isPalindrome("Madam In Eden, I'm Adam");

// if(flag){
//     console.log("String is palimdrome ");
// }else{
//     console.log("Not palimdrome");
// }



//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   const reversedStr = cleanStr.split("").reverse().join("");

//   return cleanStr===reversedStr;








// function rotateArray(arr, k){

//     k=k%arr.length;

//     let newArr = arr.splice(0,k+1);
//     arr.unshift(...newArr);
//     console.log(arr);

// }





// let car = {
//     brand: "Honda",
//     model: "City",
//     year : 2020,
// }
// console.log(car.brand);
// console.log(car["model"]);



// let movie = {
//   title: "Inception",
//   rating: 8.8
// };
// movie.director = "abnbdsn";
// console.log(movie.director);
// console.log(movie['director']);





// let student = {
//     name: "Deepak",
//     marks: [20,30,50,52],
//     city : "delhi",
// }
// console.log(student.marks[2]);
// console.log(student["marks"][2]);




// let library = {
//   tinametle: "City Library",
//  books : [
//     {
//       title : "THE RISING",
//       author : "Avinav",
//     },
//     {
//       title : "THE SUN RISING",
//       author : "Tanya",
//     },
//     {
//       title : "THE MOON RISING",
//       author : "Denzil",
//     }
//   ]
// };


// console.log(library.books[1].author)




// let user = { name: "Aman", age: 20 };

// let {name, age} = user;

// console.log(name);
// console.log(age);





// let laptop = { brand: "Dell", price: 50000 };
// let {brand: companyName, price: cost}=laptop;
// console.log(companyName);
// console.log(cost);


// let data = {
//   profile: {
//     username: "deepak21",
//     country: "India"
//   }
// };

// let {profile :{username,country}}=data;

// console.log( username, country);



// let car = {
//   engine: {
//     specs: {
//       horsepower: 150,
//       torque: 200
//     }
//   }
// };

// let {engine : {specs : { horsepower, torque}}}=car;

// console.log(horsepower, torque);





// let user = { name: "Aman", age: 20 };
// console.log(Object.keys(user)); // ['name', 'age']
// console.log(Object.values(user)); // ['Aman', 20]
// console.log(Object.entries(user)); // [['name', 'Aman'], ['age', 20]]   


// let library = { books: 10, city: "Delhi", open: true };

// Object.keys(user).forEach((key)=>{
//     if(typeof library[key]==="string"){
//         console.log(key);
//     }
// })




// let laptop = { brand: "HP", price: 50000 };

// let laptop2 = {...laptop, color: "Black"};
// console.log(laptop2);


// let a = { x: 10 };
// let b = { y: 20 };

// let c={...a,...b};
// console.log(c);


// let student = { name: "Ravi", marks: { math: 90 } };

// let student2 = {...student};
// student2.name = "Deepak";
// console.log(student2);

// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { ...obj1 };

// obj2.b.c = 99;

// console.log(obj1.b.c);





// function findNestedValue(obj, path){

//     let keys = path.split(".");

//     let crnt = obj;

//     for(let key of keys){

//     }
// } 


// let data = { user: { profile: { name: "Deepak" } } };
// console.log(findNestedValue(data, "user.profile.name"));







// let str = "deepak";

// function string_copies(str,n) 
// {
//   if(n==0){
//     return " ";
//   }else{
//     return str.repeat(n);
//   }
// }


// console.log(string_copies(str,3));





// class car{
//     constructor(brand,price, model){
//         this.brand=brand;
//         this.price=price;
//         this.model=model;
//     }

//     getInfo(){
//         return `car brand is ${this.brand}, price is ${this.price}, model is ${this.model}`;
//     }
// }


// let myCar1 = new  car("Honda", 20000, "2020");
// let myCar2 = new car("Toyota", 30000, "2021");

// console.log(myCar1.getInfo());
// console.log(myCar2.getInfo());  


// class Student{
//     constructor(name,arr){
//         this.name=name;
//         this.arr=arr;
//     }

//     getAverage(){
//         let sum=0;
//         for(let i=0 ; i<this.arr.length ; i++){
//             sum+=this.arr[i];
//         }
//         return sum;
//     }
// }

// let student1 = new Student("Deepak", [20,30,40]);
// console.log(student1.getAverage());


// class BankAccount{
//     constructor(accountNumber, balance){
//         this.accountNumber=accountNumber;
//         this.balance=balance;
// }

// deposite(amount){
//     this.balance+=amount;
//     console.log("balanced added successfully");
// }

// withdraw(amount){
//     if(amount>this.balance){
//         console.log("Insufficient balance");
//     }else{
//         this.balance-=amount;
//         console.log("withdrawal successful");   
//     }
// }
// }


// let act = new BankAccount("123456", 5000);
// console.log(act.balance);
// console.log(act.deposite(5000));
// console.log(act.withdraw(3000));
// console.log(act.balance);
// console.log(act.withdraw(8000));






// class Vechile{
//     constructor(speed){
//         this.speed=speed;
//     }

//     move(){
//         console.log("Moving");
//     }
// }

// class car extends Vechile{
//     constructor(speed, brand){
//         super(speed);
//         this.brand=brand;
//     }

//     method(){
//         console.log(`This car of brand ${this.brand}`);
//         console.log(`car speed is ${this.speed}`);
//     }
// }






// class Person{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }

//     introduce(){
//         console.log(`Hello my name is ${this.name}, I', ${this.age} year old`);
//     }
// }



// class Student extends Person{
//     constructor(name, age ,marks){
//         super(name,age);
//         this.marks=marks;
//     }

//     showmarks(){
//         console.log(`My marks are ${this.marks}`);
//     }
//  }   



// class Account{
//     constructor(){
//         this.balance=0;
//     }



//     deposit(val){
//         this.balance+=val;
//     }

//     withdraw(val){
//         if(val>this.balance){
//             console.log("Error");
//         }else{
//             this.balance-=val;
//         }
//     }
// }



// class SavingsAccount extends Account {

//     constructor(){
//         super();
//         this.intrestRate=0;
//     }

//     addInterest(val){
//         this.intrestRate=val;
//     }
// }







// class Shape{
//     area(){
//         return "Not defined";
//     }
// }


// class Circle extends Shape{
//     area(radius){
//         return Math.PI*Math.pow(radius,2);
//     }
// }







// class Vehicle{
//     start(){
//         console.log("Vehicle starting");
//     }
// }


// class Bike extends Vehicle{

//     start(){
//         super.start();
//         console.log("Bike started");
//     }
// }


// let myBike = new Bike();
// myBike.start();





// class Employee{
//     constructor(baseeSalary){
//         this.baseeSalary=baseeSalary;
//     }

//     calculateSalary(){
//         return this.baseeSalary;
//     }
// }


// class Developer extends Employee{

//     constructor(baseeSalary, bonus){
//         super(baseeSalary);
//         this.bonus=bonus;
//     }

//     calculateSalary(){
//         return this.baseeSalary + this.bonus;
//     }
// }





// class Converter{
//     constructor(name){
//         this.name=Converter.toUpper(name);

//     }

//     static toUpper(naam){
//         return naam.toUpperCase();
//     }


// }

// let abc = new Converter("deepak");

// console.log(abc.name);
// console.log(Converter.toUpper("avinav"));



// class MathOps{
//     static add(a,b){
//         return a+b;
//     }

//     static subtract(a,b){
//         return a-b;
//     }
// }

// console.log(MathOps.add(4,6));
// console.log(MathOps.subtract(6,8));


// class User{
//     constructor(age){
//         this.age=age;
//     }

//    static isValidAge(age){
//         if(age>18){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }


// let user1 = new User(156);
// console.log(user1.age);
// console.log(User.isValidAge(12));




// class Counter{

//     static count = 0;

//     static increment(){
//         this.count++;
//     }

//     static getCount(){
//         return this.count;
//     }
// }

// Counter.increment();
// Counter.increment();
// console.log(Counter.getCount());



// const str = "i Am deepak Singh chauhan";
// const words = str.trim().split(" ");

// let arr = words.map(word=>{

//     return word.toLowerCase();
// }).join(" ");

// console.log(arr);

// function isValid(phnNUm){
//     let validChars = /^[789][0-9]{9}$/;

//     if(phnNUm.length !== 10 && phnNUm.match(validChars) ){
//         return false;
//     }else{
//         console.log("valid number");
//     }
// }


// console.log(isValid("1234554544567859"));



// let arr = [1, 2, 3, 2, 0, 6, 1, 0, 2, 4, 5];
// console.log(arr.length);
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         unique.push(arr[i]);
//     }
// }

// let count = arr.length - unique.length;

// for (let j = 0; j < count; j++) {
//     unique.push(0);
// }

// console.log(unique);




// let arr = [3, 1, 4, 2];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {

//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }




// let arr1 = [1,1,2,3,3];

// let newArr = [];

// for(let i=0 ; i<arr1.length ; i++){
//     if(!newArr.includes(arr1[i])){
//         newArr.push(arr1[i]);
//     }
// }

// console.log(newArr);




// let arr2 = [0,2,0,5];

// let nonZeroArr = [];

// for(let i=0 ; i<arr2.length ; i++){
//     if(arr2[i] !== 0){
//         nonZeroArr.push(arr2[i]);
//     }
    
// }

// let count = arr2.length-nonZeroArr.length;


// for(let j=0 ; j<count ; j++){
//     nonZeroArr.push(0);
// }

// console.log(nonZeroArr);




// let str = "hello world";


// let cant = str.split(" ");
// let res = [];
// // console.log(cant);

// // for(let i=0; i<cant.length;i++){
// //     res.push(cant[i].split("").reverse().join(""));
// // }
// // console.log(res.join(","));



// for(let word of cant){

//     let first = word[0].toUpperCase();
//     let second  = word.slice(1, word.length);
//     res.push(first + second);
    
// }


// console.log(res.join(" "));








// Longest Word Length

function findLongestWord(str){

    const words  = str.split(" ");
    let maxLength=0;

    // for(let i=0 ; i<words .length ; i++){
    //     if(words [i].length>maxLength){
    //         maxLength=words [i].length;
    //     }
    // }

    for(const item of words ){
        if(item.length>maxLength){
            maxLength=item.length;
        }
    }
    
    return maxLength;
}

// “Hi everyone, in this video I’ll explain why we can use the for...of loop instead of a traditional for loop in JavaScript.”

// “First of all, the biggest advantage of for...of is readability.
// With for...of, we directly work with values, not indexes, so the code becomes easier to understand.”

// “For example, instead of managing the index manually and writing conditions like i < length, for...of lets us focus only on the actual data we want to process.”

// “Another benefit is that it reduces errors.
// In a normal for loop, it’s easy to make mistakes like using <= instead of <, which can cause logical bugs.
// With for...of, these index-related errors don’t happen.”

// “for...of also requires less code.
// There’s no counter variable, no increment statement, and no boundary condition.
// This makes the code cleaner and easier to maintain.”

// “Another important point is that for...of works with any iterable, like arrays, strings, sets, and maps.
// So it’s very flexible in modern JavaScript.”





// Title Case

function titleCase(str){

    let  words = str.split(" ").map(item =>
        item[0].toUpperCase() + item.slice(1)
    ).join(" ");

    return words;

   
}

// console.log(titleCase("My name is Deepak"))


// “In my approach, I use the map() method instead.
// map() is designed for transforming data, so it makes the intent of the code much clearer.”

// “With map(), I don’t have to manage indexes or worry about loop conditions.
// Each word is transformed and returned directly.”

// “Both approaches have the same time and space complexity, but the map() version is more readable, safer, and follows modern JavaScript practices.”

// “So overall, the map() approach is cleaner and easier to maintain, especially in real-world applications.”






// Count Occurrences of a Character

function countOccurrences(str, char){
    // let count = 0;

    // for(let ch of str){
    //     if(char.includes(ch)){
    //         count++;
    //     }
    // }

    // return count;

    return str.split(char).length - 1;
}

// console.log(countOccurrences("My name is Deepak", "e"));





// Shopping Cart Total

function calculateTotal(arr){
    let total = 0;

    for(let key in arr){
        total = arr.price *arr.quantity;   // Wrong retry tommrow
    }

    return total;
}

const cart1 = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Headphones", price: 50, quantity: 4 },
];

// console.log(calculateTotal(cart1));


function greaterVal(arr){    // In this question we have to check the first value So we used find() method here not forEach
    let greaterValue = arr[0];
    arr.forEach(element => {
        if(element>greaterValue){ 
            greaterValue=element;
        }
    });

    return greaterValue;
}


console.log(greaterVal( [1, 2, 3, 100, 30, 20]));