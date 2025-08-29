function solution(a, b) {
    var answer = '';
     var dayOfWeek = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
     var sumDay =[31,29,31,30,31,30,31,31,30,31,30,31];
    let totalDays= b;
    for(let i =0;i<a-1;i++) {
        totalDays+=sumDay[i];
    }
    console.log(totalDays);
    return dayOfWeek[totalDays % 7 ];
    return answer;
}