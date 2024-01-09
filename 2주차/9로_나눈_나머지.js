//@ts-check

/**
 * 문제:
 * 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
 * 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때,
 * 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
 */

/**
 *
 * @param {string} number
 * @returns {number}
 */

const solution = (number) => {
  // 주어진 문자를 각 문자단위로 나눠서 배열을 생성하고, 각 요소를 숫자로 변환한다.
  // reduce 함수를 사용해서 배열의 모든 요소를 누적하고 합산한다.
  const arraySum = number
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur);

  // 배열의 합을 9 로 나눈 나머지를 반환한다.
  return arraySum % 9;
};

console.log(solution('78720646226947352489')); // 2
