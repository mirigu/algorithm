//@ts-check

/**
 * 문제:
 * 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
 * queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
 * my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {number[][]} queries
 * @returns {string}
 */

const solution = (my_string, queries) => {
  // my_string를 배열로 변환해서 str 변수로 담는다.
  let str = my_string.split('');

  // 쿼리에 대해 반복을 실행한다.
  queries.forEach((query) => {
    // 쿼리에 해당하는 문자열을 추출해서 역순으로 뒤집는다.
    const slice = str.slice(query[0], query[1] + 1).reverse();
    // str 배열에서 뒤집힌 부분을 교환한다.
    str.splice(query[0], query[1] - query[0] + 1, ...slice);
  });

  // 배열을 문자열로 변환해서 반환한다.
  return str.join('');
};

const my_string = 'rermgorpsam';
const queries = [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
];

console.log(solution(my_string, queries)); // 'programmers'
