/**
 * print the first n fibonacci numbers
 * 
 * Examples:

Input Format: N = 3
Result: 
*    *
**  **
******
**  **
*    *


Input Format: N = 6
Result:   
*          *
**        **
***      ***
****    ****
*****  *****
************
*****  *****
****    ****
***      ***
**        **
*          *
 */

let n=6
  let spaces = 2*n-2;

for(let i=1;i<=2*n-1;i++){

    //stars
    let stars = i;
    if(i>n) stars = 2*n-i;
    for(let j=1;j<=stars;j++){
        process.stdout.write("*");
    }

    //spaces
    for(let j=1;j<=spaces;j++){
        process.stdout.write(" ");
    }

    //stars
    for (let j = 1; j <=stars; j++) {
        process.stdout.write("*");
    }
    console.log("");
    if(i<n) spaces -=2;
    else spaces +=2
}