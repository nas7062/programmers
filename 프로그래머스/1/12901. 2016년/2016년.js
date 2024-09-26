function solution(a, b) {
    var answer = '';
    var days =["FRI","SAT","SUN","MON","TUE","WED","THU"];
    var monthdays =[31,29,31,30,31,30,31,31,30,31,30,31];
    var sum=b-1;
    for(let i =0;i<a-1;i++)
        {
            sum+=monthdays[i];
        }
    return days[sum%7];
}