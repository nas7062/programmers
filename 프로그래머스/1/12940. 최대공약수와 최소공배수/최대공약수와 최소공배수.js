function gcd(a,b) {
    if(a>b) {
        for(let i=a;i>=1;i--) {
            if(a%i===0 && b%i===0)
                return i;
        }
    }
    else {
         for(let i=b;i>=1;i--) {
            if(a%i===0 && b%i===0)
                return i;
        }
    }
    return 1;
}

function lcm (a,b) {
    return a*b / gcd(a,b);
}

function solution(n, m) {
    return [gcd(n,m),lcm(n,m)];
}