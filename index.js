function printBadges(employees) {
  for (var i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`)
  }
  return employees
}

function tailsNeverFails() {
  i = 0
  while (Math.random() >= 0.5) {
    i++
  }
  return `You got ${i} tails in a row!`
}
