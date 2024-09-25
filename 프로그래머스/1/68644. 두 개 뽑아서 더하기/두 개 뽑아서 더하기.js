function solution(numbers) {
    var answer = [];
    numbers= numbers.sort((a,b)=>a-b);
    for(let i =0;i<numbers.length-1;i++)
        {
            for(let j =i+1;j<numbers.length;j++)
                {
                    let sum =numbers[i]+numbers[j];
                    answer.push(sum);
                }
        }
    return answer.sort((a,b)=>a-b).filter((item,idx)=>answer.indexOf(item)===idx);
}