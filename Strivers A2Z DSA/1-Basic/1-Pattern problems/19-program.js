/**
 * print the following pattern
 * Input Format: N = 3
Result: 
******
**  **
*    *
*    *
**  **
******

Input Format: N = 6
Result:   
************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************
 */

let n=5;
//first space diamond
for(let i=0;i<n;i++){
    //print the stars
    for(let j=0;j<n-i;j++){
        process.stdout.write("*");
    }
    //print the spaces
    for(let j=0;j<2*i;j++){
        process.stdout.write(" ");
    }

    //print the stars
    for (let j = 0; j<n - i; j++) {
        process.stdout.write("*");
    }
    console.log("");
    
}

//second space diamond
for(let i=0;i<n;i++){
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    for (let j = 0; j < 2 * (n - i - 1); j++) {
        process.stdout.write(" ");
    }
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}