function solution(spell, dic) {
    var answer = 0;
    let sortedSpell = spell.sort().join('');
    let result =dic.map((item)=>[...item].sort().join('')).filter((item)=>item.includes(sortedSpell));
    return result.length ? 1 : 2;
}