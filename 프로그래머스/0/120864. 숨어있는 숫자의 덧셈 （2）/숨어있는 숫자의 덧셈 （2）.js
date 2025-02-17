function solution(my_string) {
    var answer = 0;
    let str= ""; // 저장할 문자열 만들어줌 
    for(let my of my_string) {  
        if(my >='0' && my<='9') // 숫자면 str에 더해줌
            str+=my;
        else { // 숫자가 아니라면  answer에 Number로 변환한 str을 더해주고 str은 초기화 
             answer+=Number(str);
                str="";
        }
    }
    if(str.length !==0) {
        answer+=Number(str);
    }
    
    return answer;
}