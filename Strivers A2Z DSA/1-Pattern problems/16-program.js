/**
 * Write a program to print the following pattern:
 * 
 * Input Format: N = 3
Result: 
A
B B
C C C

Input Format: N = 6
Result:   
A 
B B
C C C
D D D D
E E E E E
F F F F F F
 */

let n=3;
let ch=65;
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        process.stdout.write(String.fromCharCode(ch+i)+" ");
    }
    console.log("");
}