//@ts-check

/**
 * 문제:
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때,
 * my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {number} n
 * @returns {string}
 */

const solution = (my_string, n) => {
  // 문자열을 배열로 변환하고 역순으로 나열한다.
  const reversedArray = my_string.split('').reverse();

  // 역순으로 나열한 배열에서 처음부터 n개 요소를 추출한다.
  const slicedArray = reversedArray.slice(0, n);

  // 추출한 배열을 다시 역순으로 나열하고 문자열로 합친다.
  const results = slicedArray.reverse().join('');

  // 결과를 반환한다.
  return results;
};

console.log(solution('ProgrammerS123', 11)); //'grammerS123'
