/*
    1. Valid Voter

    we have to write a program where you have to accept age ( number ) from user and check wheather they should eligible or not for voting

*/

let ans  = Number(prompt("what is your age ?"));

if(isNaN(ans)){
    console.log(`invalid input . please give number in input !`);
}else if(ans>=18){
    console.log(`You are eligible to vote`);
}else{
    console.log(`you are not eligible to vote`);
}

/*
-------------------------------------------------------------------------
here in first condition we can check that if (ans === NaN) , but why we not use it because in js if we  compare (NaN === NaN) it will return false , so there is a inbuilt method named as isNaN() 

isNaN(NaN) = true
isNaN(anything rather than NaN) =  false
--------------------------------------------------------------------------
*/

