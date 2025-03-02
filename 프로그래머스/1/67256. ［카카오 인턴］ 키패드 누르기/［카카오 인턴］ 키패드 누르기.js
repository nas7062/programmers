function solution(numbers, hand) {
    var answer = '';
    let left =[1,4,7];
    let center =[2,5,8,0];
    let right =[3,6,9];
    let l = 10;
    let r = 12;
    for(let num of numbers){
        if(left.includes(num)) {
            answer+="L";
            l =num;
        }
        else if(right.includes(num)) {
            answer+="R";
            r=num;
        }
        else if(center.includes(num)) {
            if(num===0)
               num=11;
            let lnum = Math.abs(num-l); 
            let rnum =Math.abs(num-r);
            lnum=Math.floor(lnum/3)+Math.floor(lnum%3);
            rnum = Math.floor(rnum/3)+Math.floor(rnum%3);
            
            if(lnum <rnum) {
                answer+="L";
                l=num;
            }
                
            else if(lnum >rnum) {
                answer+="R";
                r=num;
            }
                
            else{
                if(hand==="left") {
                    answer+="L";
                    l=num;
                }
                    
                else {
                    answer+="R";
                    r=num;
               }
            }
        }
}
    return answer;
}