/**
 * 문제:
 * 영어 알파벳으로 이루어진 문자열 str이 주어집니다.
 * 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 **/

const answer = (str) => {
  // str을 글자별로 나누고 map을 돌려서 각 인덱스 문자열이 대문자이면 소문자로, 소문자면 대문자로 변환하고 배열의 문자열을 합친다
  const result = str
    .split('')
    .map((v) => {
      if (v === v.toUpperCase()) return v.toLowerCase();
      return v.toUpperCase();
    })
    .join('');

  // result를 출력
  console.log(result);
};

answer('aBcDeFg'); // AbCdEfG
