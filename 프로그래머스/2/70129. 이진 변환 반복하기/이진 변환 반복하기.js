function solution(s) {
  
    let cnt =0;
    let zerocnt =0;
    while(s !== '1') {
        let arr = s.split('').filter((item)=>item ==='1');
        zerocnt += s.length- arr.length;
        let next = arr.length.toString(2);
        s = next;
        cnt++;
    }
        
    return [cnt,zerocnt];
}