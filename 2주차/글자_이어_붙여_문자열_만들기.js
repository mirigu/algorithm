//@ts-check

/**
 * 문제:
 * 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다.
 * my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string} my_string
 * @param {number[]} index_list
 * @returns {string} index_list의 원소에 해당하는 인덱스의 문자들을 연결한 문자열
 */

const solution = (my_string, index_list) => {
  // index_list 배열의 각 인덱스에 해당하는 문자들을 추출해서 새로운 배열을 생성하고, 배열의 요소들을 문자열로 연결해서 반환한다.
  return index_list.map((index) => my_string.charAt(index)).join('');
};

const my_string = 'cvsgiorszzzmrpaqpe';
const index_list = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];

console.log(solution(my_string, index_list)); // "programmers"
