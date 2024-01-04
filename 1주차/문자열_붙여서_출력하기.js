/*
 * 문제:
 * 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
 * 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.
 */

// 문자열이 공백으로 구분되어 하나의 인자로 들어오는 경우,
const answer1 = (str) => {
  // 문자열을 공백으로 나눠 배열로 만들고 공백없이 합치고 출력한다.
  console.log(str.split(' ').join(''));
};

answer1('apple pen'); // applepen

// 문자열이 str1, str2로 구분되어 들어오는 경우,
const answer2 = (str1, str2) => {
  //str1, str2를 (+)연산자를 이용해 합치고 출력한다.
  console.log(str1 + str2);
};

answer2('Hello', 'World!'); // HelloWorld!
