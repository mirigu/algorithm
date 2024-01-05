/**
 * 문제:
 * 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
 *
 * 두 수가 n과 m이라면
 * ">", "=" : n >= m
 * "<", "=" : n <= m
 * ">", "!" : n > m
 * "<", "!" : n < m
 * 두 문자열 ineq와 eq가 주어집니다.
 *
 * ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다.
 * 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
 */

// 부등호에 따라 n과 m을 비교하는 함수를 만든다.
const comparisonResult = (sign, n, m) => {
  switch (sign) {
    case '<=':
      return n <= m;
    case '>=':
      return n >= m;
    case '<':
      return n < m;
    case '>':
      return n > m;
    default:
      false;
  }
};

const solution = (ineq, eq, n, m) => {
  // eq가 "="이면 ineq와 eq를 합치고, 아니면 ineq를 부호로 사용하는 변수를 만든다.
  const sign = eq === '=' ? ineq + eq : ineq;

  // comparisonResult 함수를 통해 반환된 값이 참인 경우 1을 반환하고, 아니면 0을 반환한다.
  return comparisonResult(sign, n, m) ? 1 : 0;
};

console.log(solution('<', '=', 20, 50)); // 1
