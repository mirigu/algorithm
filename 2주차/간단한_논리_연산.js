//@ts-check

/**
 * 문제:
 * boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때,
 * 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
 *
 * (x1 ∨ x2) ∧ (x3 ∨ x4)
 */

/**
 *
 * @param {boolean} x1
 * @param {boolean} x2
 * @param {boolean} x3
 * @param {boolean} x4
 * @returns {boolean}
 */
const solution = (x1, x2, x3, x4) => {
  // ∨: OR, ∧: AND
  // 문제의 식에 위 기호의 논리연산자를 대입한 결과를 반환한다.
  return (x1 || x2) && (x3 || x4);
};

console.log(solution(false, true, true, true)); // true
