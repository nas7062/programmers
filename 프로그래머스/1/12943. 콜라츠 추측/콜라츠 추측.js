function solution(num) {
    var answer = 0;
    let n = num;    

    while(n!==1) {
        if(answer >500) 
            return -1;
        if(n%2) 
            n = n*3 +1;
        else 
            n/=2;
        answer++;
        
    }
    return answer;
}