/**
 * 문제:
 * 문자열 str1, str2가 매개변수로 주어집니다.
 * str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (str1, str2) => {
  // includes 함수를 이용해 str1에 str2가 포함되어 있는지 확인하고 참이면 1, 거짓이면 2를 반환한다.
  return str1.includes(str2) ? 1 : 2;
};

console.log(solution('ppprrrogrammers', 'pppp')); // 2
