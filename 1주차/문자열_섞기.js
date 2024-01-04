/**
 * 문제:
 * 길이가 같은 두 문자열 str1과 str2가 주어집니다.
 * 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (str1, str2) => {
  let answer = [];

  // str1 과 str2의 길이가 같으므로,
  // str1 문자열을 각 문자 단위로 나눠서 배열로 반환하고 answer 배열에 str1과 str2의 각 인덱스 요소를 추가한다.
  str1.split('').map((str, idx) => {
    answer.push(str, str2[idx]);
  });

  // answer 배열의 요소를 합쳐서 문자열로 만들어 반환한다.
  return answer.join('');
};

console.log(solution('aaaaa', 'bbbbb')); // ababababab
