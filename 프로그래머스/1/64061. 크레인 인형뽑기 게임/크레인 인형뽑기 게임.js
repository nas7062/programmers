function solution(board, moves) {
    var answer = 0;
    let result =[];
    for(let m of moves) {
    
        for(let line of board){
            if(line[m-1] !==0) {
                result.push(line[m-1]);
                line[m-1] = 0;
                break;
            }
           
        }
            if (result.length >= 2 && result[result.length-1] === result[result.length-2]) {
  answer += 2;
  result.pop();
  result.pop();
}
       
    }
 
     
    return answer;
}