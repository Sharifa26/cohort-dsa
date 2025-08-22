/**
 * print the following pattern
 * 
 * Input Format: N = 3
Result: 
1
01
101

Input Format: N = 6
Result:   
1
01
101
0101
10101
010101
 */

let n=5;
 for(let i=0;i<n;i++){
    let start;
    if(i % 2 === 0) start=1;
    else start=0;
    for(let j=0;j<=i;j++){
        process.stdout.write(start + " ");
        start=1-start;
    }
    console.log('');
 }