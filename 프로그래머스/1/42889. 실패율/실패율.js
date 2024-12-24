function solution(N, stages) {
    let answer = []; // 정답 배열
    let failureRate = []; // 실패율 배열
    let total = stages.length; // 총 인원

    for (let i = 1; i <= N; i++) {
        let count = 0; // 실패한 사람 수
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] === i) {
                count++;
            }
        }
        if (count === 0) { // 실패율이 0인 경우
            failureRate.push(0);
        }
        else {
            failureRate.push(count / total); // 실패율 계산
            total -= count; // 다음 스테이지에 도달한 사람 수
        }
    }

    for (let i = 0; i < N; i++) {
        let max = Math.max(...failureRate); // 가장 큰 값
        let index = failureRate.indexOf(max); // 가장 큰 값의 인덱스
        answer.push(index + 1);
        failureRate[index] = -1; // 가장 큰 값의 인덱스를 -1로 바꿔줌
    }

    return answer;
}