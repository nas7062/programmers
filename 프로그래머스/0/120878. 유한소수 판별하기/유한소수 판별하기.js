
function gcd(a,b) {
    if(b===0) 
        return a;
    else
        return gcd(b,a%b);
} // 외우시면 됩니다.
function solution(a, b) {
    let g = b/gcd(a,b);
    while(g !==1) {
        if(g%2 ===0) {
            g/=2;
        }
        else if(g%5===0){
            g/=5;
        }
        else{
            return 2;
        }
    }
    return 1;  
} //와이라노 .. 
