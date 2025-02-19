
function gcd(a,b) {
    let mini =Math.min(a,b);
    for(let i =mini;i>=2;i--) {
        if(a%i===0 && b%i===0)
            return i;
    }
}
function solution(a, b) {
    var answer = 0;
    let g = gcd(a,b);
    if(g) 
        answer =Math.floor(b/g);
    else 
        answer= b;
    let result = []; 
    let divisor = 2; 
    while (answer >= 2) { 
    if (answer% divisor === 0) { 
      result.push(divisor);
      answer = Math.floor(answer / divisor);
    }
    else divisor++;
  }
  
  let set =  [...new Set(result)];
  let len =result.filter((item)=> item %2===0 || item%5===0).length;
    return len ===result.length ? 1 : 2;
}
