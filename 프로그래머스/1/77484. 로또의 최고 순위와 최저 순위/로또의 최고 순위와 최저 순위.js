function solution(lottos, win_nums) {
    var answer = [];
    let count  =0;
    let count2 =0;
    lottos.forEach((item)=>item ===0 ?count++ : count);
    win_nums.forEach((item)=> {
                for(let lot of lottos)
                    {
                        if(item ===lot)
                            count2++;             
                    }
    })
    let sum =count+count2;
    
    switch(sum)
        {
            case 2:
                answer.push(5)
                break;
            case 3:
                answer.push(4)
                break;
            case 4:
                answer.push(3)
                break;
            case 5:
                answer.push(2)
                break;
            case 6:
                answer.push(1)
                break;
            default:
                answer.push(6)
        }
    switch(count2)
        {
                case 2:
                answer.push(5)
                break;
            case 3:
                answer.push(4)
                break;
            case 4:
                answer.push(3)
                break;
            case 5:
                answer.push(2)
                break;
            case 6:
                answer.push(1)
                break;
            default:
                answer.push(6)
        }
        
    return answer;
}