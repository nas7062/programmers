function solution(s) {
    var answer = s;
    var arr= ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
        for(let i =0;i<arr.length;i++)
            {
              answer =answer.split(arr[i]).join(i);
                
                
            }
       
    
   
   return +answer;
}