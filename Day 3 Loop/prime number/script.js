/*
    1. You have to check if the number is prime or not  

    Handle all the edge cases
        1. if user cancel the prompt
        2. if user input string
        3. if user input 0 or negative number

    hint : 1 is not a prime number

*/

let input = prompt("kaha tak add karwaoge");

if (input == null) {
  console.log(`prompt cancelled`);
} else {
  let num = Number(input);
  if (isNaN(num)) {
    console.log(`invalid input`);
  } else {
    if (num > 0) {
      console.log(isPrime(num));
    } else {
      console.log(`number should greater than 0`);
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false; // prime number starts from 0
  if (n == 2) return true; // 2 is the only even prime number
  if (n % 2 == 0) return false; // if the number is even then it can't be prime
  for (let n = 3; n <= Math.floor(Math.sqrt(n)); i += 2) {
    // as we check till 2 i tsrts from 3 and increment with 2 in each iteration to ommit even value
    if (n % i === 0) return false;
  }
  return true;
}



// if a number cant divisible by its square root then it never divisible by any number bigger than that squareroot