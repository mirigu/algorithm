/**
 * 문제:
 * 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
 */

const answer = (n) => {
  // n을 2로 나눴을때 나머지가 0이면 "n is even"을, 아니면 "n is odd"를 출력한다.
  console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
};

answer(100);
