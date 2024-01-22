//@ts-check

/**
 * 문제:
 * 정수 리스트 num_list와 정수 n이 주어질 때,
 * num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

/**
 *
 * @param {number[]} num_list
 * @param {number} n
 * @returns {number[]}
 */

const solution = (num_list, n) => {
  // num_list 배열에서 인덱스가 n의 배수인 경우를 필터링한 배열을 반환한다.
  return num_list.filter((_, idx) => idx % n === 0);
};

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
