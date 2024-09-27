function solution(keymap, targets) {
    var answer = new Array(targets.length).fill(0);
     targets.forEach((item,idx)=>{
         
          for(let i=0;i<item.length;i++)
              {
                  var arr= [];
                  for(let j =0;j<keymap.length;j++)
                      {
                         
                           let p =keymap[j].indexOf(item[i]);
                          if(p!==-1)  
                            arr.push(p+1);
                           
                      }
                  if(arr.length>0)
                    answer[idx]+=Math.min(...arr);
                  else
                      {
                          answer[idx] =-1;
                          break;
                      }
                      
                 
              }
         
     })
  
    return answer;
}