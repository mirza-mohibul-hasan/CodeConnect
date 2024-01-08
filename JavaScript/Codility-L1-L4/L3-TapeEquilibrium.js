// Optimized TC: O(N) MC: O(1)
function solution(A) {
    let totalSum = A.reduce((accumulator, current) => accumulator + current, 0)
    let tempSum = 0;
    let diff = Infinity;
    for (let i = 0; i < A.length; i++) {
        tempSum += A[i];
        diff = Math.min(Math.abs(totalSum - tempSum - tempSum), diff)
    }
    return diff;
}
console.log(solution([3, 1, 2, 4, 3]))

// Brute Force TC: O(N) MC: O(N)
function solution(A) {
    let arr1 = [];
    let arr2 = [];
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        arr1.push(sum)
    }
    sum = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        sum += A[i];
        arr2.push(sum)
    }
    arr2.reverse()
    let diff = Infinity;
    for (let i = 0; i < A.length - 1; i++) {
        if (Math.abs(arr1[i] - arr2[i + 1]) < diff) {
            diff = Math.abs(arr1[i] - arr2[i + 1]);
        }

    }
    return diff;
}
console.log(solution([3, 1, 2, 4, 3]))
