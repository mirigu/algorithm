/**
 * 문제:
 * 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
 * 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (n) => {
  // Math.sqrt()를 사용해서 제곱근을 구하고 isInteger() 메서드를 통해 값이 정수인지 아닌지 판별해서
  // 정수이면 1, 아니면 2를 반환한다.
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
};

console.log(solution(144)); // 1
