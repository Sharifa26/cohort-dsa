/**
 * Print the following pattern for the given N number of rows.
 * 
 * Input Format: N = 3
Result: 
* * *
* * 
*

Input Format: N = 6
Result:
* * * * * *
* * * * * 
* * * * 
* * * 
* * 
* 


 */

let N=6;
for(let i=0;i<N;i++){
    for(let j=0;j<N-i;j++){
        process.stdout.write("* ");
    }
    console.log("");
}