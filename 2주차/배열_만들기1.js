//@ts-check

/**
 * 문제:
 * 정수 n과 k가 주어졌을 때,
 * 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 */

/**
 *
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */

const solution = (n, k) => {
  // 1부터 n까지의 숫자로 이뤄진 배열 생성한다.
  const array = new Array(n).fill(0).map((_, i) => i + 1);

  // 배열에서 k의 배수인 숫자만 필터링해서 반환한다.
  return array.filter((num) => num % k === 0);
};

console.log(solution(15, 5)); // [3, 6, 9]
