function solution(schedules, timelogs, startday) {
    let answer = 0;

    function formatTime(time) {
        let newTime = (Math.floor(time/100) *60 +(time%100)) + 10;
        return (Math.floor(newTime/60) *100 +newTime %60)
    }
    
    for (let i = 0; i < schedules.length; i++) {
        let flag = true;
        let day = startday;
        let time = formatTime(schedules[i]);
        for (let j = 0; j < timelogs[i].length; j++) {
            // 요일 갱신 (1~7)
            day = (day - 1) % 7 + 1;

            // 토요일(6), 일요일(7)은 건너뜀
            if (day === 6 || day === 7) {
                day++;
                continue;
            }

            // 출근 시간 체크
            if (timelogs[i][j] > time) {
                flag = false;
                break;
            }

            day++;
        }

        if (flag) answer++;
    }

    return answer;
}
