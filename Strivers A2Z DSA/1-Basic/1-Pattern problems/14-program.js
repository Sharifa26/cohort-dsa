/**
 * Write a program to print the following pattern:
 * Examples:

Input Format: N = 3
Result: 
A
A B
A B C

Input Format: N = 6
Result:   
A
A B
A B C
A B C D
A B C D E
A B C D E F

 */

let n=3;

for(let i=0;i<n;i++){
    for(let ch=65;ch<=65+i;ch++){
        process.stdout.write(String.fromCharCode(ch)+" ");
    }
    console.log('');
}