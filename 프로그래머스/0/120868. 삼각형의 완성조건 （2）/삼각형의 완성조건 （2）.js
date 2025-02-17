function solution(sides) {
    var answer = 0;
    sides =sides.sort((a,b)=>b-a);
    let num =0;
    for(let i =sides[0]+1;i<sides[0]+sides[1];i++) {
        answer++;
    }
    for(let i =sides[0]-sides[1]+1;i<=sides[0];i++) {
        answer++;
    }
    return answer;
}