/**
 * print the following pattern
 * 
 * Examples:

Input Format: N = 3
Result: 
1    1
12  21
123321

Input Format: N = 6
Result:   
1          1
12        21
12       321
1234    4321
12345  54321
123456654321
 */


let n=4;
let space = 2*(n-1)
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j+"");
    }
    for(let j=1;j<=space;j++){
        process.stdout.write(" ");
    }
    for (let j = i; j >= 1; j--) {
        process.stdout.write(j+"");
    }
    console.log("");
    space = space - 2;
}