function solution(polynomial) {
    var answer = '';
    polynomial = polynomial.split(" + "); // +공백으로 나눠줌
   let xsum= 0;
    let sum =0;
    polynomial.forEach((el)=>{ 
        if(el.includes('x')) // x를 포함할 경우
        {
            let xarr = el.split("x"); //x로 나눠 숫자와 x로 나뉨
           
            if(xarr[0]==="") // x인경우
                xsum++;
            else // 2x 이상인 경우
                {
                    xsum+=Number(xarr[0]);
                }
        }
       if(!el.includes('x')) // x 포함하지 않음
        {
             sum+=Number(el);
        }
    })
    if(sum!==0 && xsum !==0)
        return xsum===1 ?`x + ${sum}` : `${xsum}x + ${sum}`;
    if(sum===0 && xsum !==0)
        return xsum ===1 ? `x` : `${xsum}x`;
    if(sum!==0 && xsum===0)
        return `${sum}`;
    return xsum,sum;
}