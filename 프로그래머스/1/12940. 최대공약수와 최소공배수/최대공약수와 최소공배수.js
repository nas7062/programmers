
function gcd(a,b) {
    if(a >b) {
        for(let i =b;i>=1;i--) {
            if(a%i===0 && b%i===0)
                return i;
        }
    }
    else {
         for(let i =a;i>=1;i--) {
            if(a%i===0 && b%i===0)
                return i;
        }
    }
}

function lcm(a,b) {
    return a*b/gcd(a,b);
}

function solution(n, m) {
    var answer = [];
    let g = gcd(n,m);
    let l = lcm(n,m);
    return [g,l];
}