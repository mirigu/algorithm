//@ts-check

/**
 * 문제:
 * 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때,
 * 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.
 */

/**
 *
 * @param {string[]} names
 * @returns
 */

const solution = (names) => {
  const copyList = []; // names를 n개씩 나눠서 담을 빈 배열
  const results = []; // 결과를 저장할 배열

  // names 배열을 다섯 요소씩 묶어서 copyList 배열에 저장한다.
  for (let i = 0; i <= names.length; i += 5) {
    copyList.push(names.slice(i, i + 5));
  }

  // copyList 배열의 각 그룹에서 첫 번째 요소를 추출해서 결과 배열에 저장한다.
  copyList.map((value) => {
    // 만약에 그룹 첫 번째 요소가 없다면 스킵,
    if (value[0] === undefined) return;
    // 있다면 결과 배열에 그룹의 첫 번째 요소를 추가한다.
    return results.push(value[0]);
  });

  // 결과 배열 반환한다.
  return results;
};

console.log(solution(['nami', 'ahri', 'jayce', 'garen', 'ivern', 'vex'])); // ["nami", "vex"]
