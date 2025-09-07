function solution(elements) {
    var answer = 0;
    let result =[];
    let arr = [...elements,...elements];
    let k =1;
    while(k <= elements.length) {
        for(let i =0;i<arr.length;i++) {
            let p =arr.slice(i,i+k).reduce((a,b)=>a+ +b,0);
            result.push(p)
        }
        k++;
    }
   
    return result.sort((a,b)=>a-b).filter((item,idx)=>item !== result[idx+1]).length;
}