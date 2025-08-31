function solution(dartResult) {
    var answer = 0;
    let num = [];
    for(let i =0;i<dartResult.length;i++) {
        let d =dartResult[i];
        if(dartResult[i]==='1' && dartResult[i+1] ==='0') {
               num.push(10);
            i++;
            continue;
}
         
         if (d >= '0' && d <= '9') {
      num.push(parseInt(d, 10));
      continue;
    }

        if(d ==='S') {
           num[num.length-1] = num[num.length-1] *1;
        }
        if(d ==='D') {
            num[num.length-1]= Math.pow(num[num.length-1],2);
        }
        if(d==='T')
            {
            num[num.length-1]= Math.pow(num[num.length-1],3);
        }
        if(d==='*') {
             num[num.length-1]= num[num.length-1] *2;
            num[num.length-2]= num[num.length-2] *2;
        }
        if(d ==='#') {
            num[num.length-1]= -num[num.length-1];
        }
    }
    console.log(num);
    return num.reduce((a,b)=>a + +b);
}