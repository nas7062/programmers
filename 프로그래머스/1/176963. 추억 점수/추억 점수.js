function solution(name, yearning, photo) {
    var answer = [];
    let result = photo.map((item)=>item.map((p)=> {
        let idx = name.indexOf(p);
        if(name.indexOf(p) === -1) 
            return 0;
        else
            return yearning[idx];
        
    }).reduce((a,b)=> a+ +b,0))
    return result;
}