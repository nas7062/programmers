function solution(array, n) {
    var answer = 0;
    array= array.sort((a,b)=>a-b);
    let absArr =array.map((item)=>Math.abs(item-n));
    let num = absArr.indexOf(Math.min(...absArr));
    return array[num];
}