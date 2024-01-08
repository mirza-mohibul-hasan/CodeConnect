// Bruteforce TC: O(N) MC:O(1)
function solution(A) {
    const n = A.length + 1;
    let sum = n*(n+1)/2;
    for (let i = 0; i < A.length; i++) {
        sum -= A[i];
    }
    return sum;
}
