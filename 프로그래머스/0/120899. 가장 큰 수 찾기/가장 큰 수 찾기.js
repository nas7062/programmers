function solution(array) {
    let max =0;
    let index =0;
     array.forEach((item,idx)=>{
        if(item >max) {
            max=item;
            index =idx;
        } 
     });
    return [max,index];
}