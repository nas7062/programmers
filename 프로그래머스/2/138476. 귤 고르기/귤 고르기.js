function solution(k, tangerine) {
    var answer = 0;
    let size={};
    tangerine.forEach((item)=>size[item] ? size[item]++ :size[item]=1);
    let cnt  =Object.values(size);
    cnt.sort((a,b)=>b-a);
    let sum =0;
    for(let c of cnt) {
        sum+=c;
        answer++;
        if(sum>=k)
            break;
    }
    return answer;
}