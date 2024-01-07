//@ts-check

/**
 * 문제:
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
 *
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
 *
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
 */

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @returns {number[]}
 */

const solution = (arr, queries) => {
  // arr 배열을 복사해서 answer에 할당한다.
  let answer = arr;

  // 각 쿼리에 대해 배열을 돌면서 조건에 따라 answer 배열의 요소를 수정한다.
  queries.map((query) => {
    answer.map((num, idx) => {
      // answer 배열의 인덱스가 쿼리 구간(s,e)에 해당하는 경우,
      if (query[0] <= idx && idx <= query[1]) {
        // 인덱스가 k의 배수이면 요소의 값에 +1 해주고, 아니면 요소의 값을 유지한다.
        return idx % query[2] === 0 ? (answer[idx] = num + 1) : num;
      }

      // 구간에 해당하지 않는 경우, 요소 값 그대로 유지한다.
      return num;
    });
  });

  // 최종 수정된 배열을 반환한다.
  return answer;
};

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
); // [3, 2, 4, 6, 4]
