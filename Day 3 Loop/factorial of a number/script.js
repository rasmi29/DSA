
/*
    1. You have to calculate the factorial of a number 

    Handle all the edge cases
        1. if user cancel the prompt
        2. if user input string
        3. if user input 0 or negative number

*/

let input = prompt("kaha tak add karwaoge");

if (input == null){
    console.log(`prompt cancelled`);
    
}else{
    let num = Number(input);
    if (isNaN(num)) {
        console.log(`invalid input`);
      } else {
        if (num > 0) {
          let fact = 1;
          for (let i = 1; i <= num; i++) {
            fact = fact * i;
          }
          console.log(fact);
        } else {
          console.log(`number should greater than 0`);
        }
      }
      
}

