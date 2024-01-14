//@ts-check

/**
 * 정수 리스트 num_list가 주어질 때,
 * 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요.
 *
 * 음수가 없다면 -1을 return합니다.
 */

/**
 *
 * @param {number[]} num_list
 * @returns {number}
 */

const solution = (num_list) => {
  // 배열을 반복하면서 음수가 처음으로 나타나는 인덱스를 찾는다.
  for (let i = 0; i <= num_list.length; i++) {
    // 현재 요소가 음수인 경우, 현재 인덱스를 반환한다.
    if (num_list[i] < 0) return i;
  }

  // 음수가 없는 경우, -1을 반환한다.
  return -1;
};

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
