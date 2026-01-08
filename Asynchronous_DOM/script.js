
// PRATICE QUESTIONS ON PROMISES

// const promise = new Promise((resolve, reject)=>{

//     let success = true;

//     if(success){
//         resolve("ok");
//     }else{
//         reject("error");
//     }
// })


// promise.then((result)=>{
//     console.log(result);
//     return result;
// })
// .then((val)=>{
//     console.log(val);
// })
// .catch((err)=>{
//     console.log(err);
// });


// function CheckAge(age){

//     return new Promise((resolve, reject)=>{

//         if(age>=18){
//             return resolve("You are eligible");
//         }else{
//             return reject("You are not eligible");
//         }
//     })
// }


// CheckAge(20)
// .then(msg=>console.log(msg))
// .catch(err=>console.log(err));


//  LECTURE QUESTION


// Task 
// function fetchNumber() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });


// }


// fetchNumber()
//     .then((num)=>console.log(num*2))
//     .catch((err)=>console.log(err));




// async function getNumber(){

//     try{ 
//         const num = await fetchNumber();
//         console.log(num);
//         console.log(num+5);
//     }catch(err){
//         console.log(err);
//     }
// }

// getNumber();



// async function fetchNumber() {

//   let promise =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });

//   try{
//     const val = await promise;
//     console.log(val);
//   }catch(err){
//     console.log(err);
//   }

// }

// fetchNumber();




// PROMISE PRATICE

// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Hello Promise")
//     }, 2000)
// })


// promise.then((msg) => console.log(msg))
//     .catch((err) => console.log(err))

// let promise2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         reject("Promise rejected")
//     }, 1000)
// });



// let promise3 = new Promise((resolve, reject) => {

//     return resolve(5);
// })


// promise3
//     .then((val) => {

//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(val);
//                 resolve(val * 2);
//             })
//         },1000)
//     })
//     .then((val) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(val);
//                 resolve(val * 3);
//             },2000)
//         })
//     }).then((val) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(val);
//                 resolve(val * 3);
//             },3000)
//         })
//     })
//     .catch((err) => console.log(err));


// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if(num>10){
//         resolve("Number is Big")
//     }else{
//         reject("Number is small")
//     }
//   });
// }


// checkNumber(80)
// .then((res)=>console.log(res))
// .catch((err)=> console.log(err));


// const promise = new Promise((resolve, reject) => {

//     return resolve(10);
// })

// // promise.then((num)=> num*2)
// // .then((num)=>num+3)
// // .then((num)=>console.log(num))


// promise.then(()=>{
//     throw new Error("Something went wrong");
// })
// .catch((err)=>{console.log(err)
//     return "Recovered"
// })
// .then((msg)=>{
//     console.log(msg);
// })


// async function calculate(){
//     const num = await promise;
    
//     try{
//         console.log(num*2)
//     }catch{
//         console.log("Error")
//     }
// }


// calculate();

const body = document.querySelector('body');

function createCard(product){


    const box = document.createElement('div');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = product.title;

    const rating = document.createElement('span');
    rating.textContent=product.rating;




    box.appendChild(cardTitle);
    box.appendChild(rating)

    return box;
}




async function getData(){
    
    try{
        const res = await axios.get("https://dummyjson.com/products");
        const productList = res.data.products;
        
        productList.forEach(product => {
           body.appendChild(createCard(product));
        });
    }catch(err){
        console.log(err);
    }
}



getData();




