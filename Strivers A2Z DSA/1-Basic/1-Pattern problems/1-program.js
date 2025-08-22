/**
 * Print the following pattern for the given N number of rows.
 * Examples:

Example 1:
Input: N = 3
Output: 
* * *
* * *
* * *


Example 2:
Input: N = 6
Output:
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
 */

const N = 7;
for(let i=0;i<N;i++){
    for (let j=0;j<N;j++){
        process.stdout.write("* ");
    }
    console.log("");
}