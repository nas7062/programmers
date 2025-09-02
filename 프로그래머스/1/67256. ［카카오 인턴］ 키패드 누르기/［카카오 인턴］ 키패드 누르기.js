function getPos(n) {    
  return [Math.floor((n - 1) / 3), (n - 1) % 3];
}
function dist(a, b) {       
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function solution(numbers, hand) {
    var answer = '';
    const left =[1,4,7];
    const right =[3,6,9];
    const mid =[2,5,8,0];
    const pos = [10,12];
    numbers.map((number)=> {
        if(left.includes(number)) {
            answer+="L"
            pos[0] =number;
        }
        else if (right.includes(number)) {
            answer+="R";
            pos[1] =number;
        }
        else if(mid.includes(number)) {
            if(number ===0)
                number =11;
            let left =getPos(pos[0]);
            let right = getPos(pos[1]);
            let num  =getPos(number);
            const leftDist  = dist(left,  num);
            const rightDist = dist(right, num); 
            
           if(leftDist > rightDist) {
               answer+="R"
               pos[1] = number;
           }
           else if(leftDist <rightDist){
                answer+="L"
               pos[0] = number;
           }
            else {
                if(hand ==="right") {
                answer+="R";
                pos[1] = number;
            }
            else {
                 answer+="L";
                 pos[0] = number;
            }
            }

               
        }
    })
    return answer;
}