function solution(dartResult) {
    let result=[];
    let num =0;
    for(let i=0;i<dartResult.length;i++) {
        let s =dartResult[i];
        if(s>='0' && s <="9"){
            if(s==="1" && dartResult[i+1]==="0") {
                num=10;
                i++;
            }
            else num=Number(s);
        }
        else if(s==="S") {
                result.push(num);
        }
        else if(s==="D") {
            result.push(Math.pow(num,2));
        }
        else if(s==="T") {
           result.push(Math.pow(num,3));
        }
        else if(s==="*") {
                result[result.length-1] *= 2;
                result[result.length-2] *= 2;
        }
        else if(s==="#") {
            result[result.length-1] *= -1; 
        }
    }
 
    return result.reduce((a,b)=>a+b,0);
}