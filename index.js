// Code your solutions in this file

//function named printBadges() that accepts one argument, an array of employee names. 
function printBadges(array) {
    //Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
    //The condition should halt the for loop after the last name in the array is printed out in the loop body.
    for (let i = 0; i < array.length; i++) {
        //Inside the loop, use console.log() to print out a badge for each employee
        console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
    }
    //After the loop completes, have the function return the original array.
    return array;
}

//function named tailsNeverFails() that takes no arguments. 
function tailsNeverFails() {
    let tailsStreak = 0;
    //In the function body, use a while loop with a condition that simulates a coin flip 
    //(two equally likely outcomes).
    while (Math.random() >= 0.5) {
        tailsStreak++;
        //If the Math.random() evaluates to greater than or equal to 0.5, the coin landed on 'Tails' 
        //and is flipped again. If the Math.random() evaluates to less than 0.5, the coin landed on 'Heads', 
        //and the 'Tails' streak is broken. 
    }
    //At the end of the function, return a message to the user indicating how many times the coin landed on 
    //'Tails' in a row
    return `You got ${tailsStreak} tails in a row!`;
}




