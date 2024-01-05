/**
 * 문제:
 * 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다.
 * 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
 * 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (a, d, included) => {
  return [...new Array(included.length)] // included 길이와 동일한 배열을 생성한다.
    .map((_, idx) => a + d * idx) // 베열을 초기화하면서 각 요소를 등차수열의 항으로 설정한다.
    .filter((_, idx) => included[idx]) // included 배열 값을 기반으로 true에 해당하는 항목만 남긴다.
    .reduce((acc, cur) => acc + cur); // 남은 항목를 모두 더한 합을 반환한다.
};

console.log(solution(3, 4, [true, false, false, true, true])); // 37
