/**
 * print the following pattern
 * Examples:

Input Format: N = 3
Result: 
C
B C
A B C

Input Format: N = 6
Result:   
F
E F
D E F
C D E F
B C D E F
A B C D E F
 */

let n=3;
let ch= 65+n-1;

for(let i=0;i<n;i++){
    for( let j=ch-i;j<=ch;j++){
        process.stdout.write(String.fromCharCode(j)+"");
    }
    console.log("");
    
}

// reverse the pattern
console.log("reverse the pattern");
for(let i=0;i<n;i++){
    for(let j=ch;j>=ch-i;j--){
        process.stdout.write(String.fromCharCode(j)+"");
    }
    console.log("");
}
