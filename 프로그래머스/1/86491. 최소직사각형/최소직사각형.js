function solution(sizes) {
    var answer = 0;
   let maxi = sizes.map((item)=>Math.max(...item));
    let mini =sizes.map((item)=>Math.min(...item));
    return Math.max(...maxi) * Math.max(...mini);
}