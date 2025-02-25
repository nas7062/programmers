function solution(keymap, targets) {
    var answer = [];
    targets.forEach((target,idx)=> {
        let result =0;
        for(let t of target) {
            let arr =[];
            let cnt= 0;
            keymap.forEach((item)=> {
                let p =item.indexOf(t);
                if(p !==-1) {
                    arr.push(p+1);   
                }
                else
                    cnt++;
            })
            if (cnt === keymap.length) { // 모든 keymap에서 찾을 수 없는 경우
                result = -1;
                break;
            }

            if(arr.length>0) {
                let mini = Math.min(...arr);
                result+=mini;
            }
        }
        answer.push(result);
    })
    if(answer.length ===0)
            return [-1];
    return answer;
}