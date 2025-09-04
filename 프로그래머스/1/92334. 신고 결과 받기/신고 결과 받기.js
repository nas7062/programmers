function solution(id_list, report, k) {
    var answer = [];
    let reporter_list ={};
    let count_list ={};
    id_list.forEach((id)=> {
        reporter_list[id] = [];
        count_list[id] = 0;
    })
    
    
    report.forEach((rp)=> {
        const [repoter,trol] = rp.split(' ');
        if(reporter_list[repoter].includes(trol) === false) {
            reporter_list[repoter].push(trol);
        }
        
    })
     for (const key in reporter_list) {
        for (const trol of reporter_list[key]) {
            count_list[trol] += 1;
        }
    }

  
    
    for (const key in reporter_list) {
        var count = 0;
        for (const trol of reporter_list[key]) {
            if (count_list[trol] >= k) {
                count++;
            }
        }
        answer.push(count);
    } 
    return answer;
}