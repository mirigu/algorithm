//@ts-check

/**
 * 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다.
 * 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
 *
 * 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
 * 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
 * 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
 * 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
 * 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
 *
 * 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {number} 주사위 숫자에 따른 점수
 */

const solution = (a, b, c, d) => {
  // 주사위 숫자를 정렬하고 각 숫자의 개수를 세는 객체를 생성한다.
  const sortedArr = Object.entries(
    [a, b, c, d]
      .sort((a, b) => a - b)
      .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {})
  ).sort((a, b) => a[1] - b[1]);

  // 주사위 숫자가 모두 같은 경우
  if (sortedArr.length === 1) return a * 1111;

  // 주사위 숫자가 두 종류일 경우
  if (sortedArr.length === 2) {
    const [num1, count1] = sortedArr[0];
    const [num2, count2] = sortedArr[1];

    // 세 개가 동일한 숫자일 경우
    if (count2 === 3) {
      return Math.pow(10 * Number(num2) + Number(num1), 2);
    } else {
      // 두 숫자가 서로 다를 경우
      return (
        (Number(num1) + Number(num2)) * Math.abs(Number(num1) - Number(num2))
      );
    }
  }

  // 주사위 숫자가 세 종류일 경우
  if (sortedArr.length === 3)
    return Number(sortedArr[0][0]) * Number(sortedArr[1][0]);

  // 주사위 숫자가 모두 다를 경우
  return Number(sortedArr[0][0]);
};

console.log(solution(2, 2, 2, 2)); // 2
