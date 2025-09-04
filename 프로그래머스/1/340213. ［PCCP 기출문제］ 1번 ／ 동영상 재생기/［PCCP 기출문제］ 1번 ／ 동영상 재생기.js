function DatefromNumber (pos) {
    let [h,m] = pos.split(":");
    return h*60 + +m;
}

function NumberfromDate (num) {
    let h=  (Math.floor(num /60)).toString().padStart(2,0);
    let m = (num%60).toString().padStart(2,0);
    return h + ":" + m;
}


function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    
    while(commands.length) {
        let command = commands.shift();
        let posNum = DatefromNumber(pos);
        let startNum = DatefromNumber(op_start);
        let endNum  = DatefromNumber(op_end);
        if(posNum >=startNum && posNum <=endNum) {
            posNum = endNum;
        }
        if(command ==='next') {
            posNum+=10;
        }
        else if(command ==='prev') {
            posNum-=10;
        }
        
        if(posNum <0) {
            posNum = 0;
        }
        if(posNum >DatefromNumber(video_len)) {
            posNum = DatefromNumber(video_len)
        }
        console.log(posNum);
        if(posNum >=startNum && posNum <=endNum) {
            posNum = endNum;
        }
        pos = NumberfromDate(posNum);
    }
    answer= pos;
      
    return answer;
}