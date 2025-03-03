function solution(today, terms, privacies) {
    var answer = [];
    let map = new Map;
  terms.forEach((item)=> {
        let [cate,date] =item.split(' ');
        map.set(cate,date);
    })
    let result = privacies.map((item)=> {
        let [date,alpha] = item.split(' ');
        let [y,m,d] = date.split('.').map(Number);
        m += Number(map.get(alpha));
        d--;
        if(m >12) {
            if(m % 12 === 0){
                // 12의 배수이면 년도는 바뀌지 않음
                y += parseInt(m/12) - 1;
                // 0이면 12월 
                m = 12;
            }else{
                // 12의 배수가 아닌 경우는 년도가 바뀜
                y += parseInt(m/12);
                // 아닐경우 12로 나눈 나머지
                m = m % 12;
            }
        }
        if(d === 0){
            // 0일인 경우는 없으므로 전달로 넘어가기 위해
            m--;
            // 전달로 넘어가면 그 달의 마지막 일인 28로 저장
            d=28;
             // m-- 해서 달이 0이 된 경우
            if(m === 0){
                // 0달인 경우는 없으므로 전년도로 넘어가기 위해
                y--;
                // 전년도로 넘어가면 그 해의 마지막 달인 경우 12로 저장
                m=12;
            }
        }
        let strNum ='';
        let strDay ='';
        if(m <10) {
            strNum+='0'+m
        }
        else {
            strNum= m;
        }
        if(d <10) {
            strDay+="0"+d;
        }
        else {
            strDay= d;
        }
        return [y,strNum,strDay];
})
    let todayResult = today.split('.').join('');
    result = result.map((item)=>item.join(''));
    result.forEach((item,idx)=>  {
        if(item < todayResult) {
            answer.push(idx+1);
        }
})
    return answer;
}