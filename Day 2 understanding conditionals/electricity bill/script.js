/*
    2. Electricity Bill

    Write a program to calculate the electricity bill based on the number of units consumed. The billing rates are as follows: for consumption up to 50 units, the rate is ₹3.5 per unit; for 51 to 150 units, the rate is ₹5 per unit; for 151 to 300 units, the rate is ₹7 per unit; and for consumption above 300 units, the rate is ₹10 per unit. The program should take the total units consumed as input, apply the appropriate rates based on the given slab, and compute the final bill amount.


    |--------------------------------------|
    |      Unit        ||       price      |
    |    up to 100     ||   Rs. 4 /unit    |
    |    101 - 200     ||   Rs. 6 /unit    |
    |    201 - 400     ||   Rs. 8 /unit    |
    |  more than 400   ||   Rs. 13 /unit   |
    |--------------------------------------|

    hint - use bottom up approach
    
*/


    let amount = Number(prompt("enter electricity unit"));

    if(isNaN(amount)){
        console.log(`enter valid number`);
    }else if(amount > 400){
        let total = (amount-400)*13 + 200*8 + 100*6 +100*4;  
    }else if(amount > 200 && amount<=400){
        let total = (amount-200)*8 + 100*6 +100*4;
    }else if(amount > 100 && amount<=200){
        let total = (amount-100)*6 +100*4;
    }else if(amount > 0 && amount<=100){
        let total = (amount-100)*6 +100*4; 
    }else{
        console.log(`enter unit greater than 0`);
    }

    console.log(total);   




