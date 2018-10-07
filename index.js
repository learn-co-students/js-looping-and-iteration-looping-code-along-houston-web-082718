// Code your solutions in this file
function printBadges(name) {
    for (let i = 0; i < name.length; i++) {
    console.log(`Welcome ${name[i]}! You are employee #${i + 1}.`)
        }
    return name
}

function tailsNeverFails(condition) {
    let tails = 0;

    while (Math.random() >= 0.5) {
      tails++;
    }
  
    return `You got ${tails} tails in a row!`;
}