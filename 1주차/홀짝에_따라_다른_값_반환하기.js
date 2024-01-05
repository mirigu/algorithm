/**
 * 문제:
 * 양의 정수 n이 매개변수로 주어질 때,
 * n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (n) => {
  // 0~n까지의 숫자의 요소를 가진 배열을 생성하고,
  // filter 함수를 통해 n이 홀수이면 요소 중 홀수만, n이 짝수이면 요소 중 짝수만 추출한다.
  // 그 다음 reduce 함수로 n이 홀수이면 배열의 각 요소를 합산하여 반환하고,
  // n이 짝수이면 배열의 각 요소의 제곱근을 합산하여 반환한다.

  return new Array(n + 1)
    .fill(0)
    .map((_, idx) => idx)
    .filter((num) => (n % 2 === 0 ? num % 2 === 0 : num % 2 !== 0))
    .reduce((acc, cur) => (n % 2 === 0 ? acc + cur * cur : acc + cur), 0);
};

console.log(solution(7));
