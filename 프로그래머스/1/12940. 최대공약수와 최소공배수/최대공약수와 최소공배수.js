function gcd(a,b) {
    let num =1;
    let mini = Math.min(a,b);
    for(let i=mini;i>=2;i--) {
        if(a%i===0 && b%i===0)
            return i;
    }
    return num;
}

function lcm(a,b) {
    return a*b /gcd(a,b);
}
function solution(n, m) {
    return [gcd(n,m),lcm(n,m)];
}