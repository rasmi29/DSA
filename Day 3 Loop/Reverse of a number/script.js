/*
    1. You have to calculate the reverse of a number 

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
      console.log(reverse(input));
    } else {
      console.log(`number should greater than 0`);
    }
  }
}

function reverse(num) {
  let result = 0;
  while (num > 0) {
    let temp = num % 10;
    result = result * 10 + temp;
    num = Math.floor(num/10);
  }
  return result;
}
