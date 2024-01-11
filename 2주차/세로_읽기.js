//@ts-check

/**
 * 문제:
 * 문자열 my_string과 두 정수 m, c가 주어집니다.
 * my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {number} m
 * @param {number} c
 * @returns {string}
 */

const solution = (my_string, m, c) => {
  // my_string의 길이를 m으로 나눈 값을 길이로 하는 배열 numbers를 생성한다.
  // 요소는 배열의 인덱스를 값으로 한다.
  const numbers = new Array(Math.floor(my_string.length / m))
    .fill(0)
    .map((_, idx) => idx);

  // numbers 배열을 순회하며 my_string을 m개씩 잘라서 배열로 만든다
  const matrix = numbers.map((num) => {
    return [...my_string].splice(num * m, m);
  });

  // matrix 배열에서 각 배열의 c-1번째 요소를 추출해서 문자열로 합친다.
  return matrix.map((arr) => arr[c - 1]).join('');
};

console.log(solution('ihrhbakrfpndopljhygc', 4, 2));
