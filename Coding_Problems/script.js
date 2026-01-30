// You are given a number n. You need to generate and print a pattern based on the given value of n.

// For each row, starting from the first, print numbers in descending order from n down to 1.
// Each number in a row is repeated as many times as the current row index (starting from n).
// Instead of printing each row on a new line, separate rows with -1.
// Instead of a newline at the end of each row, print -1 to indicate row separation. After printing the entire pattern, end the output with -1.




// Print Number Pattern



// Solid Rectangle
function solidRect(n){

    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){

            console.log("*"+" ");

        }
        console.log(" ")

    }
}

solidRect(5);


//  Hollow Rectangle

function hollowRect(a,b){

    for(let i=1; i<=a; i++){
        for(let j=1; j<=b; j++){
            if(i===1 || j===1 || i===a || j===b){
                print("* ")
            }else{
                print(" ")
            }
        }
        console.log(" 1")
    }

}


hollowRect(4,5);





