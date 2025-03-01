/*
    2. Shop Discount

    Write a program to calculate the final price of a shopping cart after applying a discount based on the total amount. If the total is between ₹0 and ₹5000, no discount is applied (0%). For amounts between ₹5001 and ₹7000, a 5% discount is given, while amounts between ₹7001 and ₹9000 receive a 10% discount. If the total exceeds ₹9000, a 20% discount is applied. The program should take the total cart amount as input and compute the final price after applying the appropriate discount.


  |---------------------------------|
  |     Amount       ||   Discount  |
  |    0 - 5000      ||    0%       |
  |   5001 - 7000    ||    5%       |
  |   7001 - 9000    ||    10%      |
  |  more than 9000  ||    20%      |
  |---------------------------------|


*/

/*
------------------------------------------------------------------------------------

    Brute force approach where we write same claculate discount line again and again

------------------------------------------------------------------------------------

    let amount = Number(prompt("what is the total amount"));
    //validation
    if(isNaN(amount)){
        console.log(`enter valid number`);
    }else if(amount>0 && amount<=5000){
        console.log(amount);   
    }else if(amount>5000 && amount<=7000){
        console.log(amount - Math.floor((amount*5)/100));   
    }else if(amount>7000 && amount<=9000){
        console.log(amount - Math.floor((amount*10)/100));   
    }else if(amount>9000){
        console.log(amount - Math.floor((amount*20)/100));   
    }else{
        console.log(`give input greater than 0`)
    }

--------------------------------------------------------------------------
*/

    let amount = Number(prompt("what is the total amount"));
    let discount = 0;

    if(isNaN(amount)){
        console.log(`enter valid number`);
    }else if(amount>0 && amount<=5000){
        discount = 0;   
    }else if(amount>5000 && amount<=7000){
        discount = 5;   
    }else if(amount>7000 && amount<=9000){
        discount = 10;   
    }else if(amount>9000){
        discount = 20;   
    }else{
        console.log(`give input greater than 0`)
    }

    console.log(amount - Math.floor((amount*discount)/100));




