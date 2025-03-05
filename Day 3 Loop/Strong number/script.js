/*
    1. You have to check if the number is a strong number or not  

    Handle all the edge cases
        1. if user cancel the prompt
        2. if user input string
        3. if user input 0 or negative number

    Hint :- Strong number means if every digit of a number's factorial's sum equal to same number then it is a strong number
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
      console.log(isStrong(num));
    } else {
      console.log(`number should greater than 0`);
    }
  }
}

function isStrong(num) {
  let result = 0;
  let copy = num;
  while (num > 0) {
    let temp = num % 10;
    result = result + factorial(temp);
    num = Math.floor(num/10);
  }
  return (result === copy)
}

function factorial(num){
    let fact = 1;
    for(let i =2 ; i<= num; i++){
        fact = fact * i;
    }
    return fact;
}
