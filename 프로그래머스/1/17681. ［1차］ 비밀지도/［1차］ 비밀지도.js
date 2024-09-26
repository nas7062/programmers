function solution(n, arr1, arr2) {
  var answer= [];
  var sumarr =[];
   const A = arr1.map((item)=>item.toString(2).padStart(n,0));
    const B = arr2.map((item)=>item.toString(2).padStart(n,0));
    for(let i =0;i<n;i++)
        {
            sumarr.push(String(+A[i] + +B[i]).padStart(n,0));
        }
    
   for(let num of sumarr)
       {
           let p =num.split("").map((item)=>item >=1 ? item="#" : item=" ").join("")
           answer.push(p);
       }
    
    
    return answer;
}