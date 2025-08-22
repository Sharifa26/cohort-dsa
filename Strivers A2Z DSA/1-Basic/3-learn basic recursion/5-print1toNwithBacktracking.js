/** print 1 to N with Backtracking. */

function f(n){
    if(n<1) return;
    f(n-1);
    console.log(n);
}

f(10)