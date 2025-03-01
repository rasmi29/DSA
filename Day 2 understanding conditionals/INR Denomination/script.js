/*

    |----------------------------------------------------------------------------------------------------|
    
    4. INR Denomination

    Write a program that takes an amount in Indian Rupees (INR) as input and calculates the minimum number of currency notes required to make up that amount. The available denominations are ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, and ₹1. The program should determine the count of each denomination needed to represent the given amount using the least number of notes and coins.

    |----------------------------------------------------------------------------------------------------|
    
*/

    let amount = Number(prompt("enter total amount"));

    if(isNaN(amount)){
        console.log(`enter valid number`);
    }else {
        if(amount >= 500){
            console.log(`500 rupee notes are : ${Math.floor(amount/500)}`);
            amount = amount % 500;            
        }
        if(amount >= 200){
            console.log(`200 rupee notes are : ${Math.floor(amount/200)}`);
            amount = amount % 200;            
        }
        if(amount >= 100){
            console.log(`100 rupee notes are : ${Math.floor(amount/100)}`);
            amount = amount % 100;            
        }
        if(amount >= 50){
            console.log(`50 rupee notes are : ${Math.floor(amount/50)}`);
            amount = amount % 50;            
        }
        if(amount >= 20){
            console.log(`20 rupee notes are : ${Math.floor(amount/20)}`);
            amount = amount % 20;            
        }
        if(amount >= 10){
            console.log(`10 rupee notes are : ${Math.floor(amount/10)}`);
            amount = amount % 10;            
        }
        if(amount >= 5){
            console.log(`5 rupee notes are : ${Math.floor(amount/5)}`);
            amount = amount % 5;            
        }
        if(amount >= 2){
            console.log(`2 rupee notes are : ${Math.floor(amount/2)}`);
            amount = amount % 2;            
        }
        if(amount >= 1){
            console.log(`1 rupee notes are : ${Math.floor(amount/1)}`);
            amount = amount % 1;            
        }
    }