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
