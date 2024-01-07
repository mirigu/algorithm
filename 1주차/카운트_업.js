//@ts-check

/**
 * 문제:
 * 정수 start_num와 end_num가 주어질 때,
 * start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

/**
 * @param {number} start_num
 * @param {number} end_num
 * @returns {number[]}
 */

const solution = (start_num, end_num) => {
  // 배열의 길이를 계산해서 시작 숫자로 초기화한 배열을 생성한다.
  // 각 요소에 인덱스를 더해서 연속된 정수 배열을 반환한다.
  return new Array(end_num - start_num + 1)
    .fill(start_num)
    .map((num, idx) => num + idx);
};

console.log(solution(3, 10));
