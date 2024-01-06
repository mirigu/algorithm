/**
 * 문제:
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
 * queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
 *
 * 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
 *
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (arr, queries) => {
  // arr의 배열을 복사한다.
  let answer = arr;

  // queries 배열의 각 요소를 [i, j]라고 할 때, answer[i]의 값과 answer[j] 값을 서로 바꾼다.
  queries.map((query) => {
    let tmp = answer[query[0]];
    answer[query[0]] = answer[query[1]];
    answer[query[1]] = tmp;
  });

  // 수정된 배열을 반환한다.
  return answer;
};

const arr = [0, 1, 2, 3, 4];
const queries = [
  [0, 3],
  [1, 2],
  [1, 4],
];
console.log(solution(arr, queries)); // [3, 4, 1, 0, 2]
