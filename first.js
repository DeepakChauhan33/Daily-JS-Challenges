
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



var buyChoco = function (prices, money) {

    const sortPrices = prices.sort();
    const val = sortPrices[0] + sortPrices[1];
    console.log(val)

    if (money >= val) {
        return money - val;
    } else {
        return money
    }

};


console.log(buyChoco([1, 2, 2], 3))



var searchRange = function (nums, target) {

    const result = [];

    for (let i = 0; i < -nums.length; i++) {

        if (nums[i] === target) {
            result.push(i);
        }

    }


};



const plusOne = function (digits) {

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


    return (Number(digits.join('')) + 1).toString().split('').map(Number);

};


// console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));



function fibo(num) {

    if (num <= 0) {
        return 0;
    }
    if (num === 1) return 1;

    let firstNum = 0;
    let secondNum = 1;
    let i = 0;
    while (i < num) {
        console.log(firstNum);
        console.log(secondNum);
        let third = firstNum + secondNum;
        console.log(third);
    }

}

// fibo(3);



// 0 1 1 2 3 5 8 13 



function arraySign(arr) {


    let positive = 0;
    let negative = 0;
    let zero = false;
    arr.forEach(num => {
        if (num > 0) positive++;
        if (num < 0) negative++;
        if (num === 0) zero = true;


    });

    if (zero) {
        return 0;
    } else if (negative > positive) {
        return -1;
    } else {
        return 1;
    }
    // console.log(`positive : ${positive}  negative : ${negative}  zero : ${zero}`)
}


let sign = arraySign([-1, -2, -3])
console.log(sign);


// Given a set of rectangles, each defined by its width and height, your task is to determine how many rectangles can form the largest possible square. A square can be formed from a rectangle if both its width and height are greater than or equal to the side length of the square.

// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.




var heightChecker = function (heights) {

    let sortedHeight = [...heights].sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeight[i]) {
            count++;
        }
    }

    return count;
};


console.log(heightChecker([1, 1, 4, 2, 1, 3]));