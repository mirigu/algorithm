//@ts-check

/**
 * 문제:
 * 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.
 *
 * intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다.
 * 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.
 *
 * 이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.
 */

/**
 *
 * @param {number[]} arr
 * @param {number[][]} intervals
 * @returns
 */

const solution = (arr, intervals) => {
  // 결과를 저장할 빈 배열을 생성한다.
  const results = [];

  // intervals 배열을 순회한다.
  intervals.map((interval) => {
    // arr을 순회하면서
    arr.map((num, idx) => {
      // 현재 인덱스가 현재 구간에 속하면 결과 배열에 해당 요소를 추가한다.
      if (idx >= interval[0] && idx <= interval[1]) return results.push(num);
    });
  });

  // 결과 배열을 반환한다.
  return results;
};

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
); // [2, 3, 4, 1, 2, 3, 4, 5]
