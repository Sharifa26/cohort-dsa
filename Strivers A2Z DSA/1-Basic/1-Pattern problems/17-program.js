/**
 * print the following pattern
 * 
 * Input Format: N = 3
Result: 
  A  
 ABA 
ABCBA


Input Format: N = 6
Result:   
     A     
    ABA    
   ABCBA   
  ABCDCBA  
 ABCDEDCBA 
ABCDEFEDCBA
 */


let n=6;
for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
       process.stdout.write(" ");
    }
    let ch = 65;
    let breakpoint = Math.floor((2 * i + 1) / 2);
    for(let j=1;j<=2*i+1;j++){
        process.stdout.write(String.fromCharCode(ch)+"");
        if(j<=breakpoint) ch++;
        else ch--;
    }
    for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write(" ");
    }
    console.log("");
    
}