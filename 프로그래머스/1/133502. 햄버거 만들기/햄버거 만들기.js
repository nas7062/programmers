function solution(ingredient) {
    var answer = 0;
    var stack= [];
    for(let i =0;i<ingredient.length;i++)
        {
            stack.push(ingredient[i]);
            if(stack.slice(-4).join("")==='1231')
            {
                answer++;
                stack.splice(-4);
            }
            
        }
    return answer;
}