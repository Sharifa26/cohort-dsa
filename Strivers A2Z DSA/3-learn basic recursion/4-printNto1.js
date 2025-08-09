/** print N to 1 */

function f(n){
    if(n<1) return;
    console.log(n);
    f(n-1);
}

f(7);