/**
 * Print the following pattern for the given N number of rows.
 * 
 * Input Format: N = 3
Result: 
*****  
 ***
  *   
Input Format: N = 6
Result:     
***********
 *********
  *******
   ***** 
    ***    
     *


 */

let n=6;
for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        process.stdout.write(" ");
    }
    for(let j=0;j<2*n-(2*i+1);j++){
        process.stdout.write("*");
    }
    for(let j=0;j<i;j++){
        process.stdout.write(" ");
    }
    console.log("");
}