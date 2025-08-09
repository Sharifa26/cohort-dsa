/**
 * Write a program to print the following pattern:
 * Examples:

Input Format: N = 3
Result: 
1
2 3
4 5 6

Input Format: N = 6
Result:   
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21
 */

let n=6;
let num=1;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(num+" ");
        num++;
    }
    console.log('');
    
}