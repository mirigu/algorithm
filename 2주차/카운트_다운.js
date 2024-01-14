// @ts-check

/**
 * 문제:
 * 정수 start_num와 end_num가 주어질 때,
 * start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

/**
 *
 * @param {number} start
 * @param {number} end_num
 * @returns {number[]}
 */

const solution = (start, end_num) => {
  return (
    // 시작 숫자와 끝 숫자 사이의 범위 크기를 계산하고 배열을 생성한다.
    new Array(start - end_num + 1)
      // 배열의 각 요소는 start로 초기값을 설정한다.
      .fill(start)
      // 현재 요소에서 현재 인덱스를 뺀 값을 새로운 값으로 설정한다.
      .map((num, idx) => num - idx)
  );
};

console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]
