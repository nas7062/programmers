function solution(want, number, discount) {
    var answer = 0;
    let numbers = [];
    let count =0;
    for(let i =0;i<=discount.length-10;i++)
    {
        
        numbers =[...number];
        let stuff = discount.slice(i,i+10);
        for(let el of stuff)
            {
                let p = want.indexOf(el);
                if(p === -1)
                    continue;
                if(numbers[p] > 0)
                {
                    numbers[p]--;
                    count++;
                }
            }
        if(count===10)
            answer++;
        count =0;
    }
    
   return answer;
}