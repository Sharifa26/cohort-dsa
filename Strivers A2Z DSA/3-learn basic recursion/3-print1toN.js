/** print 1 to n */

const n = 10;

function print(n,c){
    if(c >n) return;
    console.log(c);
    print(n,c+1) 
}

print(n,1)