function solution(absolutes, signs) {
    let answer =0;
    signs.forEach((item,idx)=>item === true 
    ? answer+=absolutes[idx] : answer-=absolutes[idx]);
    // signs 배열을 돌며 true인것은 더하고 false이면 빼라
    return answer;
}