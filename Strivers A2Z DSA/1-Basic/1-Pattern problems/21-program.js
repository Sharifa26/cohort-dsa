/**
 * print the following pattern
 * 
 * Input Format: N = 3
Result: 
***
* *
***

Input Format: N = 6
Result:   
******
*    *
*    *
*    *
*    *
******
 */

let n=10;

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i==0 || j==0 || i==n-1 || j==n-1){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }
    console.log("");
}