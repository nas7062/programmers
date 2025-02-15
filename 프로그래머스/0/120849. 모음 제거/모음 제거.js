function solution(my_string) {
    let answer ="";
    let moum = ['a','e','i','o','u'];
     for(let str of my_string) {
        if(moum.includes(str)) {
            continue;
        }
         else {
             answer+=str;
        }
     }
    return answer;
}