//@ts-check

/**
 * 문제:
 * 정수 l과 r이 주어졌을 때,
 * l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 *
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 */

/**
 * @param {number} l
 * @param {number} r
 * @returns {number[]}
 */

const solution = (l, r) => {
  // l이상 r이하의 정수 배열을 생성한다.
  const rangeArray = new Array(r - l + 1).fill(l).map((num, i) => num + i);

  // 0과 5로만 이루어진 정수를 필터링한다.
  const results = rangeArray.filter(
    (num) => num % 0 === 0 || (num % 5 === 0 && String(num).match(/^[05]+$/))
  );

  // 필터링한 결과,
  // 배열에 담긴 요소가 없다면 -1이 담긴 배열을 반환하고, 있다면 필터링한 결과 값을 반환한다.
  return results.length === 0 ? [-1] : results;
};

console.log(solution(10, 20)); //[5, 50, 55, 500, 505, 550, 555]
