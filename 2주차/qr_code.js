//@ts-check

/**
 * 문제:
 * 두 정수 q, r과 문자열 code가 주어질 때,
 * code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {number} q
 * @param {number} r
 * @param {string} code
 * @returns {string}
 */

const solution = (q, r, code) => {
  // code를 각 문자단위로 나눠 배열을 생성한다.
  // 각 요소의 인덱스를 q로 나눈 나머지가 r인 요소를 필터링한다.
  // 추출된 배열을 문자열로 합치고 반환한다.
  return code
    .split('')
    .filter((_, idx) => idx % q === r)
    .join('');
};

console.log(solution(3, 1, 'qjnwezgrpirldywt')); // "jerry"
