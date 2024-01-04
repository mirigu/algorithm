/**
 * 문제:
 * 문자열 str이 주어집니다.
 * 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
 * a
 * b
 * c
 * d
 * e
 */

const answer = (str) => {
  // 문자열을 각 문자단위로 나눠서 배열로 변환하고, map함수 사용해서 각 문자열을 출력한다.
  str.split('').map((v) => console.log(v));
};

answer('abcde');
// a
// b
// c
// d
// e
