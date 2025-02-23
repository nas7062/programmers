function solution(name, yearning, photo) {
    photo =photo.map((item)=> {
        let sum =0;
        for(let i =0;i<name.length;i++) {
            if(item.includes(name[i]))
               sum+= yearning[i];
        }
        return sum;
    });
    return photo;
}