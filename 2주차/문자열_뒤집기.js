//@ts-check

/**
 * 문제:
 * 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
 * my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {number} s
 * @param {number} e
 * @returns {string}
 */

const solution = (my_string, s, e) => {
  // my_string를 각 문자단위로 나눠 배열을 생성한다.
  const array = my_string.split('');

  // my_string을 복사한 배열에서 인덱스 s부터 인덱스 e까지를 추출해서 역순으로 나열하고 문자열로 합친 변수를 생성한다.
  const reversedSubstring = array
    .slice(s, e + 1)
    .reverse()
    .join('');

  // my_string을 복사한 배열에서 인덱스 s부터 인덱스 e까지를 역순으로 나열한 문자열로 변경한다.
  array.splice(s, e - s + 1, reversedSubstring);

  // 변경한 배열의 각 요소를 합쳐서 반환한다.
  return array.join('');
};

console.log(solution('Progra21Sremm3', 6, 12));
