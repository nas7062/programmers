function solution(survey, choices) {
    var answer = '';
    var types = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    for(let i =0;i<choices.length;i++)
        {
            let [left,right] = survey[i].split("");
            let result = Math.abs(choices[i]-4);
            if(choices[i] <4)
               types[left]+=result;
            else if(choices[i]>4)
            types[right]+=result;
        }
    const type = Object.keys(types);
    for(let i =0;i<type.length;i+=2)
        {
            let left = types[type[i]];
            let right = types[type[i+1]];
            if(left >=right)
                answer+=type[i];
            else
                answer+=type[i+1];
        }
    return answer;
}