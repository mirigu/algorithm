/**
 * 문제:
 * 정수가 담긴 리스트 num_list가 주어집니다.
 * num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => {
  // 홀수인 요소들만 찾아서 문자열로 변환하고 하나의 문자열로 합치고 숫자로 변환한다.
  const sumOdd = Number(num_list.filter((num) => num % 2 !== 0).join(''));

  // 짝수인 요소들만 찾아서 문자열로 변환하고 하나의 문자열로 합치고 숫자로 변환한다.
  const sumEven = Number(num_list.filter((num) => num % 2 === 0).join(''));

  // 홀수와 짝수를 합해서 반환한다.
  return sumOdd + sumEven;
};

console.log(solution([3, 4, 5, 2, 1]));
