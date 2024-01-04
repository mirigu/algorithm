/**
 * 문제:
 * 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
 *
 * 12 ⊕ 3 = 123
 * 3 ⊕ 12 = 312
 *
 * 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
 * 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
 */

const solution = (a, b) => {
  // a 와 b를 문자열로 변경하고,
  // a + b 와 b + a 를 비교했을때 더 큰 값의 타입을 number로 바꿔서 리턴한다.
  return a.toString() + b.toString() >= b.toString() + a.toString()
    ? Number(a.toString() + b.toString())
    : Number(b.toString() + a.toString());
};

console.log(solution(9, 91)); // 991
