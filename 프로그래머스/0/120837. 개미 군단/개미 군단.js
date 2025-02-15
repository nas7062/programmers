function solution(hp) {
    var answer = 0;
    while(hp) {
        if(hp >=5) {
            hp-=5;
            answer++;
        }
        else if(hp>=3) {
            hp-=3;
            answer++;
        }
        else{
             hp--;
            answer++;
        }
       
    }
    return answer;
}