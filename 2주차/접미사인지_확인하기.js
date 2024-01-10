//@ts-check

/**
 * 문제:
 * 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
 * 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
 *
 * 문자열 my_string과 is_suffix가 주어질 때,
 * is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {string} is_suffix
 * @returns {number}
 */

const solution = (my_string, is_suffix) => {
  // my_string에서 모든 접미사를 생성해서 배열로 만든다.
  const suffixes = [...my_string].map((_, idx) => my_string.substring(idx));

  // 접미사들을 나열한 배열에 is_suffix가 포함되어 있으면 1을 반환하고, 아니면 0을 반환한다.
  return suffixes.includes(is_suffix) ? 1 : 0;
};

console.log(solution('banana', 'ana')); // 1
