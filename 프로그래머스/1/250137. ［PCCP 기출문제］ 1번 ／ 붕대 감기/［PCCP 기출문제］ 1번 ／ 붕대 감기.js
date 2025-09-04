function solution(bandage, health, attacks) {
    var answer = 0;
    const maxhealth = health;
    let currenthealth= health;
    let time= 0;
    let straight =0;
   
    let lastTime = attacks[attacks.length-1][0];
    while(time <lastTime) {
        let [banTime,heal,lastHeal] = bandage;
         let attacking = false;
      
          if(currenthealth > maxhealth)
            currenthealth = maxhealth;
        
        if(straight === banTime) {
            currenthealth+=lastHeal;
        if (currenthealth > maxhealth) currenthealth = maxhealth; 
            straight =0;
        }
           
        time++;
        straight++;
        for(let attack of attacks) {
            let [attackTime,damage] = attack;
            if(time ===attackTime) {
                currenthealth-=damage;
                attacking=true;
                straight=0;
                
                if(currenthealth <=0) {
                     return -1;
                    break;
                }
            }
          
        }
        if(!attacking )
            currenthealth+=heal;
    }
    return currenthealth;
}