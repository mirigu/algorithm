/**
 * 문제:
 * 정수 배열 numLog가 주어집니다.
 * 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.
 *
 * "w" : 수에 1을 더한다.
 * "s" : 수에 1을 뺀다.
 * "d" : 수에 10을 더한다.
 * "a" : 수에 10을 뺀다.
 *
 * 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다.
 * 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
 *
 * 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
 */

// 숫자에 따라 문자열로 변환하는 함수
const manipulateNumber = (num) => {
  switch (num) {
    case 1:
      return 'w';
    case -1:
      return 's';
    case 10:
      return 'd';
    case -10:
      return 'a';
  }
};

const solution = (numLog) => {
  //numLog 각 요소간 차를 manipulateNumber 함수에 호춯해서 반환받은 값의 배열의 요소를 하나의 문자열로 합쳐서 반환한다.
  return numLog
    .map((num, idx) => manipulateNumber(numLog[idx + 1] - num))
    .join('');
};

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // "wsdawsdassw"
