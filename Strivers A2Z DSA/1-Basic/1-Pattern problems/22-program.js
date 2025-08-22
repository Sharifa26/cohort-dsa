/**
 * print the following pattern
 * 
 * Input Format: N = 3
Result: 
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3

Input Format: N = 6
Result:   
6 6 6 6 6 6 6 6 6 6 6 
6 5 5 5 5 5 5 5 5 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 2 1 2 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 5 5 5 5 5 5 5 5 6 
6 6 6 6 6 6 6 6 6 6 6
 */


let n =3;

for(let i=0;i<2*n-1;i++){
    for(let j=0;j<2*n-1;j++){
        let top =i;
        let left =j;
        let right =(2*n -2)-j;
        let bottom =(2*n -2)-i;
        let minDist = Math.min(top, bottom, left, right);
        process.stdout.write((n - minDist) + " ");
    }
    console.log("");
}