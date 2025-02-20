
function gcd(a,b) {
    let num =1;
    let mini =Math.min(a,b);
    for(let i =mini;i>=2;i--) {
        if(a%i===0 && b%i===0)
            return i;
    }
    return num;
} // 기약 분수를 만들기 위해 최대공약수를 만들어줌 
function solution(a, b) {
    var answer = 0;
    let g = gcd(a,b); // 최대공약수를 가져옴 
    answer =Math.floor(b/g);
    
    let result = []; 
    let divisor = 2; 
    while (answer >= 2) { 
    if (answer% divisor === 0) { 
      result.push(divisor);
      answer = Math.floor(answer / divisor);
    }
    else divisor++;
  }
  
   //let set =  [...new Set(result)]; 이걸 넣으면 안된다.. 
  let len =result.filter((item)=> item %2===0 || item%5===0).length;
    return len ===result.length ? 1 : 2;
}
