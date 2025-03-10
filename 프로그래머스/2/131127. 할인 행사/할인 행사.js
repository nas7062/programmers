function solution(want, number, discount) {
    var answer = 0;
    for(let i=0;i<=discount.length-10;i++) {
        let map = new Map();
     want.forEach((item)=> {
        map.set(item,0);
    });
        
        let sliceArr= discount.slice(i,i+10);
        for(let arr of sliceArr) {
            if(map.has(arr))
                map.set(arr,map.get(arr)+1);
        }
        let result =[];
        for(let v of map.values())
            result.push(v);
        let all =result.every((item,idx)=>item===number[idx]);
        if(all)
            answer++;
    }
    
    return answer;
}