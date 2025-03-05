function solution(bandage, health, attacks) {
    var answer = 0;
    let len = attacks.length;
    let map = new Map();
     for(let attack of attacks) {
            let time = attack[0];
            let damage= attack[1];
         map.set(time,damage);
     }
    let curTime =0;
    let noAttackTime=0;
    let t = bandage[0];
    let x = bandage[1];
    let y = bandage[2];
    let maxhealth =health;
    while(1) {
        if(maxhealth<=health)
            health= maxhealth;
        
        curTime++;
        health+=x;
        noAttackTime++;
        let damage =map.get(curTime);
        if(damage) {
             health-=damage;
            map.delete(curTime);
            health-=x;
            noAttackTime=0;
        }
        console.log(health,noAttackTime,curTime);
        
        if(health <1)
            return -1;
        
        if(map.size ===0)   
            break;
        
        if(noAttackTime ===t) {
            health+=y;
            noAttackTime=0;
        }
    } 
    return health;
}