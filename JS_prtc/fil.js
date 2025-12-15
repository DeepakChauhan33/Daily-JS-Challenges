

// BMI CALACULATOR

function calculateBMI(weight, height){

    if (weight <= 0 || height <= 0) {
    return "Weight(in kg) and height(in meters) must be positive values";
}

    const bmi = weight/(height*height);


    if(bmi<18.5){
        return "Underweight";
    }else if(bmi>=18.5 && bmi<24.9){  // Here it uses or operator instead of and operator
        return "Normal Weight"
    }else if(bmi>=25 && bmi<29.9){ // here also it uses or operator instead of and operator
        return "Over Weight"
    }else{
        return "Obese"
    }
}





// Temperature Converter

function convertTemperature(Temperature, unit){

    if(unit === "C"){
        const fahrenheit = (Temperature * 1.8) + 32; // Using wrong operator 
        return fahrenheit.toFixed(2)+ "°F";
    }else if(unit === "F"){
        const celsius = (Temperature - 32) / 1.8;
        return celsius.toFixed(2)+ "°C";
    }else{
        return "Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}





// Tip Calculator

function calculateTip(bilAmount, tipPercentage){

    const tipAmount = bilAmount*tipPercentage;
    const totalAmount =  bilAmount+tipAmount;

    return Number(totalAmount.toFixed(2));  // It uses small n insted of Capital N
}




// Palindrome Checker

function isPalindrome(str){

    const clnStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();  // Don't use lowecase method
    console.log(clnStr);
    const reversedStr = clnStr.split("").reverse().join("");
    console.log(reversedStr);
    return reversedStr === clnStr;
}





//Vowel Count

function countVowels(str){

    const chngStr = str.toLowerCase();
    const vowels ="aeiou";
    let vowelsCount=0;
    
    for(let char  of chngStr){   // In the ab code they used for loop but their is Wrong loop condition (<=)
        if(vowels.includes(char)){
            vowelsCount++;
        }
    }

    return vowelsCount;
}


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

console.log(titleCase("My name is Deepak"))


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

console.log(countOccurrences("My name is Deepak", "e"));





// Shopping Cart Total

function calculateTotal(arr){
    let total = 0;

    for(let key in arr){
        total = arr.price *arr.quantity;
    }

    return total;
}

const cart1 = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Headphones", price: 50, quantity: 4 },
];

console.log(calculateTotal(cart1));