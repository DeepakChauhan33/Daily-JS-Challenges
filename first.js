
// const majorityElement = function(nums){

//     let count = 0;
//     let candidate = null;

//     for(let num of nums){

//         if(count===0){
//             candidate = num;
//         }

//         count += (num === candidate) ? 1 : -1;
//     }

//     return candidate;
// }




// const makesquare = function(matchsticks){

//     let oddCount = 0;
//     let evenCount = 0;

//     for(let num of matchsticks){
//         if(num%2 === 0){
//             evenCount++;
//         }

//         if(num%2 !== 0){
//             oddCount++;
//         }
//     }

//     if(oddCount%2===0 && )
// }.



var buyChoco = function(prices, money) {
    
    const sortPrices = prices.sort();
    const val = sortPrices[0]+sortPrices[1];
    console.log(val)

    if(money>=val){
        return money-val;
    }else{
        return money
    }
    
};


console.log(buyChoco([1,2,2],3))



var searchRange = function(nums, target){
  
   const result = [];

   for(let i=0; i<-nums.length;i++){

    if(nums[i] === target){
        result.push(i);
    }
    
   }


};



const plusOne = function(digits){
    
    // const n = digits.length;

    // const newArr = [];
    
    // for(let i=0; i<n; i++){
       
    //     if(i===n-1){
    //         let num = digits[i]+1;
    //         newArr.push(num);
    //         console.log(1)
    //     }
    //     else{
    //         newArr.push(digits[i]);
    //         console.log(1)
    //     }
    // }
    
    // return newArr


    return (Number(digits.join(''))+1).toString().split('').map(Number);
    
};


// console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));



function fibo(num){

    if(num <= 0) {
        return 0;
    }
    if(num === 1) return 1;

    let firstNum = 0;
    let secondNum = 1;
    let i=0;
    while(i<num){
        console.log(firstNum);
        console.log(secondNum);
        let third = firstNum+secondNum;
        console.log(third);
    }

}

// fibo(3);



// 0 1 1 2 3 5 8 13 