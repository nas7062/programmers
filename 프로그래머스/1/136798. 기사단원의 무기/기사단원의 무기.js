function solution(number, limit, power) {
    let arr =[];
    for(let i=1;i<=number;i++) {
        let cnt =0;
        for(let j=1;j<=Math.sqrt(i);j++) {
            if(i%j === 0) { // 나눠지면 ++
                cnt++;
                if(i/j !== j) // 나눳을 때 몫도 ++ 
                     cnt++;
            }      
        }
        arr.push(cnt);
    }
    return arr.map((item)=> item >limit ? power : item).reduce((a,b)=>a+b,0);
}