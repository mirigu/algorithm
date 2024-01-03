/**
 * 문제:
 * 문자열 str과 정수 n이 주어집니다.
 * str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
 **/

const answer = (str, n) => {
  // 빈 배열을 만들어준다.
  let array = [];

  // n번 반복된 str을 array 배열에 담아준다.
  for (let i = 0; i < n; i++) {
    array.push(str);
  }

  // array 배열을 함쳐서 출력한다.
  console.log(array.join(''));
};

answer('string', 5); // stringstringstringstringstring
