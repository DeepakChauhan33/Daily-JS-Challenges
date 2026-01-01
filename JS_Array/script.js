
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

// let arr5 = [1, 2, 3, 4, 5].reduce((acc, crr)=>{
//     return acc+crr;
// },0)

// console.log(arr5);

// let arr6 = [3, 7, 2, 9, 4].reduce((acc, crr)=>{
//     return acc>crr? acc : crr;
// })

// console.log (arr6);


// let arr7 = [1, 2, 2, 3, 4, 4, 5].reduce((acc=[], crr)=>{
//     if(!acc.includes(crr)){
//         acc.push(crr)
//     }
// },arr7[0])




// Checking for if all the property values(firstName) in an array of object is same or not
// array of object

let arr8 = [
    {
        firstName: 'alina',
        id: 1,
        age: 12
    }, {
        firstName: 'harry',
        id: 2,
        age: 12
    }, {
        firstName: 'alina',
        id: 3,
        age: 12
    }
]


// Using Reduce 

let isSame = arr8.reduce((acc, crr)=>{
    return acc && acc.firstName===crr.firstName;
}, true);

console.log(isSame);



// Using Every

let isSame2 = arr8.every(val=>{
    arr8[0]===val.firstName
})

console.log(isSame2);


// 2. Get the value of the first element in an array that has value greater than 20.

let  arr9 = [1, 2, 3, 10, 30, 20];

let greaterVal = arr9.find(val=> val>20);
let lessVal = arr9.find(val=>val<20);

console.log(greaterVal);
console.log(lessVal)



// Filter data based on a id(property) in an array of objects: pick id value (2)

let resArr = arr8.filter(val=>val.id===2);
console.log(resArr);


//  Get all the person name based on age greater than and equal to 18, eligible to vote


let person =  [{
    firstName: 'joe',
    age: 24
}, {
    firstName: 'alina',
    age: 12
},
{
    firstName: 'alex',
    age: 20
}
]


let isVote = person.filter(val=>val.age>=18)

console.log(isVote);





// 6. Check element is odd or even in an array. 


let numsArr = [90, 89, 56, 45];

let oddEven = numsArr.map(val=>{
    return val%2===0? "Even":"Odd";
})


console.log(oddEven);



// reduce method: Sum all the elements of an array 


let Arr = [90, 89, 56, 45];

let sum = Arr.reduce((acc, crr)=>{
    return acc+=crr;
},0)


console.log(sum);


// Sum of all the salaries and display final sum value: reduce method


let salaries = [{
    salary: 56000,
    id: 1
},
{
    salary: 90000,
    id: 2
}]


let totalsalary = salaries.reduce((acc, crr)=>{
    return acc+crr.salary;
},0)

console.log(totalsalary);



// Concatenation of all array elemets. ['pink', 'blue', 'green', 'red']: 'pinkbluegreenred'

let color = ['pink', 'blue', 'green', 'red'];

