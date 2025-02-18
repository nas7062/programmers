function solution(score) {
    var answer = [];
    let avgArr= score.map((item)=>item[0]+item[1]);
    let sortedArr = avgArr.slice().sort((a,b)=>b-a);
    return avgArr.map((item,idx)=>sortedArr.indexOf(item)+1);
}