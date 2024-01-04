/**
 * 문제:
 * 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
 * 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (n, t) => {
  // 변수 answer의 초기값을 n으로 한다.
  let answer = n;

  // 배열을 t+1 길이만큼 생성하고 각 요소에 대해 콜백 함수를 실행한다.
  [...new Array(t + 1)].map((_, idx) => {
    // 인덱스가 0보다 큰 경우, answer에 2를 곱해 값을 업데이트한다.
    if (idx > 0) return (answer *= 2);
  });

  // 최종 answer 값을 반환한다.
  return answer;
};

console.log(solution(2, 10)); //2048
