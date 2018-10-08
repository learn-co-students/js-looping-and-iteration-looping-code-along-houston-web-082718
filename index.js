// Code your solutions in this file
let employees = [];

function printBadges(employees) {
  for (let index = 0; index < employees.length; index++) {
    const name = employees[index];
    console.log(`Welcome ${name}! You are employee #${index+1}.`);
  }
  return employees;
}

function tailsNeverFails() {
  let count = 0

  while (Math.random() >= 0.5) {
    count++
  }
  return `You got ${count} tails in a row!`;
}