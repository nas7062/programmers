function solution(name, yearning, photo) {
    var answer = [];
    
     photo.forEach((item)=>{
         let sum =0;
           for(let i =0;i<name.length;i++)
               {
                  if(item.includes(name[i]) )
                      sum+=yearning[i];
               }
         answer.push(sum);
        
         console.log(item);
     })
    
    
    return answer;
}