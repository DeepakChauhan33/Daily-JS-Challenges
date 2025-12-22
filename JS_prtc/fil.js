

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

    console.log(str.split(char));
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

            default:
                newArr.push(String(i));
        }

    }

    return newArr;

}

console.log(fizzBuzz(12));




// Prime Numbers

function findPrimes(n) {

    const primeArr = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeArr.push(i);
        }
    }

    return primeArr;
}


console.log(findPrimes(20));






// Character Reversal

function reverseString(str) {

    let strArr = str.split(" ").reverse().map(item => {
        return item.split("").reverse().join("");
    }).join(" ");

    return strArr;
}

reverseString("AlmaBetter University");



// Sign of Product

function signOfProduct(nums) {

    let negativeCount = 0;

    for (const elem of nums) {
        if (elem === 0) {
            return 0;
        }
        if (elem < 0) {
            negativeCount++;
        }

    }


    return negativeCount % 2 === 0 ? 1 : -1;
}


console.log(signOfProduct([56, -3, -5, -4]));




// Check Sign


function checkSign(num1, num2, num3) {

    let arr = [num1, num2, num3];
    let signArr = arr.map(num => {
        if (num > 0) {
            return "+";
        } else {
            return "-";
        }
    })

    return signArr.join("");

}

console.log(checkSign(-2, -5, 8));


// URL Slug Generator

function generateSlug(title) {


    // return title.trim().toLowerCase().replaceAll(" ", "-")+".com";

    return title.trim().toLowerCase().replaceAll(/\s+/g, "-") + ".com";
}

console.log(generateSlug("AlmaBetter     Web Dev"))




// Shortest Word Distance

function shortestDistance(wordsDict, word1, word2) {

    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            index1 = i;
        }
        if (wordsDict[i] === word2) {
            index2 = i;
        }

        if (index1 !== -1 && index2 !== -1) {
            const distance = Math.abs(index1 - index2);
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
    }

    return minDistance;
}

const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict, "coding", "makes")); // Output: 1
console.log(shortestDistance(wordsDict, "practice", "perfect")); // Output: 1



// Flip Game

function findMove(s) {

    const result = [];

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "+" && s[i + 1] === "+") {
            const newMove = s.slice(0, i) + "--" + s.slice(i + 2);
            result.push(newMove);
        }
    }

    return result;
}

console.log(findMove("++-++"));


// Swap Consecutive Characters


function swapConsecutiveCharacters(str) {

    let result = "";

    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            result += str[i + 1] + str[i];
        } else {
            result += str[i];
        }
    }

    return result;
}


console.log(swapConsecutiveCharacters("Deepka"));


// Array Intersection

function arrayIntersection(array1, array2) {

    // const commonArr = [];
    // for(const item of array1){
    //     if(array2.includes(item) && !commonArr.includes(item)){
    //         commonArr.push(item);
    //     }
    // }
    // return commonArr;

    const setArr = new Set(array2);
    const commonArr = new Set();

    for (const item of array1) {
        if (setArr.has(item)) {
            commonArr.add(item);
        }
    }

    return [...commonArr];

}

console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));





// Insert 7

function insert7(inputString) {

    let count = 0;
    let result = "";

    for (let char of inputString) {
        result += char;

        if (char !== " ") {
            count++;
        }

        if (count === 6) {
            result += "7";
            count = 0;
        }
    }

    return result;

}


console.log(insert7("Hello World and Universe!"));