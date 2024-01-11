//@ts-check

/**
 * 문제:
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때,
 * my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {number} n
 * @returns {string}
 */

const solution = (my_string, n) => {
  // my_string에서 0번째 인덱스부터 n까지의 문자열을 잘라 반환한다.
  return my_string.slice(0, n);
};

console.log(solution('ProgrammerS123', 11));
