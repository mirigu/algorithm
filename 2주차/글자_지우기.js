//@ts-check

/**
 * 문제:
 * 문자열 my_string과 정수 배열 indices가 주어질 때,
 * my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을
 * return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {number[]} indices
 * @returns {string}
 */

const solution = (my_string, indices) => {
  // 결과를 저장할 변수를 초기화한다.
  let results = '';

  // my_string을 각 문자단위로 나눠 배열을 생성하고, 각 문자와 인덱스에 대해 반복을 실행한다.
  my_string.split('').map((str, idx) => {
    // 현재 인덱스가 indices 요소에 포함되지 않다면,
    if (!indices.includes(idx)) {
      // 결과 문자열에 현재 요소를 추가한다.
      results += str;
    }
  });

  // 최종적으로 생성된 결과를 반환한다.
  return results;
};

console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"
