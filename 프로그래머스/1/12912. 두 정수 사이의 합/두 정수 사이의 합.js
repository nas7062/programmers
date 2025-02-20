function solution(a, b) { //a와 b의 대소관계는 정해져있지 않습니다. 제한 조건
    var answer = 0;
    if(a<b) {
        for(let i =a;i<=b;i++) 
            answer+=i;
    }
    else {
        for(let i =b;i<=a;i++) 
            answer+=i;
    }
    
    return answer;
}