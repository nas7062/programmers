function solution(common) {
    if(common[common.length-1] -common[common.length-2] === common[1]-common[0]) // 등차수열 찾아내기 => 4-3 === 2-1  다음에 올 값은 5
        return common[common.length-1] +common[1]-common[0];
    else // 등비 수열 
        return common[common.length-1]*  Math.floor(common[1] /common[0]);
}