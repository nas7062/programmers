function solution(want, number, discount) {
    var answer = 0;
 
    let mapA = new Map();

    want.forEach((item,idx)=> {
        mapA.set(item,number[idx])
    })
    
    for(let i =0;i<10;i++) {
        let item = discount[i];
        if(mapA.has(item)) {
            mapA.set(item,mapA.get(item)-1);
        }
    }
    
    const isValid = () => [...mapA.values()].every((item)=> item <=0);
    if(isValid()) {
        answer++;
    }
    for(let i =10;i<discount.length;i++) {
        let prev =discount[i-10];
        let next = discount[i];
        if(mapA.has(prev)) {
            mapA.set(prev,mapA.get(prev) +1);
        }
         if(mapA.has(next)) {
            mapA.set(next,mapA.get(next) -1);
        }
        if(isValid()) {
            answer++;
        }
    }
    
    return answer;
}