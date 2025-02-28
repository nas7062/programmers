function solution(board, moves) {
    var answer = 0;
    let map = board.map((item)=>item.slice());
    let stack =[];
    moves.forEach((item)=> {
        for(let i =0;i<map.length;i++) {
                if(map[i][item-1]===0)
                    continue;
                else {
                     if(stack[stack.length-1] === map[i][item-1]) {
                         stack.pop();
                         answer+=2;
                        }
                        else 
                            stack.push(map[i][item-1]);
                        map[i][item-1] =0;
                        break;  
                    
                }
        
    }
})
    return answer;
}