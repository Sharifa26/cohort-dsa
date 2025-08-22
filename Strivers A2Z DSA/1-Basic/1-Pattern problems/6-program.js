/**
 * Print the following pattern for the given N number of rows.
 * 
Input Format: N = 3
Result: 
1 2 3
1 2
1

Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
 */

let n=6;

for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        process.stdout.write(j+1+" ");
    }
    console.log("");
}