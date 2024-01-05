/**
 * 문제:
 * 문자열 code가 주어집니다.
 * code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.
 * mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.
 *
 * mode가 0일 때
 * code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
 * code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
 *
 * mode가 1일 때
 * code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
 * code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
 * 문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.
 *
 * 단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.
 */

const solution = (code) => {
  // mode의 초기값을 0으로 한다.
  let mode = 0;

  const answer = code
    .split('') // 문자열 code를 각 문자로 나누어 배열로 변환한다.
    .filter((str, idx) => {
      // mode가 0인 경우
      if (mode === 0) {
        if (str === '1') {
          mode = 1; // 요소의 값이 '1'이면 mode를 1로 변경
        }
        return idx % 2 === 0; // 짝수 인덱스의 문자만 남기고 제거한다.
      }

      // mode가 1인 경우
      if (mode === 1) {
        if (str === '1') {
          mode = 0; // 요소의 값이 '1'이면 mode를 0로 변경한다.
        }
        return idx % 2 !== 0; // 홀수 인덱스의 문자만 남기고 제거한다.
      }
    })
    .filter((str) => str !== '1') // '1'인 요소를 제거한다.
    .join(''); // 배열을 다시 문자열로 합친다.

  // 최종 문자열이 빈 문자열이라면 'EMPTY'를 반환하고, 아니면 최종 문자열을 반환한다.
  return answer === '' ? 'EMPTY' : answer;
};

console.log(solution('abc1abc1abc')); // "acbac"
