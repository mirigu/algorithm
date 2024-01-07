/**
 * 문제:
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
 *
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.
 *
 * 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
 * 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
 */

const solution = (arr, queries) => {
  // 각 쿼리에 대한 결과 배열을 생성한다.
  const results = queries.map((query) => {
    // 쿼리에 해당하는 부분 배열을 추출하고, 비교 기준값보다 큰 숫자를 필터링하고 오름차순으로 정렬한다.
    const filteredAndSorted = arr
      .slice(query[0], query[1] + 1)
      .filter((num) => query[2] < num)
      .sort((a, b) => a - b);

    return filteredAndSorted;
  });

  // 결과 배열에서 가장 작은 값을 추출하고, 값이 없으면 -1을 반환한다.
  return results.map((arr) => (arr.length <= 0 ? -1 : arr[0]));
};

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
); // [3, 4, -1]
