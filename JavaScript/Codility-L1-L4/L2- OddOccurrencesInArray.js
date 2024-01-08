// Optimal TC: O(N) MC: O(1)
function solution(A) {
    let target = 0;
    for (let i = 0; i < A.length; i++) {
        target = target ^ A[i];
    }
    return target;
};
console.log(solution([7, 3, 7, 3, 7, 7, 9]))
// BruteForce TC: O(NlogN) MC: O(1)
function solution(A) {
    A.sort();
    for (let i = 0; i < A.length; i++) {
        if(A[i] == A[i+1]){
            i++;
        }
        else{
            return A[i];
        }
    }
};
console.log(solution([7, 3, 7, 3, 7, 7, 9]))
