/**
 * 문제:
 * 정수 n과 문자열 control이 주어집니다.
 * control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
 *
 * "w" : n이 1 커집니다.
 * "s" : n이 1 작아집니다.
 * "d" : n이 10 커집니다.
 * "a" : n이 10 작아집니다.
 *
 * 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
 */

// 문자열에 따라 숫자를 반환하는 함수
const updateN = (str) => {
  switch (str) {
    case 'w':
      return +1;
    case 's':
      return -1;
    case 'd':
      return +10;
    case 'a':
      return -10;
  }
};

const solution = (n, control) => {
  // n을 초기값으로 하는 변수를 생성한다.
  let answer = n;

  // 문자열 control을 각 문자단위로 나눠 배열을 생성한다.
  // 각 요소에 따라 변환된 숫자를 answer 모두 변수에 더한다.
  [...control].map((str) => (answer += updateN(str)));

  // answer을 반환한다.
  return answer;
};

console.log(solution(0, 'wsdawsdassw')); // -1
