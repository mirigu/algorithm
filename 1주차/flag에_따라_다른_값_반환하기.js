/**
 * 문제:
 * 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때,
 * flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (a, b, flag) => {
  // flag의 값이 참이면 a+b를 반환하고,a-b를 반환한다.
  return flag ? a + b : a - b;
};

console.log(solution(-4, 7, true)); // 3
