/**
 * 문제:
 * 정수 number와 n, m이 주어집니다.
 * number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (number, n, m) => {
  // number를 n으로 나눈 값 number를 m으로 나눈 값이 정수면 1, 아니면 0을 반환한다.
  return Number.isInteger(number / n) && Number.isInteger(number / m) ? 1 : 0;
};

console.log(solution(55, 10, 5)); // 0
