// TC: O(1) MC: O(1)
function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}
console.log(solution(10, 85, 30))
