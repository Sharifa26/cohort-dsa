/**
 * Print the following pattern for the given N number of rows.
 * 
 * Input Format: N = 3
Result: 
1
1 2 
1 2 3

Input Format: N = 6
Result:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
 */


let n = 10;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j + " ");
    }
    console.log("");
}