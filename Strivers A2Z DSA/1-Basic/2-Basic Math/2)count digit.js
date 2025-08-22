// count the number of digits in a number
/**
 * Problem statement
You are given a number 'n'.



Return number of digits in ‘n’.



Example:
Input: 'n' = 123

Output: 3

Explanation:
The 3 digits in ‘123’ are 1, 2 and 3. 
 */

let num = 12345;
let count = 0;

while(num > 0){
    //get the last digit
    count++;

    //remove the last digit
    num = Math.floor(num / 10);
}
console.log(count);
