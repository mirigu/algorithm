//@ts-check

/**
 * 문제:
 * 문자열 배열 intStrs와 정수 k, s, l가 주어집니다.
 * intStrs의 원소는 숫자로 이루어져 있습니다.
 *
 * 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다.
 * 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
 */

/**
 *
 * @param {string[]} intStrs
 * @param {number} k
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 */

const solution = (intStrs, k, s, l) => {
  // 결과를 저장할 빈 배열을 생성한다.
  const results = [];

  // intStrs 배열의 요소를 순회한다.
  intStrs.map((str) => {
    // 요소의 일정 범위(s, s+1)로 잘라서 숫자로 변환한다.
    const slice = Number(str.slice(s, s + l));

    // 자른 숫자가 k보다 큰 경우, 결과 배열애 추가한다.
    if (slice > k) return results.push(slice);
  });

  // 결과 배열을 반환한다.
  return results;
};

const intStrs = ['0123456789', '9876543210', '9999999999999'];
const k = 50000;
const s = 5;
const l = 5;

console.log(solution(intStrs, k, s, l));
