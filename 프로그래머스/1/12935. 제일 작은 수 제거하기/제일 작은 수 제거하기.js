function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length === 0? [-1] :arr;
}