
// Array Map Method

let arr = [1,2,3,4,5];

let newArr = arr.map(ele =>{
    return ele*2;
})

console.log(newArr);


let strArr = ["js", "react", "node"];

let newStrArr = strArr.map(ele => {
    return ele.toUpperCase();
})

console.log(newStrArr);


let num = [5, 10, 15];

let numArr = num.map(ele =>{
    return ele+10;
})

console.log(numArr);


let obj = [
  { name: "Deepak", age: 22 },
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 20 }
];

const newObj = obj.map(ele =>{
    return ele.name
})

console.log(newObj);


let numberArr = [1, 2, 3, 4];

const newNumArr = numberArr.map(ele => {
    return `Number-${ele}`
})

console.log(newNumArr);



// Array Filter

let arr1 = [1, 2, 3, 4, 5, 6].filter(num=>num%2===0);
console.log(arr1);


let arr2 = [5, 12, 8, 20, 3, 15].filter(num=>num>=10);
console.log(arr2);

let arr3 = [0, 1, 0, 3, 0, 5].filter(num=>num>0);
console.log(arr3);


let obj1 = [
  { name: "Deepak", age: 22 },
  { name: "Rahul", age: 20 },
  { name: "Amit", age: 25 }
].filter(num=> num.age>=22);

console.log(obj1);

let arr4 = ["js", "react", "node", "javascript", "api"].filter(num=> num.length>4);
console.log(arr4);




// Array Reduce

let arr5 = [1, 2, 3, 4, 5].reduce((acc, crr)=>{
    return acc+crr;
},0)

console.log(arr5);

let arr6 = [3, 7, 2, 9, 4].reduce((acc, crr)=>{
    return acc>crr? acc : crr;
})

console.log (arr6);


let arr7 = [1, 2, 2, 3, 4, 4, 5].reduce((acc=[], crr)=>{
    if(!acc.includes(crr)){
        acc.push(crr)
    }
},arr7[0])
