function solution(id_list, report, k) {
    var answer = [];
    let user ={};
    let singo={};
    id_list.forEach((item)=> {
        user[item] =[];
        singo[item]=0;
    })
    let setRp = [...new Set(report)];
    setRp.forEach((rp)=> {
        let [userid,singoid] =rp.split(' ');
        user[userid].push(singoid);
        singo[singoid]+=1;
    })
    for (const key in user) { // user객체 돌면서 
        var count = 0;
        for (const report_id of user[key]) { //각 키의 값들을 돌아 
            if (singo[report_id] >= k) { // 그 키 값을 singo에 넣어 k보다 큰게 있다면 
                count++;
            }
        }
        answer.push(count);
    } 
    return answer;
}