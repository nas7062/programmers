function solution(k, score) {
    var answer = [];
    var arr =[];
     for(let s of score)
         {
             arr.push(s);
              arr= arr.sort((a,b)=>a-b);
             if(arr.length >k )
                arr.shift();
            
            answer.push(arr[0]);
             
           
            
        }
    
    return answer;
}