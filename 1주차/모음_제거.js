/**
 * 문제:
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
 * 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
const solution = (my_string) => {
  // 빈 배열 answer 변수를 만든다.
  const answer = [];

  // my_string 문자열을 문자 단위로 나눠 배열로 만들고, 반복문을 실행한다.
  my_string.split('').map((str) => {
    // 모음에 요소가 포함되어 있지 않은 경우, answer 배열에 추가한다.
    if (!['a', 'e', 'i', 'o', 'u'].includes(str)) {
      return answer.push(str);
    }
    return;
  });

  // answer 배열을 합쳐서 문자열로 반환한다.
  return answer.join('');
};

console.log(solution('bus')); // "bs"

// 다른 사람의 풀이
// 와..정규 표현식 쓸 생각은 안했는데..간결하고 깔끔하구나..
function solution1(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

console.log(solution1('bus')); // "bs"
