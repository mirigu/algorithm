//@ts-check

/**
 * 문제:
 * 정수 n과 정수 배열 numlist가 매개변수로 주어질 때,
 * numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
 */

/**
 *
 * @param {number} n
 * @param {number[]} numlist
 * @returns {number[]}
 */

const solution = (n, numlist) => {
  // numlist의 각 요소 n으로 나눴을 때, 나머지가 0인 요소를 필터링해서 반환한다.
  return numlist.filter((num) => num % n === 0);
};

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
