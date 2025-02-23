function solution(a, b) {
    let days =[31,29,31,30,31,30,31,31,30,31,30,31];
    let day =["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let sum =0;
    for(let i=0;i<a-1;i++) { // 5월이면 4월까지 더하고
        sum+=days[i];
    }
    sum+=b-1; // 나머지 일수 더함 
    return day[sum%7];
}