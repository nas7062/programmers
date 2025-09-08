function solution(s) {
    let answer = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const rotated = s.slice(i) + s.slice(0, i);  
        if (isValid(rotated)) {
            answer++;
        }
    }

    return answer;
}

// 괄호 문자열이 올바른지 확인하는 함수
function isValid(s) {
    const stack = [];
    for (let ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            const top = stack.pop();
            if (
                (ch === ')' && top !== '(') ||
                (ch === ']' && top !== '[') ||
                (ch === '}' && top !== '{')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}