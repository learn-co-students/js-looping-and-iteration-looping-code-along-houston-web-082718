// Code your solutions in this file
function printBadges(names) {
    for (let counter = 0; counter < names.length; counter++)  {
        console.log(`Welcome ${names[counter]}! You are employee #${counter + 1}.`)
    }
    return names
}

function tailsNeverFails() {
    let tails = 0;
    while (Math.random() >= 0.5) {
        tails++;
    }
    return `You got ${tails} tails in a row!`
}