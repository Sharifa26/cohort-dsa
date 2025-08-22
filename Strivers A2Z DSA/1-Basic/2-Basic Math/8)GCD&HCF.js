/**
 * Find the Greatest Common Divisor (GCD) of two numbers.
 * 
 * Example 1:
    Input:N1 = 9, N2 = 12
    
    
    Output:3
    Explanation:Factors of 9: 1, 3 and 9
    Factors of 12: 1, 2, 3, 4, 6, 12
    Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.



                    
    Example 2:
    Input:N1 = 20, N2 = 15
    
    
    Output: 5
    Explanation:Factors of 20: 1, 2, 4, 5
    Factors of 15: 1, 3, 5
    Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.
 */
let hcf =0;

function gcd(n1, n2) {
    for(let i=1;i<=Math.min(n1,n2);i++){
        if(n1%i == 0 && n2%i == 0){
            hcf = i;
        }
    }
    return hcf;
}

function optimsedGCD(n1, n2) {
    for(let i=Math.min(n1,n2);i>=1;i--){
        if(n1%i == 0 && n2%i == 0){
            console.log(i);
            break;
        }

    }
}


// Euclidean Algorithm

function euclideanAlgorithm(a,b) {
    while(a > 0 && b > 0){
        if(a > b) a = a % b;
        else b = b % a;
    }
    if(a == 0) return b;
    return a;
}


console.log(euclideanAlgorithm(11,20));
