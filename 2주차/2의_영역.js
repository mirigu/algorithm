//@ts-check

/**
 * 문제:
 * 정수 배열 arr가 주어집니다.
 * 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
 *
 * 단, arr에 2가 없는 경우 [-1]을 return 합니다.
 */

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

const solution = (arr) => {
  // 2의 값에 해당하는 인덱스들을 저장할 빈 배열을 생성한다.
  const indexList = [];

  // arr을 순회하면서 2의 값을 가진 요소의 인덱스를 indexList 배열에 추가
  arr.map((num, idx) => {
    if (num === 2) return indexList.push(idx);
  });

  // 만약 2의 값이 하나도 없으면, [-1]을 반환한다.
  if (indexList.length === 0) return [-1];

  // 만약 2의 값이 한 번만 나타나면 [2]를 반환한다.
  if (indexList.length === 1) return [2];

  // 2의 값이 여러 번 나오면 처음 나오는 인덱스부터 마지막 인덱스까지의 부분 배열을 반환한다.
  return arr.slice(indexList[0], indexList[indexList.length - 1] + 1);
};

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
