function solution(ingredient) {
    var answer = 0;
    let arr ="1231";
    let result= [];
    for(let ing of ingredient) {
        result.push(ing)
        if(result.length >=4 ) {
            if(result.slice(-4).join('') ===arr) {
            result.splice(-4,4);
            answer++;
        }
        }
        
    }
   
    return answer;
}