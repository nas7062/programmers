function solution(x) {
    var answer = true;
    var sum = String(x).split("").reduce((a,b)=>a+ +b,0);
    if(x%sum!==0)
        return false; 
   
    return answer;
}