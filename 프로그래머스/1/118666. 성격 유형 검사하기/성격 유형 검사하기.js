function solution(survey, choices) {
    var answer = '';
    let types ={R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0};
    survey.forEach((item,idx)=> {
        let [a,b] =item.split('');
        let num = Math.abs(choices[idx]-4);
        if(choices[idx] >4) {
            types[b]+=num;
        }
        else {
            types[a]+=num;
        }
    })
    let type = Object.keys(types);
    for(let i=0;i<type.length;i+=2) {
        let left = types[type[i]];
        let right = types[type[i+1]]
        if(left>=right)
            answer+=type[i];
        else 
            answer+=type[i+1];
    }
    return answer;
}