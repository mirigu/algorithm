//@ts-check

/**
 * 문제:
 * 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수,
 * my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수,
 * my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을
 * return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @returns {number[]}
 */

const solution = (my_string) => {
  // 결과 담을 배열 초기화
  let result = new Array(52).fill(0);

  // 문자열을 순회하면서 알파벳 갯수 카운트
  my_string.split('').map((str, idx) => {
    // 대문자일 경우, 해당 문자의 아스키 코드에서 'A'의 아스키 코드를 빼고 그 값을 result 배열에 누적시킨다.
    if (str >= 'A' && str <= 'Z')
      return result[str.charCodeAt(0) - 'A'.charCodeAt(0)]++;

    // 소문자일 경우, 해당 문자의 아스키 코드에서 'a'의 아스키 코드를 빼고 26을 더한 값을 result 배열에 누적시킨다.
    if (str >= 'a' && str <= 'z')
      return result[str.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
  });

  // 최종적으로 계산된 배열을 반환한다.
  return result;
};

console.log(solution('Programmers'));
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
