function solution(new_id) {
    var answer = '';
    //if(new_id.length < 3 || new_id.length > 15)
        
    let arr;
     arr = [...new_id].map((item)=>{
        if(item >='A' && item <='Z')
            return item.toLowerCase();
         else
             return item;
    });
    arr = arr.map((item)=> {
        if(item>='a' && item <='z')
            return item;
        else if(item>='0' && item <='9')
            return item;
        else if(item ==="-" || item ==="_" || item===".")
            return item;
    }).join('');
    
    let machim =[];
    for(let ar of arr) {
        if(machim[machim.length-1]==="." && machim[machim.length-1]===ar)
            machim.pop();
        machim.push(ar);
        
    }
    if(machim[0]===".")
        machim.shift();
    if(machim[machim.length-1]===".")
        machim.pop();
    if(machim.length ===0)
        machim.push("a");
    if(machim.length>=16)
        machim = machim.slice(0,15);
    if(machim[machim.length-1]===".")
        machim.pop();
    if(machim.length <=2)
        while(machim.length <3)
            machim.push(machim[machim.length-1]);
    return machim.join('');
}