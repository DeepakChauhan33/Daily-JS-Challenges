
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