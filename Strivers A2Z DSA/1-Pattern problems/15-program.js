/**
 * Write a program to print the following pattern:
 * Examples:

Input Format: N = 3
Result: 
A B C
A B
A

Input Format: N = 6
Result:   
A B C D E F
A B C D E 
A B C D
A B C
A B
A
 */

let n=6;
let ch=65;
for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){ 
        process.stdout.write(String.fromCharCode(ch+j)+" ");
    }
    console.log("");
}