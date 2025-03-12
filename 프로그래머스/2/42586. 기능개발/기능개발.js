function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length >0) {
        let cnt=0;
        for(let i =0;i<progresses.length;i++) {
            if(progresses[i]<100) {
                progresses[i]+=speeds[i];
            }
        }
      while (progresses[0] >= 100) { // 맨앞의 progress배열이 100이 넘으면 shift
      progresses.shift();
      speeds.shift(); 
      cnt++;
    }
    if (cnt > 0) 
      answer.push(cnt);
    }
    return answer;
}