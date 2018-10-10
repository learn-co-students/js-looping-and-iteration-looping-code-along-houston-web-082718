// Code your solutions in this file
function printBadges(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
    }
    return arr;
}

function tailsNeverFails() {
    let isTails = true;
    let numberOfTails = 0
    while (isTails) {
        flip = Math.random();
        if (flip >= 0.5) {
            numberOfTails++;
        } else {
            isTails = false;
        }
    }
    return `You got ${numberOfTails} tails in a row!`;
}