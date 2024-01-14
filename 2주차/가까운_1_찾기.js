//@ts-check

/**
 * 문제:
 * 정수 배열 arr가 주어집니다.
 * 이때 arr의 원소는 1 또는 0입니다.
 * 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
 *
 * 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
 */

/**
 *
 * @param {number[]} arr
 * @param {number} idx
 * @returns {number}
 */

const solution = (arr, idx) => {
  // 주어진 인덱스 이후 배열 요소에 대해서 반복 실행한다.
  for (let i = idx; i <= arr.length; i++) {
    // 현재 인덱스 값이 1인 경우, 인덱스 값을 반환한다.
    if (arr[i] === 1) return i;
  }

  // 반복이 끝났는데 만족하는 인덱스 값이 없는 경우, -1을 반환한다.
  return -1;
};

console.log(solution([0, 0, 0, 1], 1)); // 3
