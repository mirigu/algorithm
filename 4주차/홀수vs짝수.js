//@ts-check

/**
 * 문제:
 * 정수 리스트 num_list가 주어집니다.
 * 가장 첫 번째 원소를 1번 원소라고 할 때,
 * 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요.
 * 두 값이 같을 경우 그 값을 return합니다.
 */

/**
 *
 * @param {number[]} num_list
 * @returns
 */
const solution = (num_list) => {
  let odd = 0; // 홀수 인덱스에 누적값 초기화
  let even = 0; // 짝수 인덱스에 누적값 초기화

  // num_list 배열의 각 요소를 돌면서,
  num_list.map((num, idx) => {
    // 인덱스를 홀수와 짝수로 구분하여 각 인덱스의 값을 누적값에 더한다.
    idx % 2 === 0 ? (odd += num) : (even += num);
  });

  // 홀수와 짝수 중 큰 값을 반환한다.
  return odd >= even ? odd : even;
};

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
