function solution(keyinput, board) {
    var answer = [];
    let charactor = [0,0];
    keyinput.forEach((key)=> {
        switch(key) {
            case 'left' : {
                charactor[0]--;
                break;
            }
             case 'right' : {
                charactor[0]++;
                break;
            }
            case 'down' : {
                charactor[1]--;
                break;
            }
            case 'up' : {
                charactor[1]++;
                break;
            }    
        }
        if(charactor[0] < -Math.floor(board[0] /2))
            charactor[0] = -Math.floor(board[0]/2);
        if(charactor[0] > Math.floor(board[0] /2))
            charactor[0] = Math.floor(board[0]/2);
        if(charactor[1] > Math.floor(board[1] /2))
            charactor[1] = Math.floor(board[1]/2);
        if(charactor[1] < -Math.floor(board[1] /2))
            charactor[1] = -Math.floor(board[1]/2);
})
    
    return charactor;
}