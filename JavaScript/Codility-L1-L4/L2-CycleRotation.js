// Optimal TC: O(N) & MC: O(1)
function solution(A, K) {
    const len = A.length;
    for (let i = 0; i < len / 2; i++) {
        [A[i], A[len - 1 - i]] = [A[len - 1 - i], A[i]];
    }
    K = K % len;
    for (let i = 0; i < K / 2; i++) {
        [A[i], A[K - 1 - i]] = [A[K - 1 - i], A[i]];
    }
    for (let i = K; i < (len + K) / 2; i++) {
        [A[i], A[len - 1 + K - i]] = [A[len - 1 + K - i], A[i]];
    }
    return A;
}
// Optimal TC:O(N) & MC: O(N)
function solution(A, K) {
    let ans = []
    for (let i = 0; i < A.length; i++) {
        ans[(i + K)%A.length] = A[i];
    }
    return ans;
}
// Bruteforce TC: O(N^2) & MC: O(1)
function solution(A, K) {
    if(A.length == 0) return [];
    while (K--) {
        let temp = A[A.length - 1];
        for (let i = A.length - 1; i >= 0; i--) {
            A[i] = A[i - 1];
        }
        A[0] = temp;
    }
    return A;
}
