function solution(answers) {
    var answer = [];
    var one = [1,2,3,4,5];
    var two = [2,1,2,3,2,4,2,5];
    var three= [3,3,1,1,2,2,4,4,5,5];
    var result=[0,0,0]
    for(let i=0;i<answers.length;i++)
        {
            if(answers[i]===one[i%5])
                result[0]++;
            if(answers[i]===two[i%8])
             result[1]++;
            if(answers[i]===three[i%10])
                result[2]++;
        }
    
    let maxi = Math.max(result[0],result[1],result[2]);
    if(maxi === result[0])
        answer.push(1);
     if(maxi === result[1])
        answer.push(2);
     if(maxi === result[2])
        answer.push(3);
    return answer;
}