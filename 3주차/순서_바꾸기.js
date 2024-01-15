//@ts-check

/**
 * 문제:
 * 정수 리스트 num_list와 정수 n이 주어질 때,
 * num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠
 * n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
 */

/**
 *
 * @param {number[]} num_list
 * @param {number} n
 * @returns {number[]}
 */

const solution = (num_list, n) => {
  // num_list에서 n번째 인덱스 이후의 요소들을 자르고 list1에 담는다.
  const list1 = num_list.splice(n);
  // list2에는 원래의 num_list에서 list1을 제외한 요소를 담는다.
  const list2 = num_list;

  // list1과 list2를 합친 배열을 반환한다.
  return [...list1, ...list2];
};

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
