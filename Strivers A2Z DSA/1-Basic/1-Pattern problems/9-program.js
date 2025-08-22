/**
 * Print the following pattern for the given N number of rows.
 * 
 * Examples:

Input Format: N = 3
Result: 
  *  
 ***
***** 
*****  
 ***
  *   
Input Format: N = 6
Result:   
     *
    ***
   ***** 
  *******
 *********
***********  
***********
 *********
  *******
   ***** 
    ***    
     *
 */

//this a combine code of 7-program.js and 8-program.js

  let n = 3;
// Upper half of the diamond (including the middle line)
  for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
      process.stdout.write(" ");
    }
    for(let j=0;j<2*i+1;j++){
      process.stdout.write("*");
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log("\n");
  }

  // Lower half of the diamond (excluding the middle line)
  for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
      process.stdout.write(" ");
    }
    for(let j=0;j<2*n-(2*i+1);j++){
      process.stdout.write("*");
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    console.log("");
  }