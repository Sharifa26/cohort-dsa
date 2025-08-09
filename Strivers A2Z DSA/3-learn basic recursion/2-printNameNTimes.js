/** print name 5 times */
let cur = 1;
let n=5;
function print(n){
    if(cur > n) 
        return;
    console.log('sharifa');
    cur++;
    print(n)
}

print(n)