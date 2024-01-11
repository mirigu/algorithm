//@ts-check

/**
 * 문제:
 * 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다.
 * 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
 * 문자열 my_string과 is_prefix가 주어질 때,
 * is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {string} is_prefix
 * @returns {number}
 */

const solution = (my_string, is_prefix) => {
  // my_string을 각 문자단위로 나누고, 접두사를 새로운 배열 prefixesArray에 담는다.
  const prefixesArray = my_string
    .split('')
    .map((_, idx) => my_string.slice(0, idx + 1));

  // 접두사 배열 요소 중 is_prefix가 포함되어 있으면 1을 반환하고, 아니면 0을 반환한다.
  return prefixesArray.includes(is_prefix) ? 1 : 0;
};

console.log(solution('banana', 'ban'));
