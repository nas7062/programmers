function solution(absolutes, signs) {
    var answer = 0;
     absolutes.map((item,idx)=>signs[idx]===true ? answer+=item :answer-=item);
    return answer;
}