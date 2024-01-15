//@ts-check

/**
 * 문제:
 * 정수 배열 arr와 query가 주어집니다.
 * query를 순회하면서 다음 작업을 반복합니다.
 *
 * 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
 * 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
 *
 * 위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.
 */

/**
 *
 * @param {number[]} arr
 * @param {number[]} query
 * @returns {number[]}
 */

const solution = (arr, query) => {
  // arr을 복사한 배열을 생성한다.
  const results = arr.slice();

  // query를 순회하면서
  query.map((num, idx) => {
    // 짝수 인덱스에 해당하는 요소인 경우, 결과 배열에서 (num + 1) 인덱스 이후의 요소들을 제거한다.
    if (idx % 2 === 0) return results.splice(num + 1);

    // 홀수 인덱스에 해당하는 요소인 경우, 결과 배열에서 처음부터 num 개의 요소를 제거한다.
    return results.splice(0, num);
  });

  // 최종 결과를 반환한다.
  return results;
};

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]
