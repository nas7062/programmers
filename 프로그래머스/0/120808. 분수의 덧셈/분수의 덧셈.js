function gcd(a,b) {
    let mini =Math.min(a,b);
    for(let i=mini;i>=2;i--) {
        if(a%i===0 && b%i===0)
            return i;
    }
    return 1;
} // 최대 공약수
function lcd(a,b) {
    return (a*b) / gcd(a,b) || 1;
} // 최소공배수
function solution(numer1, denom1, numer2, denom2) {
    var denom = lcd(denom1,denom2); // 최소공배수 (분모)
    var one = numer1 * Math.floor(denom/denom1);
    var two = numer2 * Math.floor(denom/denom2);
    var sum = one+two;
    if(gcd(sum,denom))
    {
        return [Math.floor(sum/gcd(sum,denom)) ,Math.floor(denom/gcd(sum,denom))];
    }
    return [sum,denom];
}