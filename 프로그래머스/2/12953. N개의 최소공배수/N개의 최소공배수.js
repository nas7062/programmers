function gcd(a,b) {
    let num =1;
    for(let i =Math.min(a,b);i>=2;i--) {
        if(a%i===0 && b%i===0)
            return i;
    }
    return num;
}
function lcd(a,b) {
    return a*b /gcd(a,b) ; 
}
function solution(arr) {
    var answer = 1;
    for(let i =0;i<arr.length;i++) {
        answer=lcd(answer,arr[i]);
    }
    return answer;
}