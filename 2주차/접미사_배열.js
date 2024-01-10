//@ts-check

/**
 * 문제:
 * 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
 * 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
 *
 * 문자열 my_string이 매개변수로 주어질 때,
 * my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 * @param {string} my_string
 * @returns {string[]}
 */

const solution = (my_string) => {
  // 문자열을 배열로 분해하고 각 요소에 대해 반복한다.
  return [...my_string]
    .map((_, idx) =>
      // 현재 문자에서 시작해서 끝까지 부분 문자열을 생성한다.
      my_string.substring(idx)
    )
    .sort(); // 생성된 문자열 배열을 사전순으로 정렬한다.
};

console.log(solution('banana')); // ["a", "ana", "anana", "banana", "na", "nana"]
