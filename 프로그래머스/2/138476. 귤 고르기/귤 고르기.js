function solution(k, tangerine) {
    var answer = 0;
    var size = {};
    tangerine.forEach((item)=>size[item] ? size[item]++ :size[item]=1);
    var cnt = Object.values(size);
    cnt = cnt.sort((a,b)=>b-a);
    let sum =0;
    let count = 0;
    for(let c of cnt)
        {
            sum+=c;
            count++;
            if(sum>=k)
                break;
        }
    return count;
}