/**
 * 문제:
 * 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, k) => {
  // k길이의 배열을 생성해서 배열의 요소를 모두 my_string의 문자열로 변환하고, 배열을 하나의 문자열로 합쳐서 반환한다.
  return [...new Array(k)].map((_) => my_string).join('');
};

console.log(solution('string', 3));
