function solution(number, limit, power) {
    var answer = 0;
    let arr = [];
    for(let i =1;i<=number;i++)
        {
            let cnt =0;
            for(let j =1;j<=Math.sqrt(i);j++)
                {
                    if(i%j===0)
                        {
                           cnt++; 
                            if(j!==i/j)
                                cnt++;
                        }
                        
                    
                }
            
            arr.push(cnt);
        }
    return arr.map((item)=>item > limit ? power : item).reduce((a,b)=>a+b,0);
}