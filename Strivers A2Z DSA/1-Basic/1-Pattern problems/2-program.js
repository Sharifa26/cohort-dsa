/**
 * print the following pattern for the given N number of rows.
 * 
 * Examples:

Input Format: N = 3
Result: 
* 
* * 
* * *

Input Format: N = 6
Result:
* 
* * 
* * *
* * * *
* * * * *
* * * * * *
 */

const N=2;
for(let i=1;i<=N;i++){
    for(j=1;j<=i;j++){
        process.stdout.write("* ");
    }
    console.log("");
    
}