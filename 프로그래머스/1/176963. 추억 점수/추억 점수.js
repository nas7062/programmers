function solution(name, yearning, photo) {
    photo =photo.map((item)=> { // photo 돌면서
        let sum =0;
        for(let i =0;i<name.length;i++) {
            if(item.includes(name[i])) //name을 포함하고 있으면 더해줌!
               sum+= yearning[i];
        }
        return sum;
    });
    return photo;
}