

// BMI CALACULATOR

function calculateBMI(weight, height) {

    if (weight <= 0 || height <= 0) {
        return "Weight(in kg) and height(in meters) must be positive values";
    }

    const bmi = weight / (height * height);


    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {  // Here it uses or operator instead of and operator
        return "Normal Weight"
    } else if (bmi >= 25 && bmi < 29.9) { // here also it uses or operator instead of and operator
        return "Over Weight"
    } else {
        return "Obese"
    }
}





// Temperature Converter

function convertTemperature(Temperature, unit) {

    if (unit === "C") {
        const fahrenheit = (Temperature * 1.8) + 32; // Using wrong operator 
        return fahrenheit.toFixed(2) + "°F";
    } else if (unit === "F") {
        const celsius = (Temperature - 32) / 1.8;
        return celsius.toFixed(2) + "°C";
    } else {
        return "Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}





// Tip Calculator

function calculateTip(bilAmount, tipPercentage) {

    const tipAmount = bilAmount * tipPercentage;
    const totalAmount = bilAmount + tipAmount;

    return Number(totalAmount.toFixed(2));  // It uses small n insted of Capital N
}




// Palindrome Checker

function isPalindrome(str) {

    const clnStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();  // Don't use lowecase method
    console.log(clnStr);
    const reversedStr = clnStr.split("").reverse().join("");
    console.log(reversedStr);
    return reversedStr === clnStr;
}





//Vowel Count

function countVowels(str) {

    const chngStr = str.toLowerCase();
    const vowels = "aeiou";
    let vowelsCount = 0;

    for (let char of chngStr) {   // In the ab code they used for loop but their is Wrong loop condition (<=)
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}




// Longest Word Length

function findLongestWord(str) {

    const words = str.split(" ");
    let maxLength = 0;

    // for(let i=0 ; i<words .length ; i++){
    //     if(words [i].length>maxLength){
    //         maxLength=words [i].length;
    //     }
    // }

    for (const item of words) {
        if (item.length > maxLength) {
            maxLength = item.length;
        }
    }

    return maxLength;
}





// Title Case

function titleCase(str) {

    let words = str.split(" ").map(item =>
        item[0].toUpperCase() + item.slice(1)
    ).join(" ");

    return words;


}

console.log(titleCase("My name is Deepak"))






// Count Occurrences of a Character

function countOccurrences(str, char) {
    // let count = 0;

    // for(let ch of str){
    //     if(char.includes(ch)){
    //         count++;
    //     }
    // }

    // return count;

    return str.split(char).length - 1;
}

console.log(countOccurrences("My name is Deepak", "e"));





// Shopping Cart Total

function calculateTotal(arr) {


    return arr.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

}


const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
];

console.log(calculateTotal(cart1));







// Fizz Buzz

function fizzBuzz(n) {

    const newArr = [];

    for (let i = 1; i <= n; i++) {

        switch (true) {

            case (i % 3 == 0 && i % 4 === 0):
                newArr.push("FizzBuzz");
                break;

            case (i % 3 == 0):
                newArr.push("Fizz");
                break;

            case (i % 4 == 0):
                newArr.push("Buzz")
                break;

            default :
                newArr.push(String(i));
        }

    }

    return newArr;

}

console.log(fizzBuzz(12));

// Here I have two implementations of FizzBuzz.
// The first uses a classic if-else chain — very straightforward, beginner-friendly, and works perfectly.
// The second version uses a switch(true) statement. At first glance, it may look unusual because normally switch checks for exact values.
// But here, switching on true allows each case to be a boolean condition.
// This makes all decision rules centralized in one block and easy to extend if we want to add new conditions later.
// We also use break to prevent fall-through, and default handles numbers not matching any Fizz/Buzz conditions, converting them to strings for consistency.
// Overall, this version is slightly more advanced, keeps the logic organized, and is easier to maintain when we scale the number of rules."





// Prime Numbers

function findPrimes(n){
    
    const primeArr = [];

    if(n===1){
        return primeArr.push(n);
    }

    for(let i=2 ; i<=n ; i++){
        if(n%i !== 0){
            primeArr.push(i);
        }
    }


    return primeArr;
}


console.log(findPrimes(20));






// Character Reversal

function reverseString(str){

    let strArr = str.split(" ").reverse().map(item =>{
        return item.split("").reverse().join("");
    }).join(" ");

    console.log(strArr);
}

reverseString("AlmaBetter University");




