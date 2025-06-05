function solution(s) {
    // let str = s.split('');
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === 'e') { // 문자열에 e가 있으면 false
    //         return false;
    //     }
    // }
    if (!(isNaN(s)) && (s.length === 4 || s.length === 6)) { // 문자열이 숫자이고 길이가 4 또는 6이면 true
        return true;
    }
    return false;
}