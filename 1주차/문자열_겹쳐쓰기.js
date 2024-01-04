/**
 * 문제:
 * 문자열 my_string, overwrite_string과 정수 s가 주어집니다.
 * 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, overwrite_string, s) => {
  // my_string 문자열을 각 문자단위로 나눠서 배열로 변환한다.
  const result = my_string.split('');

  // splice 함수로 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 overwrite_string 문자열로 변경한다.
  result.splice(s, overwrite_string.length, overwrite_string);

  // 배열을 문자열로 합쳐서 리턴한다.
  return result.join('');
};

console.log(solution('He11oWor1d', 'lloWorl', 2)); // HelloWorld
