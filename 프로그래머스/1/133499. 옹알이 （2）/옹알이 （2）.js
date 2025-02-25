function solution(babbling) {
    var answer = 0;
    let arr= ["aya","ye","woo","ma"];
    for(let i =0;i<babbling.length;i++) {
        for(let j =0;j<arr.length;j++) {
            if(babbling[i].includes(arr[j].repeat(2))) // 같은것 연속 반복 X 
                break;
            babbling[i] =babbling[i].split(arr[j]).join(' '); 
            //join(' ')공백을 나눠 arr[j]로 split했을때 나눠진 양옆에 문자끼리 합쳐졌을 때 arr[j]가 될 것을 방지!
        }
         if(babbling[i].split(" ").join("").length === 0) //다시 합쳤을때 길이가0이면 카운트
            answer++;
        
    }
    return answer;
}