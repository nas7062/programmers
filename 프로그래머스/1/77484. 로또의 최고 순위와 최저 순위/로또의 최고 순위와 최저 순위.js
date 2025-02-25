function solution(lottos, win_nums) {
    var answer = [];
    let zeroCnt =0;
    let cnt =0;
    lottos.forEach((lotto)=> { // lotto배열 돌면서
        for(let win of win_nums) { 
            if(lotto === win)//맞은 로또의 개수세기
                cnt++;
        }
        if(lotto===0) // lotto배열중 0인 개수 세기
            zeroCnt++;
    })
    let sum = cnt+zeroCnt; //  두개다 더한 값(최대 등수 확인 가능)
    switch(sum) {
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
    switch(cnt)
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