/**
 * Print the following pattern for the given N number of rows.
 * 
 * Examples:

Input Format: N = 3
Result: 
  *  
  **
  ***  
  **
  *   
Input Format: N = 6
Result:   
     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *
 */

    let n=3;
    for(let i=1;i<=2*n-1;i++){
        let stars = i;
        if(i>n) stars = 2*n-i;
        for(let j=1;j<=stars;j++){
            process.stdout.write("*");
        }
        console.log("");
        
    }