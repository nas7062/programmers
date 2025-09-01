function solution(lottos, win_nums) {
    var answer = [];
    let zero =0;
    let win =0;
    lottos.forEach((lotto)=> {
        if(lotto===0)
            zero++;
        if(win_nums.includes(lotto))
            win++;
    })
    console.log(win,zero);
    let sum = win+zero;
    switch(win) {
        case 6 : {
            answer.push(1);
            break;
        }
        case 5 : {
            answer.push(2);
            break;
        }
        case 4 : {
            answer.push(3);
            break;
        }
        case 3 : {
            answer.push(4);
            break;
        }
        case 2 : {
            answer.push(5);
            break;
        }
        default : {
            answer.push(6);
            break;
        }
            
    }
    switch(sum) {
        case 6 : {
            answer.push(1);
            break;
        }
        case 5 : {
            answer.push(2);
            break;
        }
        case 4 : {
            answer.push(3);
            break;
        }
        case 3 : {
            answer.push(4);
            break;
        }
        case 2 : {
            answer.push(5);
            break;
        }
        default : {
            answer.push(6);
            break;
        }
            
    }
    
    return answer.sort((a,b)=>a-b);
}