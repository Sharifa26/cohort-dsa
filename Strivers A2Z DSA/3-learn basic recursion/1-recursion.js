/** 
 * Recursion - when a function calls itself until a specific condition is met
 */

let cnt = 0;
function f(){
    if(cnt >= 5) return;
    console.log(cnt);
    cnt++;
    f();
}

f();