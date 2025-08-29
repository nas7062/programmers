function solution(answers) {
    var answer = [0,0,0];
    const one =[1,2,3,4,5];
    const two =[2,1,2,3,2,4,2,5];
    const three=[3,3,1,1,2,2,4,4,5,5];
    
    for(let i =0;i<answers.length;i++) {
        if(one[i%5] === answers[i])
            answer[0]++;
        if(two[i%8] === answers[i])
            answer[1]++;
        if(three[i%10] === answers[i])
            answer[2]++;

    }
    let max= Math.max(...answer);
    console.log(max)
    const result =[];
    for(let i=0;i<answer.length;i++) {
        if(answer[i] ===max) {
            result.push(i+1);
        }
    }
    return result;
}