function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((sign,i)=> {
        if(sign ===true)
            answer+=absolutes[i];
        else
            answer-=absolutes[i];
    })
    return answer;
}