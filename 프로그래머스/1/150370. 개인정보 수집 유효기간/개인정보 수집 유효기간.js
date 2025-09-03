//모든 달은 28일까지 있다고 가정합니다.
function solution(today, terms, privacies) {
    var answer = [];
    const tObj = {};
    terms.forEach(term => {
    const [ch, num] = term.split(' ');
     tObj[ch] = Number(num);
    });
console.log(tObj)
let index =0;
  answer= privacies.map((pr,idx)=> {
        const [date,ch] = pr.split(' ');
        let num = tObj[ch];
        let tod =Number(today.split('.').join(''));
        let dat =date.split('.');
        let year = Number(dat[0]);
        let month = Number(dat[1]);
        let plus =num *28;
        let day =Number(dat[2])+plus;
      
       while(day > 28) {
          if(day > 28) {
              month++;
              day-=28;
          }
           if(month >12) {
                year++;
                month-=12;
            }             
        }
        
     

      month =month.toString().padStart(2,0);
      day =day.toString().padStart(2,0);
        let newDate = year.toString()+month.toString()+day.toString();
      
      console.log(tod,newDate);
        if(tod >= newDate) {
            return idx+1;
        }
       
    })
  
    return answer.filter((item)=>item);
    
}