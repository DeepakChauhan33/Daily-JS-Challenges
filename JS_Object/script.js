

let obj = {
    tittle : "Abcd",
    author : "Deepak",
    price : 450
}


console.log(obj.author);


let user = { name: "Aman", age: 24 };

user.city="Dehradun";
user.age=22;
delete user.name;

console.log(user);



let marks = { math: 90, science: 85, english: 88 };

for(let key in marks){
    console.log(key, marks[key])
}


let user2 = { name: "Deepak", age: 25 };

let arr = Object.entries(user2);
console.log(arr);