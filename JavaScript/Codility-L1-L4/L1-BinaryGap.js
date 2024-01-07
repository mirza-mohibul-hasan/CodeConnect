function solution(N) {
    let maxLen = 0;
    let prevIndex = -1;
    let binary = N.toString(2)
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == '1' && i - prevIndex -1 > maxLen) {
            maxLen = i - prevIndex - 1;
        }
        if (binary[i] == '1') {
            prevIndex = i;
        }
    }
    return maxLen;
}
