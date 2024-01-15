//@ts-check

/**
 * 문제:
 * 정수 리스트 num_list와 정수 n이 주어질 때,
 * n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

/**
 *
 * @param {number[]} num_list
 * @param {number} n
 * @returns {number[]}
 */

const solution = (num_list, n) => {
  // 결과를 담을 새로운 배열을 초기화하고 num_list를 복사한다.
  const results = num_list.slice();

  // 배열에서 n번째 인덱스부터 끝까지의 요소를 자르고, 자른 요소들을 반환한다.
  return results.splice(n - 1);
};

console.log(solution([2, 1, 6], 3)); // [6]
