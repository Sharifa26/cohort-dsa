/**
 * Print all prime numbers between 2 and N (N<=10^6)
 * 
 *    Example 1:
                Input:N = 2
               
                Output:True
                
                Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
                                        
                Example 2:
                Input:N =10                
                
                Output: False
                
                Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10
 */
let start=Date.now();
let cnt = 0;
function isPrime(n) {
    for(let i=1;i<=n;i++){
        if(n%i == 0){
            cnt++;
        }
    }
    console.log(Date.now() - start);
    if(cnt == 2) return true;
    else return false;
    
}

function optimsedPrime(n) {
    let cnt = 0;
    for(let i=1;i*i<=n;i++){
        if(n%i == 0){
            cnt++;
            if(Math.floor(n/i) != i){
                cnt++;
            }
        }
    }
    return cnt == 2;
}

console.log(isPrime(10));
console.log(optimsedPrime(17));
