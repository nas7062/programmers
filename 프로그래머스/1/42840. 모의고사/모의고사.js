function solution(answers) {
    var answer = []; 
    let a=0;
    let b=0;
    let c=0;
    const one =[1,2,3,4,5]; // 반복 패턴 
    const two =[2,1,2,3,2,4,2,5];// 반복 패턴
    const three =[3,3,1,1,2,2,4,4,5,5];// 반복 패턴
    for(let i=0;i<answers.length;i++) {
        if(answers[i]===one[i%one.length]) 
            a++;
        if(answers[i]===two[i%two.length])
            b++;
        if(answers[i]===three[i%three.length])
            c++;
    }
    let maxi =Math.max(a,Math.max(b,c)); // a,b,c를 비교해 최댓값
    if(maxi ===a) // 최댓값이랑 같다면 answer에 push
        answer.push(1);
    if(maxi===b)
        answer.push(2);
    if(maxi===c)
        answer.push(3);
    return answer;
}