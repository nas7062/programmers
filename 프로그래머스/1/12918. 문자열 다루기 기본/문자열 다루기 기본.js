function solution(s) {
    var answer = true;
    let len = s.length;
  
    if(len ===4 || len ===6) answer= true;
    else answer= false;
     [...s].forEach((ar)=> {
         if(Number.isNaN(Number(ar)) === true) 
             answer=false;
        
    })
    return answer;
}