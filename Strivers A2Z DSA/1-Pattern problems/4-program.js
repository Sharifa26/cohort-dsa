/**
 * print the following pattern for the given N number of rows.
 * 
 * Input Format: N = 3
Result: 
1
2 2 
3 3 3

Input Format: N = 6
Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
 */

let n=5;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(i + " ");
    }
    console.log("");
    
} 