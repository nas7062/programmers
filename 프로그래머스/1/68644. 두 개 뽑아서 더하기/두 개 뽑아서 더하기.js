function solution(numbers) {
    var answer = [];
    let len=  numbers.length;
    numbers.sort((a,b)=>a-b);
    for(let i =0;i<len-1;i++) {
        for(let j=i+1;j<len;j++){
            let sum =numbers[i]+numbers[j];
            answer.push(sum);
        }   
    }
    let set = [...new Set(answer)];   
    return set.sort((a,b)=>a-b);
}