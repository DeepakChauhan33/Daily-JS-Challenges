


// function sayHello(naam){
//     console.log("Hello "+ naam);
// }

// setTimeout(sayHello,3000, "Dia");



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
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 || bmi < 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 || bmi < 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
}

// Do not modify the below lines

console.log(calculateBMI(60,1.95))