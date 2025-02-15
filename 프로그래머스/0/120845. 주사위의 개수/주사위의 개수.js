function solution(box, n) {
    return box.map((item)=>Math.floor(item/n)).reduce((a,b)=>a *b,1);
}