/**
 * 문제:
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
 */

const solution = (n) => {
  // 변수 answer의 초기값을 0으로 한다.
  let answer = 0;

  // 정수 n을 toString 메서드로 문자열로 변경하고 배열로 변환한다.
  // 배열의 각 요소를 answer에 더하면서 answer의 값을 업데이트 한다.
  n.toString()
    .split('')
    .map((num) => (answer += Number(num)));

  // 최종 answer 값을 반환한다.
  return answer;
};

console.log(solution(1234)); // 10
