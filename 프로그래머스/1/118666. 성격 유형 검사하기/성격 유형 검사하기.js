
function solution(survey, choices) {
    var answer = '';
    let result = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0};
    for(let i =0;i<choices.length;i++) {
       let num =Math.abs(choices[i]-4);
       const [leftType, rightType] = survey[i].split("");
       if(choices[i] < 4) {
           result[leftType]+=num;
       }
        else{
           result[rightType]+=num;
        }
    }
    
    const type = Object.keys(result);
    
    for(let i =0;i<type.length;i+=2) {
        const leftType =result[type[i]];
        const rightType = result[type[i+1]];
    if (leftType >= rightType) {
      // 같거나 클 때는 왼쪽 요소
      answer += type[i];
    } else {
      // 작은 때는 오른쪽 요소
      answer += type[i + 1];
    }
  } 
    
    return answer;
}