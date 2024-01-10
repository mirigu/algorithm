//@ts-check

/**
 * 문제:
 * 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
 * parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
 * 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string[]} my_strings
 * @param {number[][]} parts
 * @returns {string}
 */

const solution = (my_strings, parts) => {
  // parts 배열을 순회하면서 각 부분을 my_strings 배열에서 추출하여 배열로 만든다.
  // 그리고 join을 사용해서 배열을 이어 붙인 문자열을 반환합니다.
  return parts
    .map((part, idx) => my_strings[idx].slice(part[0], part[1] + 1))
    .join('');
};

const my_strings = ['progressive', 'hamburger', 'hammer', 'ahocorasick'];
const parts = [
  [0, 4],
  [1, 2],
  [3, 5],
  [7, 7],
];

console.log(solution(my_strings, parts)); //"programmers"
