/*
    1. You have to calculate the sum of digits of a number 

    Handle all the edge cases
        1. if user cancel the prompt
        2. if user input string
        3. if user input 0 or negative number

*/

let input = prompt("enter a number");

if (input == null) {
  console.log(`prompt cancelled`);
} else {
  let num = Number(input);
  if (isNaN(num)) {
    console.log(`invalid input`);
  } else {
    if (num > 0) {
      console.log(sumOfDigit(input));
    } else {
      console.log(`number should greater than 0`);
    }
  }
}

function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    let temp = num % 10;
    sum += temp;
    num = Math.floor(num/10);
  }
  return sum;
}
