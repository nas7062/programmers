function solution(array) {
    var answer = 0;
     array.forEach((item)=> {
         let str = item.toString();
         for(let i=0;i<str.length;i++) {
             if(str[i]==="7")
                 answer++;
        }
    });
    return answer;
}