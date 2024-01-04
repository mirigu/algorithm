/**
 * 문제:
 * 문자열 my_string이 매개변수로 주어집니다.
 * my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (my_string) => {
  // 문자열 my_string을 배열로 변환하고, filter() 함수로 숫자인 요소만 추출한다.
  // 숫자만 추출된 배열의 요소를 순회하면서 초기값 0에 요소들을 더한 값을 반환한다.
  return my_string
    .split('')
    .filter((str) => Number(str))
    .reduce((acc, cur) => acc + Number(cur), 0);
};

console.log(solution('1a2b3c4d123')); // 16
