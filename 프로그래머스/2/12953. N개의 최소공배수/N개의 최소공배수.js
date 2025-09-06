function gcd(a,b) {
    if(a <b) {
        for(let i =b;i>=1;i--) {
            if(b%i===0 && a%i===0)
                return i;
        }
    }
    else {
         for(let i =a;i>=1;i--) {
            if(b%i===0 && a%i===0)
                return i;
        }
    }
}
function lcm(a,b) {
    return Math.floor(a * b / gcd(a,b));
}
function solution(arr) {
    var answer = 1;
    let minlcm = 0;
    for(let i=0;i<arr.length-1;i++) {
       let l = lcm(arr[i],arr[i+1]);
        arr[i+1] =l;
        minlcm = Math.max(minlcm,l);
    }
   
    return minlcm ;
}