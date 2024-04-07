//@ts-check

/**
 * 문제
 * 정수 배열 numbers와 정수 n이 매개변수로 주어집니다.
 * numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {number[]} numbers
 * @param {number} n
 * @returns {number}
 */

const solution = (numbers, n) => {
  let results = 0; // 결과를 저장할 변수를 초기화한다.

  // numbers 배열을 순회한다.
  numbers.forEach((number) => {
    // 만약 현재까지 결과가 n보다 작거나 같으면 현재 숫자를 결과에 더한다.
    if (results <= n) return (results += number);
  });

  // 최종 결과를 반환한다.
  return results;
};

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
