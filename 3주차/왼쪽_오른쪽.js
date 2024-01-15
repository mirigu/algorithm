//@ts-check

/**
 * 문제:
 * 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다.
 * str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를,
 * 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를
 * return하도록 solution 함수를 완성해주세요.
 *
 * "l"이나 "r"이 없다면 빈 리스트를 return합니다.
 */

/**
 *
 * @param {string[]} str_list
 * @returns {string[]}
 */

const solution = (str_list) => {
  // str_list를 순회하면서
  for (let i = 0; i <= str_list.length; i++) {
    // 'l'가 나오면, 해당 인덱스 이전 부분 배열을 반환한다.
    if (str_list[i] === 'l') return str_list.splice(0, i);
    // 'r'가 나오면, 해당 인덱스 이후 부분 배열을 반환한다.
    if (str_list[i] === 'r') return str_list.splice(i + 1);
  }

  // 'l' 또는 'r'가 배열에 없는 경우, 빈 배열을 반환한다.
  return [];
};

console.log(solution(['r', 'u', 'd', 'd'])); // ["u", "d", "d"]
